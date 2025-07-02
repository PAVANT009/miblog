"use server";
import clientPromise from "@/lib/mongodb"

export async function GET() {
  const client = await clientPromise;
  const db = client.db("mIBlog");
  const notes = await db.collection("notes").find({}).toArray();

  return Response.json(notes);
}
  

export async function POST(request) {
  const { paragraph, from , to } = await request.json();

  if (!paragraph || paragraph.length < 5) {
    return new Response(JSON.stringify({ message: "Invalid note" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("mIBlog");

  const result = await db.collection("notes").insertOne({
    paragraph,
    from,
    to,
    createdAt: new Date(),
  });

  return Response.json({ insertedId: result.insertedId });
}
