const express = require('express')
const app = express()
const axios = require('axios').default
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

app.listen(3001)
app.use(bodyParser())
app.use(cors())

app.post('/api', (req, res) => {
    axios.get(`https://store.omelete.com.br/autocomplete/${req.body.params}`)
        .then(result => res.send(result.data))
        .catch(err => res.status(500).send(err))
})

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})