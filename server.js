const express=require('express')
var app=express()
port=Math.round(Math.random()*9000)

app.get('/', (req, res) => {
    res.sendFile(Game.js)
})