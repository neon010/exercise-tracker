const router = require('express').Router();
const Exercise = require("../models/exercise");

router.route('/').get((req, res) => {
    Exercise.find()
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
  
    const newExercise = new Exercise(req.body);
  
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
  
