const express       = require('express');
const router        = express.Router();
const Plan         = require('../../models/plan.model');

router.get('/events', (req, res, next) => {
  Plan.find({}, (err, events) => {
    if (err) { return res.json(err).status(500); }

    return res.json(events);
  });
});

router.get('/events/:id', (req, res, next) => {
  Plan.findById(req.params.id, (err, event) => {
    if (err)    { return res.json(err).status(500); }
    if (!event) { return res.json(err).status(404); }

    return res.json(event);
  });
});

router.post('/events', (req, res, next) => {
  console.log('post')
  const newPlan = new Plan({
    title: req.body.title,
    description: req.body.description, 
    price: req.body.price, 
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: req.body.location,
    minAge: req.body.minAge,
    maxAge: req.body.maxAge,
    sex: req.body.sex,
  });

  newPlan.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newPlan.errors) { return res.status(400).json(newPlan) }
                           return res.json(newPlan);
  });
});

module.exports = router;