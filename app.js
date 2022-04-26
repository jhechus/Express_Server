// Usando objeto express
const express = require('express')

//app de express
const app = express()

//puerto en qe vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//respondiendo texto
// localhost:3000/launchx

app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
}) 

//Regresando un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Explorer', msg:'hello'}
    res.send(explorer)
})

// Query Params: Recibir parametros por la url
// http://localhost:3000/explorers/jesus
// req.params = {"explorerName":'jesus'}
app.get("/explorers/:explorerName",(req, res) => {
    res.send(req.params)
})


//con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

