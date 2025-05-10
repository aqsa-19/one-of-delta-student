const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number, // Ensure `rating` has `type: Number`
        min: 1,
        max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Remove parentheses
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;