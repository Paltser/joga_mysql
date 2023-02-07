const express = require('express')
const router = express.Router()
const articlecontroller = require('../controllers/article')

router.get('/', articlecontroller.getAllArticles)
router.get('/article/:slug', articlecontroller.getArticleBySlug)

module.exports = router;