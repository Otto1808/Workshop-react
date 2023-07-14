import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ListTodos from "./components/ListTodos"
import {useState} from "react";
import { v4 as uuidv4} from "uuid";
import { useEffect } from "react";

const LSKEY = "myTodoApp";



function App() {
  
  const [todos, setTodos] = useState([]);
  const [firstLoad, setFirstload] = useState(true);

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
      id: uuidv4(),
      name: newTodoName,
      done: false
    };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  useEffect (() => {
    const initialTodos = JSON.parse(window.localStorage.getItem(LSKEY + '.todos'))
    setTodos(initialTodos);
  }, []);

  useEffect( () => {
    if(!firstLoad){
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }else{
      setFirstload(false);
    }
  }, [todos, firstLoad]);


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
