import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const student = await Student.find();

    return new Response(JSON.stringify(student), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all student", { status: 500 });
  }
};
