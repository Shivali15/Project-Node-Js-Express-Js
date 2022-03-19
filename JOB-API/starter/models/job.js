const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    //passing objects // 1st property company
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    //2nd property position
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    // its is pending or waiting to response whether we have interview or it was declined this by status
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  // when we updated or create that time automatically created by timestamps in mongoose
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
