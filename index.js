import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import products from './routes/products.js'
import paiement from './routes/paiement.js'
import bodyParser from 'body-parser'
import {ENV} from './config/env.js'

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


//port
const PORT = ENV.PORT || 8080;

main()
  .then(() => {
    //listen
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    })
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  });

export default app;
