/*
 * GET home page.
 */var models = require("../models");

exports.index = function(req, res) {
    res.render('index', {
        title : 'Expresses'
    });
};
