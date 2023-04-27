const express = require("express")
const cors = require ("cors")
const conn = require("./database")
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api',(req,res)=>{
    const sql = "select * from workers;"
     conn.query(sql,(err,results)=>{
        if (err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
     })
}) 



app.listen(4000,()=>console.log("connected on 4000"))
