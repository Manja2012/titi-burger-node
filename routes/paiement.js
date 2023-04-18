import express from 'express'
let router = express.Router();

import {
  postPaiement,
} from '../controller/paiementController.js'

router
  .post('/', postPaiement)

export default router;