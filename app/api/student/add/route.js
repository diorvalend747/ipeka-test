import Student from "@/models/student";
import { connectToDB } from "@/utils/database";

export const POST = async (req) => {
  const { studentName, studentClass, location } = await req.json();
  try {
    await connectToDB();

    const newStudent = new Student({
      studentName,
      studentClass,
      location,
    });

    await newStudent.save();

    return new Response(JSON.stringify(newStudent), { status: 200 });
  } catch (error) {
    console.log(error.message);
    return new Response("Failed to add student", { status: 500 });
  }
};
