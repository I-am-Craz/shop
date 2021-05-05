const categoryRepository = require("../repository/category_repository")
const goodRepository = require("../repository/good_repository")

exports.singleCategory = async (req, resp) => {
    let categoryId = req.params.id;

    // по идее здесь сначала надо проверить, что категория существует. Если ее нет, то показать ошибку
    let category = await categoryRepository.getCategoryById(categoryId)
    category.goods = await goodRepository.getGoodsByCategory(categoryId)

    resp.render("category.pug", { category });

};
