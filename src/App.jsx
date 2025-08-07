import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task", isCompleted: false },
  ]);
  
  return (
    <>
      <div className="flex gap-0 flex-row w-screen">
      <Create tasks={tasks} setTasks={setTasks} />
      <Read tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
