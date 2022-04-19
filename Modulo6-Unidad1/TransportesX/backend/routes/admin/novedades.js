var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

// Seleccionar novedades 
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

router.get('/agregar', function(req, res, next) {
    res.render('admin/agregar', { layout: 'admin/layout' });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" & req.body.subtitulo != "" & req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo cargar la novedad'
        });
    }
})

module.exports = router;