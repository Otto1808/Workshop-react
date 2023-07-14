import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ListTodos from "./components/ListTodos"
import {useState} from "react";

function App() {
  const initTodos = [
    {
      id: "1",
      name: "Apprendre React",
      done: false
    },
    {
      id: "2",
      name: "Apprendre à manger",
      done: true
    },
    {
      id: "3",
      name: "Apprendre à nager",
      done: true
    }
  ];

  const [todos, setTodos] = useState(initTodos);

  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id){
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
      <main className="container">
        {/* Titre */}
        <Header/>

        {/* Form pour ajouter un todo */}
        <AddTodo/>

        {/* Ajout de Todo */}
        <ListTodos 
        todos={todos}
        changeTodoStatus={changeTodoStatus}
        />
      </main>
  )
}

export default App
