var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

// Manejador de ruta para mostrar novedades en Frontend
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

// Manejador de ruta para enviar mensaje en formulario de contacto
router.post('/contacto', async (req, res, next) => {
    const mail = {
        to: 'albertokarri@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} contactó  a través de la web y quiere más información a este correo ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su teléfono es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport( {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json( {
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;