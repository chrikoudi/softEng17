const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const ProviderSchema = new Schema({
  companyName: { type: String },
  password: { type: String },
  AFM: { type: String }, 
  firstName: { type: String }, 
  lastName: { type: String }, 
  email: { type: String }, 
  phoneNumber: { type: String }, 
  // eventsCreated: [ PlanSchema ],
  bonusPoints: { type: Number }, 
  locked: { type: Boolean }, 
  confirmed: { type: Boolean }
});

const Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;

