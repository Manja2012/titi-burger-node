import Products from "../model/productModel.js";

const getProduct = (async(req, res, next) => {
  const products = await Products.find();
  res.json(products);
})

const getBurger = (async (req, res, next) => {
    const products = await Products.find({type: 'burger'});
    res.json(products)
})

const getAccompagnement = (async (req, res, next) => {
  const products = await Products.find({type: 'accompagnement'});
  res.json(products)
})

const getBoisson = (async (req, res, next) => {
  const products = await Products.find({type: 'boisson'});
  res.json(products)
})

const getDessert = (async (req, res, next) => {
  const products = await Products.find({type: 'dessert'});
  res.json(products)
})

const getProductById = (async (req, res, next) => {
    const productId = req.params.productId
    const product = await Products.findById(productId);
    res.json(product)
});

export {
    getProduct,
    getBurger,
    getAccompagnement,
    getBoisson,
    getDessert,
    getProductById
}