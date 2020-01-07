import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMalier from 'nodemailer'
import User from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

let router = new Router({
    prefix: '/users'
})

let Store = new Redis().client

// 注册接口
router.post('/signup', async ctx => {
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body
    // 验证验证码
    if (code) {
        // 取出用户的code属性
        const saveCode = await Store.hget(`nodemail:${username}`, 'code')
        const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
        // console.log('username:', username, 'code:', code, 'saveCode:', saveCode);
        if (code === saveCode) {
            if (new Date().getTime() - saveExpire > 0) {  // 验证码过期
                ctx.body = {
                    code: -1,
                    msg: '验证码已过期，请重新尝试'
                }
                return false
            }
        } else {   // 验证码填写不一致
            ctx.body = {
                code: -1,
                msg: '请填写正确的验证码'
            }
            return false
        }

    } else {  // 未填写验证码
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }
    }

    // 验证码通过，验证用户名和密码
    let user = await User.find({ username })
    if (user.length) {  // 用户名已被注册
        ctx.body = {
            code: -1,
            msg: '用户名已被注册!'
        }
        return
    }
    let newUser = await User.create({  // 创建新用户
        username,
        password,
        email,
        code
    })
    // 成功注册后，自动登录，将用户信息存入session中
    // if (newUser) {
    //     let res = await axios.post('users/signin', { username, password })
    //     if (res.data && res.data.code === 0) {
    //         ctx.body = {
    //             code: 0,
    //             msg: '注册成功',
    //             user: res.data.user
    //         }
    //     } else {
    //         ctx.body = {
    //             code: -1,
    //             msg: 'error'
    //         }
    //     }
    // } else {   // 登录失败
    //     ctx.body = {
    //         code: -1,
    //         msg: '注册失败'
    //     }
    // }

    ctx.body = {
        code: 0,
        msg: '成功注册'
    }
})

// 登录接口
router.post('/signin', async (ctx, next) => {
    console.log(ctx.session ? 0 : 1);
    return Passport.authenticate('local', function (err, user, info, status) {
        if (err) {  // 错误
            console.log('1');
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {  // 写入session
                console.log('2');
                ctx.body = {
                    code: 0,
                    msg: '登录成功',
                    user
                }
                return ctx.login(user)  // **触发passport.serializeUser函数
            } else {
                console.log('3');
                ctx.body = {
                    code: -1,
                    msg: info
                }
            }
        }
    })(ctx, next)
})

// 请求验证码
router.post('/verify', async (ctx, next) => {
    let username = ctx.request.body.username
    const savaExpire = await Store.hget(`nodemail:${username}`, 'expire')
    // 防止频繁请求验证码
    if (savaExpire && new Date().getTime() - savaExpire < 0) {
        ctx.body = {
            code: -1,
            msg: '验证请求过于频繁，1分钟内一次'
        }
        return false
    }
    // 发送对象
    let transporter = nodeMalier.createTransport({
        host: Email.smtp.host,
        post: 587,
        secure: false,
        auth: {
            user: Email.smtp.user,
            pass: Email.smtp.pass
        }
    })
    // 接受信息
    let ko = {
        code: Email.code(),
        expire: Email.expire(),
        email: ctx.request.body.email,
        user: ctx.request.body.username
    }
    // 邮件中显示的内容
    let mailOptions = {
        from: `'认证邮件'<${Email.smtp.user}>`,
        to: ko.email,
        subject: '<<慕课网实战>>',
        html: `您在<<慕课网实战>>课程中注册！，您的邀请码是${ko.code}`
    }
    // 发送邮件 // 验证邮件发送成功后，将验证码对于的信息存储在redis中
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            ctx.body = {
                code: -1,
                msg: '验证码发送失败！'
            }
            return console.log('error');

        } else {
            Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
        }
    })
    ctx.body = {
        code: 0,
        msg: '验证码已发送，请稍等！'
    }
})

// 退出
router.get('/exit', async ctx => {
    await ctx.logout()
    // 二次验证，看是否成功注销掉
    if (!ctx.isAuthenticated()) {
        ctx.body = {
            code: 0
        }
    } else {
        ctx.body = {
            code: -1
        }
    }
})

// 获取用户名
router.get('/getuser', ctx => {
    if (ctx.isAuthenticated()) {  // 触发passport.deserializeUser函数
        const { username, email } = ctx.session.passport.user
        ctx.body = {
            user: username,
            email: email
        }
    } else {
        ctx.body = {
            user: '',
            email: ''
        }
    }
})

export default router