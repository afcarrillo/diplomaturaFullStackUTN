var pool = require('./bd'); // lamando a la base de datos

async function getNovedades () {
    try {
        var query = 'select * from novedades order by id desc';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function insertNovedad (novedad) {
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [novedad]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function modifyNovedad () {

}

async function deleteNovedadById () {

}

module.exports = { getNovedades, insertNovedad, modifyNovedad, deleteNovedadById }