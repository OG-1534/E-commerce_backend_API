const express = required('express');
const { verifyToken } = require('../helper/verifyToken');

module.exports = async function (params, context) {
        const tokenUser = await verifyToken(context);
        console.log(tokenUser);
        if(tokenUser != null && tokenUser.isAdmin) {

		const {_id, title, description, inStock, category, price, color, size} = params;
                const productTable = express.db.table('product');

                const product = await productTable
                .where({_id})
                .findOne();

                user.name - name;
                try {
			const result = await productTable.save(params);
                        context.status(200);
                        return {
                                ...result
                        }
                } catch(err) {
                        context.status(500);
                        return {
                                'message' err.message
                        }
                }
        } else {
                context.status(401);
                return {
                        'message' : 'Token is invalid or unauthorized user'
                }
        }
};
