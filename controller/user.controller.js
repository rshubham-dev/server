const User = require("../models/user.models");
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    try {
        const {name, email, password, userId, phone, designation} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: 'email already exists'});
        }
        const userCreated = await User.create({});
        res.status(200).json({msg:'User created successfuly'});
    } catch (error) {
        res.send(error)
    }
};


const login = async (req, res, next) => {
    try {
        const {email, password, userId} = req.body;
        const userExist = await User.findOne({email, userId});
        if(!userExist){
            return res.status(400).json({msg: `Invalid Credentials`});
        }
        const user = await bcrypt.compare(password, userExist.password);
        // if(user){};

        res.status(200).json({email, password, userId});
    } catch (error) {
        res.send(error);
    }
};
const users = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(error)
    }
};
const updateUser = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(error)
    }
};
const deleteUser = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(error)
    }
};

module.exports = { register, login, users, updateUser, deleteUser };