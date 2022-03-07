var express = require('express');
var router = express.Router();

// GET ruta2
router.get('/', function(req, res) {
    res.render('ruta2');
});

module.exports = router;