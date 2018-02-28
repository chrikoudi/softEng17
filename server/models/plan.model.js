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
    // image: [ ImageSchema ],
    title:          { type: String, required: [true, "Title is required"], es_indexed: true, es_type: "text", es_boost: 2.0 },
    shortDescription: {type: String, required: [true, "Short description is required"], es_indexed:true, es_type: "text"},
    description:    { type: String, required: [true, "Description is required"], es_indexed:true, es_type: "text"},
    price:          { type: Number, required: [true, "Price is required"]},
    numberOfTickets: {type: Number, required: [true, "Number of tickers is required"]},
    startDate:      { type: Date, required: [true, "Date is required"] },
    geo: {
            es_indexed: true,
            type: String,
            es_type: "geo_point"
        },
    eventType:      { type: [String],  required: [true, "Event type is required"]},
    age:         { type: String, required: [true, "Min Age is required"] },
    sex:            { type: String, required: [true, "Event is required"] },
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
            "filter": {
              "greek_stop": {
                "type":       "standard",
                "stopwords":  stopwords
              },
              "greek_lowercase": {
                "type":       "lowercase",
                "language":   "greek"
              },
              "greek_stemmer": {
                "type":       "stemmer",
                "language":   "greek"
              }
            },
            "analyzer": {
              "custom_greek": {
                "tokenizer":  "standard",
                "filter": [
                  "greek_lowercase",
                  "greek_stop",
                  "greek_stemmer"
                ]
              }
            }
          }
        },"mappings": {
            "blog": {
                "_all": {
                    "analyzer": "custom_greek",
                    "search_analyzer": "custom_greek"
                 }
            }
        }
    }, (err, mapping) => {
      if(err){
        console.log('error creating mapping (you can safely ignore this)');
        console.log(err);
      }else {
        console.log('mapping created!');
        console.log(mapping);
      }
});



module.exports = Plan;