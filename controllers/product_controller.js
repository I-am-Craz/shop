const goodRepository = require("../repository/good_repository")

exports.singleProduct = async (req, resp) => {
    let productId = req.params.id;
    let product =  await goodRepository.getGoodById(productId)

    resp.render("product.pug", { product });
};
