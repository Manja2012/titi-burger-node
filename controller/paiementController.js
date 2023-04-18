import Paiement from "../model/paiementModel.js"

const postPaiement = ((req, res, next) => {
        let paiement = new Paiement();
        console.log(req.body)
        paiement.firstName = req.body.payer.name.given_name
        paiement.lastName = req.body.payer.name.surname
        paiement.email = req.body.payer.email_address
        paiement.payedAmount = req.body.purchase_units[0].amount.value
        paiement.save()
        res.json(true)
})
  

export {
    postPaiement
}