const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');


const PlanSchema = new Schema({
    // _creator: [ ProviderSchema ],
    // image: [ ImageSchema ],
    title:          { type: String, required: [true, "Title is required"] },
    description:    { type: String, required: [true, "Description is required"] },
    price:          { type: Number, required: [true, "Price is required"]},
    startDate:      { type: Date },
    endDate:        { type: Date },
    location:       { type: String },
    type:           { type: String },
    minAge:         { type: Number },
    maxAge:         { type: Number },
    sex:            { type: String }
},{
    timestamps      : { createdAt: "created_at", updatedAt: "updated_at" },
});

const Plan = mongoose.model('Plan', PlanSchema);
module.exports = Plan;