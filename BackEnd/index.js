import express from 'express'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './Db/connection.js';
const PORT = process.env.PORT
import InvoiceRoutes from './Routes/InvoiceRoutes.js'
import cors from 'cors'

const app = express();

// middleware

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

dotenv.config({
    path : './env'
})

// routes middleware
app.use('/api/invoices',InvoiceRoutes)

connectDB()

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})