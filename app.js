import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import products from './routes/products.js'
import paiement from './routes/paiement.js'
import bodyParser from 'body-parser'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mdemko2012:Masha2012@titi-burger.vvhog8a.mongodb.net/titi-burger?retryWrites=true&w=majority');
}
//const
const app = express()

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//path url
//routes
app.use('/api/products', products)
app.use('/api/paiement', paiement)

export default app;