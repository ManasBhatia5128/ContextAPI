import { useEffect, useState } from "react";
import "./contexts/index"

function App() {

  const [todos, setTodos] = useState([]); // first curly brace for jsx format, second for destructuring, can also do obj
  // then access as obj.todos etc

  const addToDo = (todo) => {
    // setTodos(todo); // All old values will delete and only one new val will be there
    // setTodos((prevArray) => [todo, ...prevArray]); // but a todo has id and values both
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]); // toto is object of a string and boolean completed
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo))); // this prev is the prev state ie we do [todos, setTodos], we get prev todos
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)) // based on this condition, we filter the todos
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)) // func on each element, spread the object and override the completed proprty as its inverse
  }


  // useEffect hook: works when page is reloaded
  useEffect(() => {
    // localStorage.getItem("abc"); // will output in string, we have to convert it in JSON
    const todos = JSON.parse("todos");// json can be array too
    if(todos && todos.length > 0){// todos when not their is equal to null/undefined so are treated as falsy values
      setTodos(todos); 
    }
  }, []); //  Unless there is no server side rendering (use of backend), we can directly access local storage

  // When the user adds a todo, you might think to add todo (useState wala) in the dependency array of the first useEffect, however it is not the most optimised approach since the whole code will run again

  // So we will create another useEffect

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // key must be taken as "todos" only since we used it in prev hook too, you shouldn't add to a different key
  }, [todos]);

  return (
    <ToDoProvider value={{todos, setTodos, addT}}> 
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
