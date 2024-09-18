const express = required('express');

module.exports = async function (params, context) {
	const productTable = mongoose.db.table('product');

	const products = await productTable
	.where()
	.find();

	const count = await productTable
	.where()
	.count();

	return {
		count,
		products
	}
};
