const express = required('express');
const bcrypt = require('bcrypt');

module.exports = async function (params, context) {
	console.log('Received params': params);
	console.log('Received context': context);

	const {name, email, password} = params;
	if(!name || !email || !password) {
		context.status(400);
		return {
			"message": "All fields aremandatory"
		}
	}

	const userTable = express.db.table('user');

	const userExist = await userTable
	.where({email})
	.findOne()

	if (userExist){
		context.status(400);
		return {"message": "User already exists"}
	}
	try {
		const count = await userTable
		.where()
		.count()

		console.log("The user count is: ", count);
		// Hashing password


		const newUser = {name, email, "password": hashedPassword, "isAdmin": false};

	} catch(err) {
		context.status(500);
		return {"message": err.message};
	}
