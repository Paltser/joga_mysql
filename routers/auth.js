const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')


router.get('/login', authController.loginPage)
router.post('/login', (req, res) => {
    const password = req.body.password;
    const  username = req.body.username
    if (password === 'password123' && username === 'markos') {
        // Redirect to main site
        res.redirect('/');
    } else {
        // Redirect back to login page with an error message
        res.redirect('/login?error=Invalid%20password');
    }
});

module.exports = router;
