import { SquarePen, Trash } from "lucide-react";
import React, { useState } from "react";

const TodoCards = ({todo,handleDeleteTodo,handleTodostatus}) => {
  const [isCompleted, setIsCompleted] = useState(todo?.coompleted||false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="w-full border rounded-md p-4 bg-stone-900 flex items-center justify-between">
      <div
        onClick={() => setIsCompleted((prev) => !prev)}
        className={` size-8 cursor-pointer rounded-full ${
          isCompleted ? "bg-green-400" : " border-2 border-orange"
        } ${isEditing ? "hidden" : "block"}`}
      ></div>
      <input
        type="text"
        defaultValue={todo?.title||"Loading title......"}
        disabled={!isEditing}
        className={` p-1 outline-none font-bold ${
          isEditing ? "w-10/12" : "w-9/12"
        } ${isCompleted && "line-through"}`}
      />
      <div
        className={`${
          isEditing ? "hidden" : "flex items-center justify-center gap-5"
        } *:cursor-pointer`}
      >
        <SquarePen
          className={`${isCompleted && "hidden"}`}
          onClick={() => setIsEditing((p) => !p)}
        />
        <Trash onClick={()=>handleDeleteTodo(todo._id)} />
      </div>
      <div
        onClick={() => setIsEditing((p) => !p)}
        className={`bg-orange p-1 cursor-pointer px-2 rounded-lg text-black font-semibold ${
          isEditing ? "block" : "hidden"
        }`}
      >
        Save
      </div>
    </div>
  );
};

export default TodoCards;
