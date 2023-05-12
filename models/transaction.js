import { Schema, model, models } from "mongoose";

const TransactionSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  paymentAmount: {
    type: Number,
    required: [true, "Payment amount is required."],
  },
  paymentDate: {
    type: Date,
    require: [true, "Payment date is required"],
  },
  period: {
    type: Date,
    required: [true, "Period is required."],
  },
  bankCode: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
  },
});

const Transaction =
  models.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
