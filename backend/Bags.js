const mongoose = require('mongoose');

const BagsSchema = new mongoose.Schema({
    bagName: String,
    price: String,
    wishList: Boolean,
    img: String
})


// Creating model objects
const Bags = mongoose.model('bags', BagsSchema);
    
// Exporting our model objects
module.exports = {
    Bags
}
