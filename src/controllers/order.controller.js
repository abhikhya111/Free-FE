const OrderModel = require("../models/order.model");
const PurchaseModel = require("../models/purchase.model");

exports.placeOrder = async (req, res, next) => {
    const { id, productName, rate, bardanas, brokerage, deliveryTime, firmName, orderType, quantity
    } = req.body;
    const myId = Math.floor(Math.random() * 100)
    try {
        const order = await OrderModel.create({
            id: myId,
            date: Date.now(),
            productName,
            rate,
            bardanas,
            brokerage,
            deliveryTime,
            firmName,
            orderType,
            quantity,
            approvalStatus: false
        });
        const purchase = await PurchaseModel.create({
            id: myId,
            voucherId: Math.floor(Math.random() * 100),
            productName: productName,
            date: Date.now(),
            party: "Party",
            metCenter: "Center"
        });
        res.status(201).json({ data: order, purchase, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listOrders = async (req, res, next) => {
    
    try{
        const orders = await OrderModel.find()
        if(orders.length > 0){
            res.status(201).json({ data: orders, status: "success" });
        }
        else{
            res.json({ message: "No orders found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.viewOrder = async (req, res, next) => {
    
    try{
        const orderId = req.params.id;
        const orders = await OrderModel.find({id: orderId})
        if(orders.length > 0){
            res.status(201).json({ data: orders, status: "success" });
        }
        else{
            res.json({ message: "No orders found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.editOrder = async (req, res, next) => {
    const { id, productName, rate, bardanas, brokerage, deliveryTime, firmName, orderType
    } = req.body;
    try{

    const orderId = req.params.orderId;
    const orders = await OrderModel.find({id: orderId });
    // console.log(orders);

    if(orders.length > 0){
        // const order = await OrderModel.updateMany(
        //     { id: req.params.id },
        //     { $set: { approvalStatus: true } }
        //  );
        const order = await OrderModel.findOneAndUpdate({id:req.params.orderId}, 
            req.body
        );
        console.log("Order", order);
        res.status(201).json({ data: order, status: "Order updated" });
    }
    else{
        res.json({ message: "No orders found" });
    }
    }
    catch(error){
        res.status(500).json({ error: error.message }); 
    }
}

exports.approveOrder = async (req, res, next) => {
    try{
        const id = req.params.id;
        const orders = await OrderModel.find({id: id})
        if(orders.length > 0){
            const order = await OrderModel.updateMany(
                { id: req.params.id },
                { $set: { approvalStatus: true } }
             );
            res.status(201).json({ data: order, status: "Order Approved" });
        }
        else{
            res.json({ message: "No orders found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
    
}

exports.disapproveOrder = async (req, res, next) => {
    try{
        const id = req.params.id;
        const orders = await OrderModel.find({id: id})
        if(orders.length > 0){
            const order = await OrderModel.updateMany(
                { id: req.params.id },
                { $set: { approvalStatus: false } }
             );
            res.status(201).json({ data: order, status: "Order Approved" });
        }
        else{
            res.json({ message: "No orders found" });
        }
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
    
}