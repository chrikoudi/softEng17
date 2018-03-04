const express       = require('express');
const router        = express.Router();
const Plan         = require('../../models/plan.model');

// find and sort 10 events - order -> created descending
router.get('/', (req, res, next) => {
  Plan.find({}).sort({'created_at': -1}).limit(10).exec( (err, events) => {
    if (err) { return res.json(err).status(500); }
    if (!events) { return res.json([]).status(200); }
    return res.json(events);
  });
});

// elastic search multi-match full text search + geo_distance query
router.get('/search', (req, res, next) => {
  Plan.search(
    // {query_string: {"title": req.query.q}
    {
      "bool": {
        "must": {
          "multi_match": {
            "query": req.query.searchTerms,
            "analyzer": "greek",
            "type": "best_fields",
            "fields": ["title", "shortDescription", "description"],
            "fuzziness": "AUTO",
            //"tie_breaker": 0.3,
            "minimum_should_match": "50%"
            }
        },
        "filter" : {
          "geo_distance" : {
              "distance" : req.query.distance + "km",
              "geo" : {
                  "lat" : req.query.lat,
                  "lon" : req.query.lon
              }
          }
        }
      }
    },(err, results) => {
      if (err) {
        console.error(err);
        return res.json(err).status(500);
      }
     let totalItems = results.hits.total;
     if (totalItems === 0) { return res.json([]).status(200); }
     // if search results > 0 then return array of objects
     let events = [];
    results.hits.hits.forEach(function(element) {
      events.push(element);
    });
     return res.json(events);
    }
  );
});

// get event by id
router.get('/:id', (req, res, next) => {
  Plan.findById(req.params.id, (err, event) => {
    if (err)    { return res.json(err).status(500); }
    if (!event) { return res.json(err).status(404); }

    return res.json(event);
  });
});

// create new event - provider
router.post('/', (req, res, next) => {
  console.log('post')
  let newPlan = new Plan({
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    description: req.body.description,
    price: req.body.price,
    numberOfTickets: req.body.numberOfTickets,
    startDate: req.body.startDate,
    geo: {
      lat: req.body.geo.lat,
      lon: req.body.geo.lon
    },
    eventType: req.body.eventType,
    age: req.body.age,
    sex: req.body.sex
    // req.body.image ??
  });

  newPlan.save( (err) => {
    if (err) { return res.status(500).json(err) }
    if (newPlan.errors) { return res.status(400).json(newPlan) }
    // index new document in elasticsearch
    newPlan.on('es-indexed', (err, results) => {
      if (err) res.status(500).json(err);
      console.log("document indexed in es")
    });
    return res.json(newPlan);
  });
});

module.exports = router;