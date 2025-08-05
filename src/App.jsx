import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", isCompleted: false },
  ]);
  
  return (
    <>
      <Create tasks={tasks} setTasks={setTasks} />
      <Read tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
