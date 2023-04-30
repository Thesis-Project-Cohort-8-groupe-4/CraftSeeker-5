const express = require("express")
const taskRouter = express.Router()
const conn = require ("../database/index.js")

taskRouter.post('/addatask',(req,res)=>{
    const {clients_clientId,workers_workersId,taskTitle,taskText} = req.body
    const taskDate = new Date().toISOString().slice(0,19).replace('T',' ')
    const sql = `INSERT INTO tasks (clients_clientId, workers_workersId, taskTitle, taskText, taskDate)
    VALUES (?,?, ?,?, ?);`
    conn.query(sql ,[clients_clientId, workers_workersId, taskTitle, taskText, taskDate],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

taskRouter.get('/alltasks',(req,res)=>{
    const sql = `SELECT * FROM tasks;`
    conn.query(sql ,(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})


taskRouter.put('/updateatask/:id',(req,res)=>{
    const id = req.params.id
    const {taskTitle,taskText} = req.body
    const taskDate = new Date().toISOString().slice(0,19).replace('T',' ')
    const sql =`UPDATE tasks SET taskTitle = ?, taskText = ?, taskDate = ? WHERE taskId = ?;`
    conn.query(sql ,[taskTitle, taskText, taskDate,id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})


taskRouter.get('/getonetask/:id',(req,res)=>{
    const id = req.params.id
    const sql =`SELECT * FROM tasks where taskId = ?;`
    conn.query(sql,[id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

taskRouter.delete('/deletetask/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM tasks WHERE taskId = ?;`
    conn.query(sql ,[id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

module.exports = taskRouter