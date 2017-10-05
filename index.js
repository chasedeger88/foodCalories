require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./models');
var bcrypt = require('bcrypt');
var session = require('express-session');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var app = express();

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use(flash());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

var passport = require('./config/ppConfig');
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + '/public/'));
///creating custom middleware
// app.use(function(req,res,next){
// 	req.getParamNames = function(){
// 		return Object.keys(req.params);
// 	}
// 	next();
// });

////Routes for Home
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/profile', isLoggedIn, function(req, res) {
	////import data from database, store that data as object
	db.user.find({
	where: {id: req.user.id}
	})
	.then(function(user){
		db.recipe.find({
			where: {usersRecipes: req.user.id}
		})
		.then(function(recipes){
			res.render('recipes/show', {recipe: recipes});
		});
	});
});


app.use('/auth', require('./controllers/auth'));
app.use('/recipes', require('./controllers/recipes'));


var server = app.listen(process.env.PORT || 3000);

module.exports = server;