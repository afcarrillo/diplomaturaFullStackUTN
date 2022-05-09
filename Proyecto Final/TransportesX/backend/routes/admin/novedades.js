var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

// Seleccionar novedades 
router.get('/', async function(req, res, next) {
    var novedades = await novedadesModel.getNovedades(req.session.nombre);
    
    novedades = novedades.map( novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }

        }
    });

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
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }
        if (req.body.titulo != "" & req.body.subtitulo != "" & req.body.cuerpo != "") {
            var usuario = req.session.nombre;
            await novedadesModel.insertNovedad({
                ...req.body,
                usuario,
                img_id
            });
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
        var img_id = req.body.img_original;
        var borrar_img_vieja = false;
        // comprobamos si hemos seleccionado una nueva imagen y en caso afirmativo la subimos a cloudinary
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
            borrar_img_vieja = true;
        }
        else {
            // comprobamos si hemos marcado el checkbox para eliminar imagen antigua
            if (req.body.img_delete === "1") {
                img_id = null;
                borrar_img_vieja = true;
            } 
        }
        // proceso para borrar de cloudinary la imagen antigua
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }
        // pasamos los nuevos campos de la novedad actualizados
        var campos = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id
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
    var novedadesEliminadas = await novedadesModel.getNovedadesDeleted(req.session.nombre);
    novedadesEliminadas = novedadesEliminadas.map( novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }

        }
    });
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
    var novedad = await novedadesModel.getNovedadByID(id);

    // comprobamos si tiene imagen y en caso afirmativo la eliminamos de cloudinary
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }
    // después eliminamos la novedad
    await novedadesModel.deletePermanentlyNovedadById(id);
    res.redirect('/admin/novedades/papelera');
});

module.exports = router;