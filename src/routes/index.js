const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    //res.sendFile();
    res.render('index.html', { title: 'Online shopping'});
    });

router.get('/contact', (req, res) => {
    //res.sendFile();
    res.render('contact.html', { title: 'Contact Page'});
    });

router.get('/about', (req, res) => {
     //res.sendFile();
     res.render('about.html', { title: 'About Page'});
    });

router.get('/register', (req, res) => {
    //res.sendFile();
    res.render('register.html', { title: 'register Page'});
    });

    module.exports = router;