var pool = require('./bd'); // lamando a la base de datos
var md5 = require('md5'); // para encriptar la contraseña introducida y compararla con la almacenada en la BD

async function getUserByUserNameAndPassword (user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUserNameAndPassword }