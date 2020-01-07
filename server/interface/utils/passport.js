import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy.Strategy(async function(username,password,done){
    let where = {
        username
    }
   let res =  await UserModel.findOne(where)
   if(res!=null){ // 用户存在
       if(res.password === password){  // 成功
            // console.log('用户名密码成功校验');
            
            return done(null,res)
       }else{   // 用户存在但是密码错误
           return done(null,false,'密码错误')
       }
   }else{ // 用户不存在
       return done(null,false,'用户不存在')
   }
}))

/* 
   使用session验证
   序列化
   每次请求的时候，会从session中读取用户对象，序列化是查到用户登录成功
   之后，会把用户的信息存储在session中。

*/
passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

export default passport
