const User = require('../models/User');


exports.signup_get = (req, res, next) => {
    res.render('signup');
};
exports.login_get = (req, res, next) => {
    res.render('login');
};

exports.signup_post = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).send('error, user not created');
    }
};

exports.login_post = async (req, res, next) => {
    const { email, password } = req.body;
    res.json({
        email,
        password
    })
    res.send('user loggin');
};