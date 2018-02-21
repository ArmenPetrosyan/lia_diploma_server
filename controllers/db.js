import mongoose from 'mongoose';
import User from '../models/User';
import config from '../config.json';


const dbc = config.db;

export function dbConnect(){
	mongoose.connect(`mongodb://${dbc.host}:${dbc.port}/${dbc.name}`, { useMongoClient: true });
}

// Lia's diploma
export function createUser({login, password}) {
	const user = new User({
		login,
		password
	});

	console.log(user);

	return user.save();
}

export function getUser(login) {
	return User.find({
		'login': login
	});
}