const express = require("express")
const cors = require ("cors")
const conn = require("./database")
const app = express()
app.use(express.json())
app.use(cors())
const workerRouter = require ('./routers/routerWorker.js')
const clientRouter= require('./routers/routerClient.js')
const reviewRouter = require("./routers/routerReviews")
const taskRouter = require("./routers/routerTasks")
const reportsOftheClientRouter = require("./routers/routerReportsOfTheClients")
const reportsOftheWorkerRouter = require("./routers/routerReportsOfTheWorkers")


app.use('/api/clients',clientRouter)
app.use('/api/workers',workerRouter)
app.use('/api/reviews',reviewRouter)
app.use('/api/tasks',taskRouter)
app.use('/api/reportsofclients',reportsOftheClientRouter)
app.use('/api/reportsofworkers',reportsOftheWorkerRouter)



app.listen(4000,()=>console.log("connected on 4000"))
