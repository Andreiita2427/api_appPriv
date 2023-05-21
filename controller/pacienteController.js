const pool = require('../database/index')

const pacienteController = {
    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query('select * from paciente')
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
        }
    },

    getByCI: async (req, res) => {
        try {
            const { cedulaPaciente } = req.params
            const [rows, fields] = await pool.query('select * from paciente where cedulaPaciente = ?', [cedulaPaciente])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    },

    create: async (req, res) => {
        try {
            const { cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente } = req.body
            data = { cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente }

            if (cedulaPaciente === undefined || nombrePaciente === undefined || nacimiento === undefined || direccionPaciente === undefined || telefonoPaciente === undefined || emailPaciente === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }

            //const sql = 'insert into paciente (cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente) values ( ?, ?, ?, ?, ?, ? )'
            const sql = 'insert into paciente set ?'
            const [rows, fields] = await pool.query(sql, [data])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).json({message:"Bad Request"})
        }
    },

    update: async (req, res) => {
        try {
            const { cedulaPaciente1 } = req.params
            const { cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente } = req.body
            data = { cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente }
            
            if (cedulaPaciente === undefined || nombrePaciente === undefined || nacimiento === undefined || direccionPaciente === undefined || telefonoPaciente === undefined || emailPaciente === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }

            const sql = 'update paciente set ? where cedulaPaciente = ?'
            const [rows, fields] = await pool.query(sql, [data, cedulaPaciente1])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
        }
    },

    deleteByCI: async (req, res) => {
        try {
            const { cedulaPaciente } = req.params
            const [rows, fields] = await pool.query('delete from paciente where cedulaPaciente = ?', [cedulaPaciente])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    }


}

module.exports = pacienteController