import { NextResponse } from "next/server";
import { ContactInfo } from "@/types/contact";
import { connectToDB } from "@/lib/DbConnect";
import { ContactModel } from "@/lib/models/contact.model";

export const POST = async (req: Request) => {
  try {
    // getting the details
    const { name, phoneNumber, email, query } =
      (await req.json()) as ContactInfo;

    // verifying the details
    if (!name || !phoneNumber || !email || !query)
      throw new Error(`All fields are required`);

    // connecting to the database
    await connectToDB();

    // save to the database
    const newContactQuery = new ContactModel({
      name,
      email,
      phoneNumber,
      query,
    });
    await newContactQuery.save();

    return NextResponse.json({
      success: true,
      message: "Query saved successfully",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: "Internal Server error",
    });
  }
};
