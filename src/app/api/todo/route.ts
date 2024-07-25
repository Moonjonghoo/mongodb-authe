import connectDB from "@/lib/db";
import Todo from "@/lib/Model";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  connectDB();
  const todos = await Todo.find();
  if (todos.length === 0) {
    return null;
  }
  return Response.json(todos);
}
