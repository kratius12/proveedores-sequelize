import express from 'express';
import cors from 'cors'
import routerProv from './routes/proveedorRoutes.js'
const app = express();

var corOptions = {
    origin: 'http://localhost:8080'
}

//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(routerProv)

app.use('/api/proveedores',routerProv)



const PORT = process.env.PORT || 8080


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
