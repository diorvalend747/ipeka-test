import { Schema, model, models } from "mongoose";

const BankSchema = new Schema({
  bankCode: {
    type: String,
    required: [true, "Bank code is required."],
  },
  bankName: {
    type: String,
    required: [true, "Bank name is required."],
  },
});

const Bank = models.Bank || model("Bank", BankSchema);

export default Bank;
