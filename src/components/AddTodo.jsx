import{ useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function AddTodo({addNewTodo}) {

    const inputRef = useRef()

    const handleSubmit = (e) => {
      e.preventDefault();
      addNewTodo(inputRef.current.value);
      inputRef.current.value = '';
    }

    return(
        /* Form pour ajouter un todo */
        <form action="#" method="post" onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" name="newTodo" placeholder="Add a new todo" />
          <button type="submit">ADD</button>
        </form>
    );
}