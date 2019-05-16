var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
// 商品模型
var Schema = new mongoose.Schema({
    goods_name: String,
    price: Number,
    count: Number
})
var Goods = mongoose.model('goods', Schema)
// 获取列表
router.get('/list', (req, res) => {  
    Goods.find({}, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send({  
                code:200,
                data: data
            })
        }
    }).sort({
        _id: -1
    })
})
// 新增商品
router.post('/add', (req, res) => {
    Goods.create({
        goods_name: req.body.goods_name,
        price: req.body.price,
        count: req.body.count
    }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send({
                code:200,
                msg: '新增成功'
            })
        }
    })
})
// 编辑
router.put('/edit/:id', (req, res) => {
    Goods.find({
        _id: req.params.id
    }).updateOne({
        goods_name: req.body.goods_name,
        price: req.body.price,
        count: req.body.count
    }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send({
                code:200,
                msg: '编辑成功'
            })
        }
    })
});
// 删除
router.delete('/del/:id', (req, res) => {
    Goods.find({
        _id: req.params.id
    }).remove((err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send({ 
                code:200,
                msg: '删除成功'
            })
        }
    })
})
// 详情
router.get('/info/:id', (req, res) => {
    Goods.find({
        _id: req.params.id
    }, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send({
                data: data
            })
        }
    })
})
module.exports = router