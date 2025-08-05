const Read = (props) => {
  const tasks = props.tasks;
    const setTasks = props.setTasks;
  const deletehandler = (id) => {
    const filteredTodos = tasks.filter((ToDo)=> ToDo.id != id)
    setTasks(filteredTodos)
  };
  const button = {
    color:"white",
    fontFamily:"monospace",
    padding:"5px 10x",
    background:"rgba(236, 25, 25, 1)",
    outline:"none",
    width:"4rem",
    border:"1px solid black",
    borderRadius:"5px",
    cursor:"pointer",
    fontSize:"1rem"
  }
  const liststyle = {
    padding:".3rem",
    fontSize:"1rem",
    fontFamily:"cursive",
    color:"black",
  }
  const ordercontainerstyle = {
    display:"flex", 
    justifyContent:"flex-start",
    alignItems:"flex-start",
    flexDirection:"column",
    backgroundColor:"salmon",
    borderRadius:"6px",
  }
  const renderTodo = tasks.map((ToDo) => {
    return (
      <li key={ToDo.id} style={liststyle}>
        {ToDo.title} | {"  "}
        <button onClick={() => deletehandler(ToDo.id)} style={button}>Delete</button>
      </li>
    );
  });

  return (
    <>
      <h1 style={{textAlign:"center", fontFamily:"cursive",fontWeight:"bolder",textTransform:"uppercase", color:"white"}}>Pending ToDO's</h1>
      <hr />
      <ol style={ordercontainerstyle}>{renderTodo}</ol>
    </>
  );
};

export default Read;
