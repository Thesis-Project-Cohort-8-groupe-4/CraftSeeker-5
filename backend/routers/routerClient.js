const express = require("express")
const conn = require("../database/index.js")
const clientRouter = express.Router()

clientRouter.post('/addclient',(req,res)=>{
    const data = req.body
    console.log(data)
    const sql = `INSERT INTO clients (clientFirstName, clientLastName, clientAdress, clientEmail, clientPhone, clientDateOfBirth) 
    VALUES (?, ?, ?, ?, ?, ?);`
    conn.query(sql,[data.clientFirstName,data.clientLastName,data.clientAdress,data.clientEmail,data.clientPhone,data.clientDateOfBirth],(err,results)=>{
        if (err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

clientRouter.get('/getall',(req,res)=>{
    const sql = `SELECT * FROM clients;`
    conn.query(sql , (err,results)=>{
       if(err){
        console.log(err)
        res.status(500).json(err)
       }
       res.status(200).json(results)
    })
})

clientRouter.get('/getone/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT *  FROM clients WHERE clientId = ?;`
    conn.query(sql,[id],(err,results)=>{
        if (err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

clientRouter.put('/updateuser/:id',(req,res)=>{
    const id = req.params.id
    const {clientAdress}= req.body
    const {clientEmail} = req.body
    const {clientPhone}=  req.body
    const sql = `UPDATE clients SET  clientAdress = ?, clientEmail = ?, clientPhone = ?
    WHERE clientId = ?;`
    conn.query (sql,[clientAdress,clientEmail,clientPhone,id],(err,results)=>{
        if (err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

clientRouter.get('/getall',(req,res)=>{
    const sql = `SELECT * FROM clients;`
    conn.query(sql , (err,results)=>{
       if(err){
        console.log(err)
        res.status(500).json(err)
       }
       res.status(200).json(results)
    })
})


clientRouter.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM clients
    WHERE clientId = ?;`
    conn.query(sql,[id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})




module.exports= clientRouter