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
    res.render('admin/agregar', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    });
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
});

router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadByID(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedad
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        var campos = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
        }

        await novedadesModel.modifyNovedadById(campos, req.body.id);
        res.redirect('/admin/novedades');        
    } catch (error) {
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se pudo modificar la novedad'
        });
    }
});

router.get('/ocultar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.hideNovedadById(id);
    res.redirect('/admin/novedades');
});

router.get('/mostrar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.unhideNovedadById(id);
    res.redirect('/admin/novedades');
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

router.get('/papelera', async (req, res, next) => {
    var novedadesEliminadas = await novedadesModel.getNovedadesDeleted();
    res.render('admin/papelera', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedadesEliminadas
    });
});

router.get('/recuperar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.undoDeleteNovedadById(id);
    res.redirect('/admin/novedades/papelera');
});

router.get('/eliminar-perm/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesModel.deletePermanentlyNovedadById(id);
    res.redirect('/admin/novedades/papelera');
});

module.exports = router;