import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import ListTodos from "./components/ListTodos"

function App() {


  return (
      <main className="container">
        {/* Titre */}
        <Header/>

        {/* Form pour ajouter un todo */}
        <AddTodo/>

        {/* Ajout de Todo */}
        <ListTodos/>
      </main>
  )
}

export default App
