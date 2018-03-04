'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const bcrypt   = require('bcrypt');
const mongoosastic = require('mongoosastic');
const stopwords = require('stopwords-el');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'elastic'
});

const PlanSchema = new Schema({
    // _creator: [ ProviderSchema ],
    image:          { type: String },
    title:          { type: String, required: [true, "Title is required"], es_indexed: true, es_type: "text", es_boost: 2.0},
    shortDescription: {type: String, required: [true, "Short description is required"], es_indexed:true, es_type: "text"},
    description:    { type: String, required: [true, "Description is required"], es_indexed:true, es_type: "text"},
    price:          { type: Number, required: [true, "Price is required"]},
    numberOfTickets: {type: Number, required: [true, "Number of tickers is required"]},
    startDate:      { type: Date, required: [true, "Date is required"] },
    geo: {
      geo_point: {
          es_indexed: true,
          type: String,
          es_type: 'geo_point',
      },
      lat: {type: Number},
      lon: {type: Number}
    },
    eventType:      { type: [String],  required: [true, "Event type is required"]},
    age:         { type: [String], required: [true, "Min Age is required"] },
    sex:            { type: [String], required: [true, "Event is required"] },
    // tickets: [ticketsSchema]
},{
    timestamps      : { createdAt: "created_at", updatedAt: "updated_at" },
});

PlanSchema.plugin(mongoosastic,  {
    esClient: client,
    hydrate:true,
    // hydrateOptions: {lean: true},
    bulk: {}
})

const Plan = mongoose.model('Plan', PlanSchema);

Plan.createMapping(
    {
      "settings": {
        "analysis": {
          "analyzer": {
            "c_greek": {
              "tokenizer":  "standard",
              "filter": [
                "greek_lowercase",
                "c_greek_stop",
                "greek_keywords",
                "greek_stemmer"
              ]
            }
          },"filter": {
            "c_greek_stop": {
              "type":       "standard",
              "stopwords":  stopwords
            },
            "greek_lowercase": {
              "type":       "lowercase",
              "language":   "greek"
            },
            "greek_keywords": {
              "type":       "keyword_marker",
              "keywords":   ["παιδί", "παιδιά", "παιδιών", "γονείς", "ζωγραφική",
                             "διασκέδαση", "μουσική", "αθλητισμός", "θέατρο",
                             "κινηματογράφος", "παιδότοπος", "παιδότοποι"]
            },
            "greek_stemmer": {
              "type":       "stemmer",
              "language":   "greek"
            }
          },
        }
      }, "mappings": {
          "plan": {
              "_all": {
                  "analyzer": "c_greek",
                  "search_analyzer": "c_greek"
                }
          }
      }
    },
    (err, mapping) => {
      if(err){
        console.log('error creating mapping (you can safely ignore this)');
        console.log(err);
      }else {
        console.log('mapping created!');
        console.log(mapping);
      }
});



module.exports = Plan;