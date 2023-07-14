import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ListTodos from "./components/ListTodos"
import {useState} from "react";

function App() {
  const initTodos = [
    {
      id: "0",
      name: "Apprendre React",
      done: false
    },
    {
      id: "1",
      name: "Apprendre à manger",
      done: true
    },
    {
      id: "2",
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

  const addNewTodo = (newTodoName) => {
    const newTodo = {
      id: todos.length.toString(),
      name: newTodoName,
      done: false
    };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  return (
      <main className="container">
        {/* Titre */}
        <Header/>

        {/* Form pour ajouter un todo */}
        <AddTodo addNewTodo={addNewTodo}/>

        {/* Ajout de Todo */}
        <ListTodos 
        todos={todos}
        changeTodoStatus={changeTodoStatus}
        />
      </main>
  )
}

export default App
