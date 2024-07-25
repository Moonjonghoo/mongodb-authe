import React from "react";

export const dynamic = "force-dynamic";

export default async function GetTodosUI() {
  const data = await (
    await fetch(`${process.env.DEPOLY_URL}/api/todo`, {
      cache: "no-store",
    })
  ).json();
  if (data === null) {
    return;
  }

  return (
    <div>
      {data.map((todo: any) => (
        <div key={todo._id}>
          <h3>{todo.todo as string}</h3>
          <p>{todo.todoDeadline as number}</p>
        </div>
      ))}
    </div>
  );
}
