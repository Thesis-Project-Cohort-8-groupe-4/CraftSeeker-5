const express = require("express")
const conn = require("../database/index.js")
const workerRouter = express.Router()


workerRouter.post('/addworker',(req,res)=>{
    const{workerFirstName}= req.body
    const{workerLastName}= req.body
    const{workerAdress}= req.body
    const{workerEmail}= req.body
    const{workerCategory}= req.body
    const{workerDateOfBirth}= req.body
    const{workerPhoneNumber}= req.body
    const{workerJob}= req.body
    const{workerPassword}= req.body
    const sql = `INSERT INTO workers (workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob,workerPassword ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
    conn.query(sql ,[workerFirstName, workerLastName, workerAdress, workerEmail, workerCategory, workerDateOfBirth, workerPhoneNumber, workerJob,workerPassword],(err,results)=>{
          if (err){
            console.log(err)
            res.status(500).json(err)
          }
          res.status(200).json(results)
    })
})

workerRouter.put('/completeAprofile/:id', (req, res) => {
    const id = req.params.id;
    const { workerProfessionalSummary, workerYearsOfExperience } = req.body;
    const sql = `UPDATE workers
                 SET workerProfessionalSummary = ?, workerYearsOfExperience = ?
                 WHERE workersId = ?`;
    conn.query(sql, [workerProfessionalSummary, workerYearsOfExperience, id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});

workerRouter.delete('/deleteWorker/:id', (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM workers WHERE workersId = ?`;
    conn.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        }
        res.status(200).json(results);
    });
});


workerRouter.get('/getworkers',(req,res)=>{
     const sql = `SELECT * FROM workers;` 
     conn.query(sql,(err,results)=>{
         if(err){
            console.log(err)
            res.status(500).json(err)
         }
         res.status(200).json(results)
     })
})

workerRouter.get('/getWorker/:id',(req,res)=>{
    const id = req.params.id
    const sql = `SELECT * FROM workers WHERE workersId = ?;`
    conn.query(sql ,[id], (err,results)=>{
          if(err){
            console.log(err)
            res.status(500).json(err)
          }
          res.status(200).json(results)
    }) 
})

workerRouter.put('/editprofile/:id',(req,res)=>{
    const id = req.params.id
    const{workerPhoneNumber,workerAdress,workerEmail,workerJob,workerCategory} = req.body
    const sql= `UPDATE workers
    SET workerPhoneNumber = ?, workerAdress = ?, workerEmail = ?, workerJob = ?, workerCategory = ? WHERE workersId = ?`;
    conn.query(sql ,[workerPhoneNumber,workerAdress,workerEmail,workerJob,workerCategory,id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})

workerRouter.put('/editWorkInfo/:id',(req,res)=>{
    const id = req.params.id
    const{workerYearsOfExperience,workerProfessionalSummary} = req.body
    const sql= `UPDATE workers
    SET workerYearsOfExperience = ?, workerProfessionalSummary = ? WHERE workersId = ?;`
    conn.query(sql ,[workerYearsOfExperience,workerProfessionalSummary,id],(err,results)=>{
        if(err){
            console.log(err)
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
})




module.exports = workerRouter