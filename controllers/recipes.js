var express = require('express');
var db = require('./../models');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('This is from sessions: ', req.session.lastPage);
  db.recipes.findAll().then(function(recipes) {
    res.render('recipes/index', {recipes: recipes});
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

router.get('/new', function(req, res) {
  res.render('recipes/new');
});

router.get('/:id/edit', function(req, res) {
  db.recipes.findById(req.params.id).then(function(recipe) {
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
  db.recipes.findById(req.params.id).then(function(recipe) {
    if (recipe) {
      res.render('/profile', {recipe: recipe});
    } else {
      res.status(404).render('error');
    }
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

router.put('/:id', function(req, res) {
  db.recipes.findById(req.params.id).then(function(recipe) {
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
  db.recipes.findById(req.params.id).then(function(recipe) {
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

router.post('/', function(req, res) {
  db.recipes.create(req.body).then(function(recipe) {
    res.redirect('/recipes');
  }).catch(function(err) {
    res.status(500).render('error');
  });
});

module.exports = router;