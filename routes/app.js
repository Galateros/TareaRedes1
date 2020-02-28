// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

router.get('/product/*', PagesController.product);
router.get('/del/*',PagesController.del);

router.get('/update/*',PagesController.update);

router.get('/add', PagesController.add);
router.post('/insert', PagesController.insert);
router.post('/toUpdate', PagesController.toUpdate);


// Exporta las configuraciones
module.exports = router;