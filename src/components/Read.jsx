const Read = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const deletehandler = (id) => {
    const filteredTodos = tasks.filter((ToDo) => ToDo.id != id);
    setTasks(filteredTodos);
  };
  const renderTodo = tasks.map((ToDo) => {
    return (
      <li key={ToDo.id} className="flex justify-between text-xl tracking-wide subpixel-antialiased bg-gray-700 p-2 rounded">
        {ToDo.title}  {"  "}
        <button onClick={() => deletehandler(ToDo.id)} className="bg-red-500 w-fit p-0.5 h-fit text-[.96rem] rounded font-bold flex items-center justify-center cursor-pointer mt-0.5">Delete</button>
      </li>
    );
  });

  return (
    <>
      <div className="h-screen w-3xl px-3 py-6 font-sans ">
        <div className="  bg-gray-800 h-full rounded-xl p-20 flex flex-col gap-25 ">
          <h1 className="text-5xl font-medium tracking-wide subpixel-antialiased">Pending <span className="text-emerald-500">Goals!</span></h1>
          <div className="overflow-auto max-h-100 scrollbar-none">
          <ol className="text-xl flex flex-col gap-3">{renderTodo}</ol></div>
        </div>
      </div>
    </>
  );
};

export default Read;
