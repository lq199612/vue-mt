import mongoose from 'mongoose'
const Shema = mongoose.Schema
const UserShema = new Shema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

export default mongoose.model('user',UserShema)