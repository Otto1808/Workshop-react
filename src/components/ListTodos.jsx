// eslint-disable-next-line react/prop-types
export default function ListTodos({todos, changeTodoStatus}) {

  /* const handleClick = () => {
    const newTodos = [...todos];
    newTodos.push("this is my new todo");
    setTodos(newTodos);
  } */

  return(
      <section>
        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            // eslint-disable-next-line react/jsx-key
            <li key={index}>
              <input type="checkbox" 
                id={todo.id} 
                checked={todo.done} 
                onChange={() =>{changeTodoStatus(todo.id)}}/>
              {todo.name}
            </li>
          ))}
        </ul>
      </section>
  )
}