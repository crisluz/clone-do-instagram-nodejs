const express = require ('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const PostController = require("./controller/PostController.js");
const routes = new express.Router();
const upload = multer(uploadConfig);


routes.post('/posts', upload.single('image'), PostController.store);



module.exports = routes;