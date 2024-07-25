import connectDB from "@/lib/db";
import Todo from "@/lib/Model";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  connectDB();
  const todos = await Todo.find();
  return Response.json(todos);
}
