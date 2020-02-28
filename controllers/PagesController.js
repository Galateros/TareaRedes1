// Importa el modelo de productos
let ProductModel = require('../models/Product')
// parse application/x-www-form-urlencoded
let currentid = 0;

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
      //res.redirect("/about");
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
  //router.get('/about', genre_controller.genre_create_get);
}

//DO THIS WEBPAGE
exports.product = (req,res) =>{
	//res.send('About this'+req.params[0])
	ProductModel.get(req.params[0]).then((data) =>{
		let products = data;
		res.render('pages/product',{ ...products});

	});
}
exports.del = (req,res,next) =>{
	//res.send('About this'+req.params[0])
	ProductModel.del(req.params[0]).then((data) =>{
		//let products = data;
		res.redirect('/');

	})
}

exports.add = (req,res,next) =>{
	//res.send('About this'+req.params[0])
	res.render('pages/submit')
}

exports.update = (req,res)=>{
	ProductModel.get(req.params[0]).then((data) =>{
		currentid = req.params[0];
		let products = data;
		res.render('pages/update',{ ...products});

	});
}

exports.insert = (req,res,next) =>{
	//res.send(""+req.body.desc+""+req.body.price);
	//let toInsert = ProductModel.factory(req.body.name,req.body.desc,req.body.price);

	//console.log (toInsert);
	ProductModel.ins(req.body).then((data)=>{
		res.redirect('/');
	});
		
}
exports.toUpdate = (req,res)=>{
	ProductModel.update(req.body,currentid).then((data)=>{
		res.redirect('/');
	});
}