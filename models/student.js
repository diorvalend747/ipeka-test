import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  studentName: {
    type: String,
    required: [true, "Name is required!"],
  },
  studentClass: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
  },
});

const Student = models.Student || model("Student", StudentSchema);

export default Student;
