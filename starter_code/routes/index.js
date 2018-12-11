const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET /movies list */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then (movies =>{
    res.render('movies', {movies}); //en vert par rapport a la page entre {} par rapport a la BDD
  })
  .catch (error=>{
    next (error)
  })
});



/* GET /movies/:id */
router.get('/movie/:id',(req,res,next) =>{
  Movie.findOne({_id:req.params.id})
  .then (movie => {
    res.render('movie',{movie});
  })
  .catch (error=> {
    next (error);
  })
});


module.exports = router;
