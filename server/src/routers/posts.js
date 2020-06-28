const express = require('express');
const bodyParser = require('body-parser');

// const postModel = require('../model/posts.js');

const router = express.Router();

router.use(bodyParser.json());

// router.get('/posts', function(req, res, next) {
//     postModel.list().then(posts => {
//         res.json(posts);
//     }).catch(next);
// });

module.exports = router;