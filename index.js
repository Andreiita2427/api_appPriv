const express = require('express')
const bodyParser = require('body-parser');
const app = express()

require('dotenv').config()

//Routes
const medicRouter = require('./routes/medic')
const pacienteRouter = require('./routes/paciente')
const horario_medico= require('./routes/horario_medico')

//pp.use(express.urlencoded({extended:false}))

//app.use(express.json())

app.use(bodyParser.json());

//Middleware
app.use('/api/v1/medic', medicRouter)
app.use('/api/v1/paciente', pacienteRouter)
app.use('/api/v1/horario_medico', horario_medico)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Servidor Activo.....")
})