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