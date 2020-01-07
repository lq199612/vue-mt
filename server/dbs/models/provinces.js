import mongoose from 'mongoose'
const Shema = mongoose.Schema
const ProvincesShema = new Shema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    value:{
        type:String,
        unique:true,
        required:true
    },
})

export default mongoose.model('province',ProvincesShema)