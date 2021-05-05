/**
 * Это у нас общий файл, который хранит список всех адресов, которые есть в приложении
 */

const express = require('express')
const router = express.Router()

const HomeController = require('./controllers/home_controller')
const ProductController = require('./controllers/product_controller')
const CategoryController = require('./controllers/category_controller')
const CartController = require('./controllers/cart_controller')

/** Main routes */
router.get('/', HomeController.homePage);

/** Product routes */
router.get('/product/:id', ProductController.singleProduct);

/** Category routes */
router.get('/category/:id', CategoryController.singleCategory);

/** Cart routes */
router.get('/cartCheckout', CartController.checkout);


module.exports = router
