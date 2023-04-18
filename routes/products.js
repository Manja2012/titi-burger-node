import express from 'express'
let router = express.Router();
import {
  getProduct,
  getBurger,
  getAccompagnement,
  getBoisson,
  getDessert,
  getProductById
} from '../controller/productsController.js'

router
  .get('/', getProduct)
  .get('/id/:productId', getProductById)
  .get('/burger', getBurger)
  .get('/accompagnement', getAccompagnement)
  .get('/boisson', getBoisson)
  .get('/dessert', getDessert)

export default router;