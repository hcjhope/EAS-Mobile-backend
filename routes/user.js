'use strict';

import express from 'express';
import User from '../controllers/user'
import formidable from 'formidable'

const router = express.Router();

router.get('/', (req, res) => {
	res.json({name: '/user'})
})

// 上传头像接口
router.post('/upload', User.uploadAvatar)

// 获取验证码
// router.post('/captchas', Captchas.getCaptchas)
// router.get('/captchas', Captchas.getCaptchas)

// router.get('/adduser', User.regUserGet)
// router.post('/adduser', User.addUserPost)

// router.post('/login', User.login)

router.post('/changepassword', User.changePassword)

export default router