var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

router.get('/novedades', async (req, res, next) => {
    var novedades = await novedadesModel.getNovedadesFrontEnd();
    novedades = novedades.map( novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
                crop: 'pad'
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

    res.json(novedades);
});

module.exports = router;