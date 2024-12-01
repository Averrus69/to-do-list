"use client";
import { useState } from "react";

export default function Home() {
  const [toDoList, setTodoList] = useState([
    {
      isDone: false,
      description: "Create Guest Experience mobile check-in",
    },
    {
      isDone: true,
      description: "Document current CI/CD process",
    },
    {
      isDone: false,
      description: "Perform code review for final Pillow-Talk release",
    },
    {
      isDone: false,
      description: "Implement new Color Palette from Design Team",
    },
    {
      isDone: false,
      description: "Fix image uploading process for guest check-in",
    },
    {
      isDone: false,
      description: "Provide on-boarding documentation",
    },
  ]);

  const [listName, setListName] = useState("");

  const addList = () => {
    const newList = {
      isDone: false,
      description: listName,
    };

    setTodoList([...toDoList, newList]);
    setListName("");
  };

  const listCheckHandler = (index: number) => {
    const newTodoList = [...toDoList];
    newTodoList[index].isDone = !newTodoList[index].isDone;
    setTodoList(newTodoList);
  };

  const countDoneList = () => {
    return toDoList.filter((list) => list.isDone === true).length;
  };

  return (
    <div
      id="list"
      className="flex flex-col items-center gap-4 p-4 text-center text-white bg-black"
    >
      <div>Chores ToDo list</div>
      {toDoList.map((list, index) => (
        <div key={index} className="flex justify-center gap-5">
          <input
            type="checkbox"
            checked={list.isDone}
            onChange={() => listCheckHandler(index)}
          />
          <p className="text-start w-96">{list.description}</p>
          <button className="p-1 border-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                fill="red"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
      <p>Done: {countDoneList()}</p>
      <div className="flex gap-2 w-96">
        <input
          className="text-black"
          type="text"
          value={listName}
          onChange={(event) => {
            setListName(event.target.value);
          }}
        />

        <button
          className="bg-white text-black px-2 py-1 rounded-md"
          onClick={() => addList()}
        >
          Add task
        </button>
      </div>
    </div>
  );
}
