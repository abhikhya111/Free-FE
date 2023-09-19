const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    
    id: {
        type: String,
        required: true
    },
    date: {
       type: Date, 
    },
    productName: {
        type: String, 
        required: true
    },
    rate: {
        type: String, 
    },
    bardanas: {
        type: String, 
    },
    brokerage: {
        type: String, 
    },
    deliveryTime: {
        type: String
    },
    firmName:{
        type: String
    },
    orderType:{
        type: String
    },
    approvalStatus: {
        type: Boolean
    }
})

module.exports = mongoose.model("Order", orderSchema);
