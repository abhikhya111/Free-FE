const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    voucherId: {
        type: String
    },
    productName: {
        type: String
    },
    date: {
        type: Date
    },
    party: {
        type: String
    },
    matCentre: {
        type: String
    }
})

module.exports = mongoose.model("Purchase", purchaseSchema);
