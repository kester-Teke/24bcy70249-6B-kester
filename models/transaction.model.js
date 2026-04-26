import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
{
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true
  },

  type: {
    type: String,
    enum: ["deposit", "withdraw", "transfer"],
    required: true
  },

  amount: {
    type: Number,
    required: true
  }

},
{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;