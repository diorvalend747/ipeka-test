import Transaction from "@/models/transaction";
import Bank from "@/models/bank";
import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const transactions = await Transaction.find({
      creator: params.id,
    })
      .populate("creator")
      .populate("bankCode");

    return new Response(JSON.stringify(transactions), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to fetch Transactions created by user", {
      status: 500,
    });
  }
};
