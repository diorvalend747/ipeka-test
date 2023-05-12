import Bank from "@/models/bank";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { bankCode, bankName } = await req.json();
  try {
    await connectToDB();

    const newBank = new Bank({
      bankCode,
      bankName,
    });

    await newBank.save();

    return new Response(JSON.stringify(newBank), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to add bank info", { status: 500 });
  }
};
