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
  const formcontainer = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
  const button = {
    backgroundColor: "rgba(10, 192, 10, 1)",
    padding: "5px 10px",
    outline: "none",
    border: "1px solid black",
    color: "white",
    fontFamily: "monospace",
    fontWeight: "500",
    fontSize: "1rem",
    textTransform: "uppercase",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: ".5rem",
    width: "15rem",
    height: "2rem",
    letterSpacing: ".4rem",
  };
  const text = {
    width: "15rem",
    height: "2rem",
    padding: "3px 6px",
    marginTop: ".5rem",
    outline: "none",
    border: "none",
    fontSize: "1.1rem",
    borderRadius: "5px",
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          fontWeight: "bolder",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Track Your Day
      </h1>
      <hr />
      <form onSubmit={submitHandler} style={formcontainer}>
        <input
          style={text}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          value={task}
          type="text"
          placeholder="Enter task"
        />
        <br />
        <button style={button}>Create ToDo</button>
      </form>
    </>
  );
};

export default Create;
