import Transaction from "@/models/transaction";
import Bank from "@/models/bank";
import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const transaction = await Transaction.find({})
      .populate("creator")
      .populate("bankCode");

    return new Response(JSON.stringify(transaction), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to fetch all transaction", { status: 500 });
  }
};
