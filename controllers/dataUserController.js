var User = require('../models/datos');
const { body,validationResult } = require('express-validator');

exports.user_data = function(req, res) {
    res.render('userDates', {title: 'Ingresar a datos' , layout:false})
};

