'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	loginName: String,
	password: String,
	id: Number,
	create_time: String,
	admin: { type: String, default: '普通管理员' },
	status: Number,  //1:普通管理、 2:超级管理员
})

adminSchema.index({ id: 1 });

const Admin = mongoose.model('Admin', adminSchema);


export default Admin