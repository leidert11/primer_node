// const exprees = require('express')
import exprees from 'express'
import employesRoutes from "./routes/employes.routes.js";
import  indexRoutes  from "./routes/index.routes.js";
//en estos casos es obligatorio poer el ".js"


const app = exprees()

app.use(exprees.json())

app.use(indexRoutes)
app.use('/api',employesRoutes)

app.use((req,res, next)=>{
    res.status(404).json({
        message: 'Not Found'
    })
})

export default app;