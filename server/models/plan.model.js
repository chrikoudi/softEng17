const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const bcrypt   = require('bcrypt');


const PlanSchema = new Schema({
    // _creator: [ ProviderSchema ],
    // image: [ ImageSchema ],
    title:          { type: String, required: [true, "Title is required"] },
    shortDescription: {type: String, required: [true, "Short description is required"]},
    description:    { type: String, required: [true, "Description is required"] },
    price:          { type: Number, required: [true, "Price is required"]},
    startDate:      { type: Date, required: [true, "Date is required"] },
    // endDate:        { type: Date },
    location:       { type: String, required: [true, "Location is required"] },
    eventType:      { type: [String],  required: [true, "Event type is required"]},
    minAge:         { type: Number, required: [true, "Min Age is required"] },
    maxAge:         { type: Number, required: [true, "Max Age is required"] },
    sex:            { type: String, required: [true, "Event is required"] }
},{
    timestamps      : { createdAt: "created_at", updatedAt: "updated_at" },
});

const Plan = mongoose.model('Plan', PlanSchema);
module.exports = Plan;