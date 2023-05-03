const mysql = require("mysql2")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "lybov123",
    database: "carftseeker"
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("connected to carftseeker")
})

module.exports=conn