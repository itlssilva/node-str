'use-strict';
const moongose = require('mongoose');
const Order = moongose.model('Order');

exports.get = async () => {
    const res = await Order
    .find({}, 'number status customer items')
    .populate('customer', 'name')
    .populate('items.product', 'title');
    return res;
}

exports.create = async (data) => {
    const order = new Order(data);
    await order.save();
}
