const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const workOrderSchema = new mongoose.Schema({}, {timestamps:true});

module.exports = mongoose.model('Work-Order', workOrderSchema);