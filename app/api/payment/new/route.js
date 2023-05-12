import Transaction from "@/models/transaction";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { creator, paymentAmount, paymentDate, period, bankCode } =
    await req.json();
  try {
    await connectToDB();

    const newTransaction = new Transaction({
      creator,
      paymentAmount,
      paymentDate,
      period,
      bankCode,
    });

    await newTransaction.save();

    return new Response(JSON.stringify(newTransaction), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to create new transactions", { status: 500 });
  }
};
