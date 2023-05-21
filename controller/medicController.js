const pool = require('../database/index')

const medicController = {
    getAll: async (req, res) => {
        try{
            const [rows, fields] = await pool.query('select * from medico')
            // res.json({
            //     medico: rows
            // })

            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json("error")
        }
    },


    getByCI: async (req, res) => {
        try {
            const { cedMed } = req.params
            const [rows, fields] = await pool.query('select * from medico where cedMed = ?', [cedMed])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    },

    create: async (req, res) => {
        try {
            const { cedMed, nombreMedic, userMedic, especialidadMedic ,direccionMedic, telefonoMedic, emailMedic } = req.body
            data = { cedMed, nombreMedic, userMedic, especialidadMedic ,direccionMedic, telefonoMedic, emailMedic }

            if (cedMed === undefined || nombreMedic === undefined || userMedic === undefined || especialidadMedic === undefined || direccionMedic === undefined || telefonoMedic === undefined || emailMedic === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }

            //const sql = 'insert into paciente (cedulaPaciente, nombrePaciente, nacimiento, direccionPaciente, telefonoPaciente, emailPaciente) values ( ?, ?, ?, ?, ?, ? )'
            const sql = 'insert into medico set ?'
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
            const { cedMed1 } = req.params
            const { cedMed, nombreMedic, userMedic, especialidadMedic ,direccionMedic, telefonoMedic, emailMedic } = req.body
            data = { cedMed, nombreMedic, userMedic, especialidadMedic ,direccionMedic, telefonoMedic, emailMedic }
            
            if (cedMed === undefined || nombreMedic === undefined || userMedic === undefined || especialidadMedic === undefined || direccionMedic === undefined || telefonoMedic === undefined || emailMedic === undefined) {
                res.status(400).json({ message: "Bad Request" })
            }

            const sql = 'update medico set ? where cedMed = ?'
            const [rows, fields] = await pool.query(sql, [data, cedMed1])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
        }
    },

    deleteByCI: async (req, res) => {
        try {
            const { cedMed } = req.params
            const [rows, fields] = await pool.query('delete from medico where cedMed = ?', [cedMed])
            res.json(rows)

        } catch (error) {
            console.log(error)
            res.json({ state: 'error' })
            //res.status(400).send({error: 'Intente nuevamente'})
        }
    }


}

module.exports = medicController