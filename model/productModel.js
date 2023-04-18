import mongoose from 'mongoose'
const { Schema } = mongoose;

const ProductsSchema = new Schema({
	name: String,
	description: String,
	price: mongoose.Decimal128,
	type: {
		type: String,
		enum: ['burger', 'boisson', 'dessert', 'accompagnement']
	},
	image: String
	
});

const Products = mongoose.model('Products', ProductsSchema, 'products');

export default Products