// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('products')
    .select('*');
}

exports.get = (n) =>{
	return knex.from('products').select('*').where('id', n).first();	
}

exports.del = (n) =>{
	return knex('products').where('id',n).del();

}

exports.ins = (product) =>{
	console.log(product)
	return knex.from('products').insert({...product});
}

exports.ins = (product) =>{
	console.log(product)
	return knex.from('products').insert({...product});
}
exports.update = (product,id) =>{
	return knex('products').where('id',id).update({...product})

}