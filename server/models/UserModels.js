const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new  mongoose.Schema({

name:{
    type:String,
    unique:true
    
},
phoneNumber:{
    type:Number,
   
    
},
password:{
    type:String,
    
},
isAdmin:{
    type:Boolean,
   
    default:false,
}

// LOGIN
},{timestamps:true})
userSchema.methods.matchPassword = async function (enterPassword){
return await bcrypt.compare(enterPassword,this.password)

}

//REGISTER

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) {
        next()
        
    }
    const  salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})
const User = mongoose.model('User', userSchema);

module.exports = User;

