const express       = require('express');
const router        = express.Router();
const Plan         = require('../../models/plan.model');

router.get('/', (req, res, next) => {
  Plan.find({}, (err, events) => {
    if (err) { return res.json(err).status(500); }

    return res.json(events);
  });
});

router.get('/search', (req, res, next) => {
  Plan.search(
    {query_string: {query: req.query.q}},
    {hydrate: true}
    //   query: {
    //   bool: {
    //     must: {
    //       multi_match: {
    //         query: req.query.searchTerms,
    //         analyzer: "greek",
    //         type: "best_fields",
    //         fields: ["title^2", "shortDescription", "description"],
    //         // tie_breaker: 0.3,
    //         // minimum_should_match: "50%"
    //       }
    //     // },filter: {
    //     //   geo_distance: {
    //     //     distance: req.query.distance,
    //     //     geo: req.query.geo
    //     //   }
    //    }
    //   }
    // }
  , (err, events) => {
    if (err)    { return res.json(err).status(500); }
    // if (!events) { return res.json(err).status(404); }
    return res.json(events);
    }
  );
});

router.get('/:id', (req, res, next) => {
  Plan.findById(req.params.id, (err, event) => {
    if (err)    { return res.json(err).status(500); }
    if (!event) { return res.json(err).status(404); }

    return res.json(event);
  });
});

router.post('/', (req, res, next) => {
  console.log('post')
  let newPlan = new Plan({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    price: req.body.price,
    numberOfTickets: req.body.numberOfTickets,
    startDate: req.body.startDate,
    geo: req.body.location,
    eventType: req.body.eventType,
    age: req.body.age,
    sex: req.body.sex
    // req.body.image ??
  });

  newPlan.save( (err) => {
    if (err) { return res.status(500).json(err) }
    if (newPlan.errors) { return res.status(400).json(newPlan) }
    newPlan.on('es-indexed', (err, results) => {
      if (err) res.status(500).json(err);
      console.log("document indexed in es")
    });
    return res.json(newPlan);
  });
});

module.exports = router;