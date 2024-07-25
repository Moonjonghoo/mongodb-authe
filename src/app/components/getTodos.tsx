// import { deleteTodo } from "@/lib/actions";
import Todo from "@/lib/Model";
import React from "react";

export default async function GetTodosUI() {
  const data = await (
    await fetch(`api/todo`, {
      cache: "no-store",
    })
  ).json();
  if (data === null) {
    return
  }
 
      return (
        <div>
          {data.map((todo: any) => (
            <div key={todo._id}>
              <h3>{todo.todo as string}</h3>
              <p>{todo.todoDeadline as number}</p>

              {/* <form action={deleteTodo}>
                <input hidden type="text" name="id" defaultValue={todo._id.toString()} />
                <button className="border rounded p-2 bg-red-400">delete</button>
              </form> */}
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
