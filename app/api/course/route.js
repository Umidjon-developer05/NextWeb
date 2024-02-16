import connectMongoDB from "../../../lib/mongodb";
import Topic from "../../../models/course";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {id, courseInfo ,name1,data ,slug,title,image} = await request.json();
    await connectMongoDB();
    await Topic.create({id, courseInfo,name1 ,data ,slug,title,image });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
