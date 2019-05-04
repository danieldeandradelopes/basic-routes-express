// importando o express
// importing the express
const express = require('express')

//criando uma const para receber o express
//creating a const for received the express
const app = express()

//criando uma nova rota
//creating a new route
app.get('/', (req, res)=>{
  return res.send('Home')
})

app.get('/login', (req,res)=>{
  return res.send('Login')
})

//nessa rota passamos um parametro e exibimos uma mensagem de bem vindo
//in this route we pass a parameter and showing a message of welcome
app.get('/returnName/:name', (req,res)=>{
  return res.send(`Welcome, ${req.params.name}!`)
})

//nessa rota conseguimos usar o parametro da url e retornar uma mensagem de bem vindo
//in this route we can use the parameter of url and return a message of welcome
app.get('/queryParams', (req,res)=>{
  return res.send(`My Name is ${req.query.name} and I Have a ${req.query.years} years`)
})


//aqui criamos uma rota com retorno de uma mensagem no formato de json
//here we created a route with return of a message in json format
app.get('/jsonReturn/:name', (req, res)=>{
  return res.json({
    message: `Welcome, ${req.params.name}`
  });
})

//aqui criamos uma rota com parametros mistos (query e params)
//here we created a route with mixed parameters (query and params)
app.get('/mixed/:name', (req, res)=>{
  return res.send(`Name: ${req.params.name} and Age: ${req.query.age}`)
})

//definindo uma nova porta para o localhost
//defining a new port for localhost
app.listen(3000)

