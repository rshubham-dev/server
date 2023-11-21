const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        unique: true,
        lowercase: true
    },
    coverImage: String,
    designation: String,
    cv: String,
},
    { timestamps: true });

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')){
        next();
    }
    try {
        const hash_password = await bcrypt.hash(user.password, 24);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
})
module.exports = mongoose.model('User', userSchema);