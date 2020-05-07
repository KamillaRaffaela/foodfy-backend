const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const receitas = require("./data.js")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server, 
    autoescape: false,
    noCache: true
} )

server.get("/index",  function (req,res){
    return res.render("index", { receitas })
})

server.get("/receita",  function (req,res){
    return res.render("receita", {receitas})
})


server.get("/sobre",  function (req,res){
    return res.render("sobre", {})
})


server.listen(5000,function(){
    console.log("server is runing")
})
