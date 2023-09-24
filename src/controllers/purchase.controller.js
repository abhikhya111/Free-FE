const PurchaseModel = require("../models/purchase.model");



exports.viewPurchase = async (req, res) => {
    try{
        const purchaseId = req.params.id;
        const purchase = await PurchaseModel.find({id: purchaseId})
        if(purchase.length > 0){
            res.status(201).json({ data: purchase, status: "success" });
        }
        else{
            res.json({ message: "No purchases found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.createPurchase = async (req, res) => {
    try{
        const purchaseDetails = req.body;
        const id = req.params.id;
        const purchase = await PurchaseModel.findOneAndUpdate(
            {id: id},
            { $push: { voucher: {
                voucherId: req.body.voucherId
             }}}
            );
        res.status(201).json({ data: purchase, status: "success" });
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}
