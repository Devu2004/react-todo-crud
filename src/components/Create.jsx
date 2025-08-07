import { nanoid } from "nanoid";
import { useState } from "react";
const Create = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const [task, setTask] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title: task,
      isCompleted: false,
    };
    let copytodo = [...tasks];
    copytodo.push(newTodo);
    setTasks(copytodo);

    setTask("");
  };
  return (
    <>
    <div className="h-screen w-4xl px-3 py-6 font-sans">
    <div className=" bg-gray-800 h-full rounded-xl p-20 flex flex-col gap-25 ">
      <h1 className="text-5xl font-bold tracking-tight subpixel-antialiased">Track Your  <span className="text-teal-500">Daily Goals.</span></h1>
      <form onSubmit={submitHandler} className="flex flex-col h-screen items-start gap-3">
        <input 
        className="bg-gray-700 w-full h-10 p-3 rounded text-xl outline-hidden"
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          type="text"
          placeholder="Enter task"
        />
        <br />
        <button className="	bg-emerald-500 w-full h-11 text-white rounded text-[1.5rem] tracking-widest subpixel-antialiased font-semibold ">Create ToDo</button>
      </form>
      </div>
      </div>
    </>
  );
};

export default Create;
