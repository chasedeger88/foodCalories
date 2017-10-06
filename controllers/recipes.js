var express = require('express');
var db = require('./../models');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

// router.get('/', function(req, res) {
//   console.log('This is from sessions: ', req.session.lastPage);
//   db.recipe.findAll().then(function(recipes) {
//     res.render('recipes/index', {recipes: recipes});
//   }).catch(function(err) {
//     res.status(500).render('error');
//   });
// });

// GET for /recipes (gets all recipes in collection)
router.get('/', function(req, res) {
  res.render('/new');
});

router.get('/:id/edit', function(req, res) {
  db.recipe.findById(req.params.id).then(function(recipe) {
    if (recipe) {
      res.render('recipes/edit', {recipe: recipe});
    } else {
      res.status(404).render('error');
    }
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

router.get('/:id', function(req, res) {
  db.recipe.findById(req.params.id).then(function(recipe) {
    if (recipe) {
      res.render('/profile', {recipe: recipe});
    } else {
      res.status(404).render('error');
    }
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

router.post('/recipes', function(req, res) {
  db.recipe.create(req.body).then(function(recipe) {
    res.redirect('/recipes');
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

router.post('/recipes/index', isLoggedIn, function(req,res){
  
});

router.put('/:id', function(req, res) {
  db.recipe.findById(req.params.id).then(function(recipe) {
    if (recipe) {
      recipe.updateAttributes(req.body).then(function() {
        res.status(200).send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

router.delete('/:id', function(req, res) {
  db.recipe.findById(req.params.id).then(function(recipe) {
    if (recipe) {
      recipe.destroy().then(function() {
        res.send({msg: 'success'});
      });
    } else {
      res.status(404).send({msg: 'error'});
    }
  }).catch(function(err) {
    res.status(500).send({msg: 'error'});
  });
});

module.exports = router;