var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res) {
res.render('index', {title: "Express"});
}); 

router.get('/users/:id', function(req, res) {
	console.log(req.params);
	res.send(req.params.id, 200);
});

*/
router.get('/', function(req, res) {
	res.render('index', {
		title: 'My App!',
		age: 25,
		skill: 'node.js'
	});
});




module.exports = router;
