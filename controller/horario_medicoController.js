const pool = require('../database/index')

const horario_medicoController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query('select * from horario_medico')
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json("error")
        }
    },

    getByCI: async (req, res) => {
        try {
            const { cedula_medico } = req.params
            const [rows, fields] = await pool.query('select * from horario_medico where cedula_medico = ?', [cedula_medico])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    },

    create: async (req, res) => {

        try {

            const { cedula_medico, dia, empiezaHorario, terminaHorario } = req.body
            data = { cedula_medico, dia, empiezaHorario, terminaHorario }

            if (cedula_medico === undefined || dia === undefined || empiezaHorario === undefined || terminaHorario === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }
            const sql = 'insert into horario_medico set ?'
            const [rows, fields] = await pool.query(sql, [data])
            res.json(rows)


        } catch (error) {

            if (error.code == 'ER_DUP_ENTRY') {
                res.json({ state: 'Horario de medico ya se encuentra registrado' })
            }
            else {
                console.log({ state: 'error' })
                res.status(400).json({ message: "Bad Request" })
            }

        }
    },

    update: async (req, res) => {
        try {

            const { cedula_medico1 } = req.params
            const { cedula_medico, dia, empiezaHorario, terminaHorario } = req.body
            data = { cedula_medico, dia, empiezaHorario, terminaHorario }

            if (cedula_medico === undefined || dia === undefined || empiezaHorario === undefined || terminaHorario === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }

            const sql = 'update horario_medico set ? where cedula_medico = ?'
            const [rows, fields] = await pool.query(sql, [data, cedula_medico1])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
        }
    },

    deleteByCI: async (req, res) => {
        try {
            const { cedula_medico } = req.params
            const [rows, fields] = await pool.query('delete from horario_medico where cedula_medico = ?', [cedula_medico])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    }


}

module.exports = horario_medicoController