import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";
import Courseoffer from "../../../models/courseoffer";

export async function POST(request) {
  try {
    const {username,Offer} = await request.json();
    await connectMongoDB();
    await Courseoffer.create({username,Offer});
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const CourserOffer = await Courseoffer.find();
    return NextResponse.json({ CourserOffer });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
