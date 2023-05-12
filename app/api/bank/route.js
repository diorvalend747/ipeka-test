import Bank from "@/models/bank";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const bank = await Bank.find({}).populate("bankCode");

    return new Response(JSON.stringify(bank), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to fetch all bank", { status: 500 });
  }
};
