const mongoose = require("mongoose");

const internshipApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  university: { type: String, required: true },
  degreeProgram: { type: String, required: true },
  yearOfStudy: { type: String, required: true },
  gpa: { type: String },
  desiredRole: { type: String, required: true },
  internshipDuration: { type: Number, required: true },
  skills: { type: String, required: true },
  motivation: { type: String, required: true },
  terms: { type: Boolean, required: true },
});

const InternshipApplication = mongoose.model(
  "InternshipApplication",
  internshipApplicationSchema
);

module.exports = { InternshipApplication };
