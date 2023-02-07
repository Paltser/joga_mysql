const con = require('../utils/db')

const authorArticles = (req, res) => {
    let query = `SELECT article.name as article_name, article.image, article.slug ,author.name, article.body
    from article JOIN author ON article.author_id = author.id where author.id = ${req.params.id}`;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('author', {
            articles: articles
        });
    });
}
module.exports = {
    authorArticles
}
