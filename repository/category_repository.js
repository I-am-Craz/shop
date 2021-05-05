const database = require('../database')
const Category = require("../models/Category");

const categoriesTableName = 'categories'

module.exports.getCategoryById = async (categoryId) => {
    try {
        const connection = database.getConnection()
        let categories = await connection.query(`SELECT * FROM ${categoriesTableName} where id = ? `,
            [categoryId]);

        return (categories && categories.length > 0) ? new Category(categories[0])
            : null

    } catch (e) {
        console.log(`Unable to fetch category ID=${categoryId} from database: ${e}`)
        throw new Error('Unable to fetch category')
    }
}