import { useEffect, useState } from "react";
import BackgroundImg from "./components/Layout/mobile/BackgroundImg";
import Header from "./components/Layout/mobile/Header";
import TitleHeader from "./components/Layout/mobile/TitleHeader";
import FormHeader from "./components/Layout/mobile/FormHeader";
import Main from "./components/Layout/mobile/Main";
import Article from "./components/Layout/mobile/Article";
import SectionMain from "./components/Layout/mobile/SectionMain";
import SectionItems from "./components/Layout/mobile/SectionItems";


const initialStateTodos = JSON.parse( localStorage.getItem('todos')) || [];

function App() {
  // Seteo inicial de localStorage
  // Si el estado afectara a todos los componentes, se debe dejar el estado en el componente principal, o en el que el estado afectara a todos los otros componentes.
  // Por eso se recomienda que los estados, sean en el componente principal, para que este derive a los componentes hijos, afectando a todo el nodo inferior. 
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))    
  },[todos])

  // Create Todo
  const todoCreate = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  // Update Todo
  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  // Delete Todos
  const removeTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);

    setTodos(newArray)
  }

  // TODOS Incompletos
  const uncompletedTodos = todos.filter(todo => todo.completed === false).length;
  
  // TODOS Clear Completed
  const clearTodos = () => {
    const newArray = todos.filter((todo) => !todo.completed);
    
    setTodos(newArray)
  }
  
  // Crea un estado para filtrar los todos
  const [filterTodos, setFilterTodos] = useState([]);
  
  // TODOS All / Active / Completed
  const handleFilter = (filter) => {
    if(filter === 'all') {
      setFilterTodos(todos)
    }else if(filter === 'active'){ 
      setFilterTodos(todos.filter((todo) => !todo.completed))
    }else if(filter === 'completed') {
      setFilterTodos(todos.filter((todo) => todo.completed))
    }
  }
  
  return (
    <>
      <BackgroundImg>
        <Header>
          <TitleHeader />
        </Header>
        <Main>
          {/* TODO Create */}
          <FormHeader todoCreate={todoCreate}/>
          {/* TODO List (TODO Item) TODO Update & TODO Delete */}
          {/* GET para listar los items */}
          <div className="bg-white dark:bg-gray-800 rounded-md">
            {
              todos.map((todo) => (
                <Article updateTodo={updateTodo} removeTodo={removeTodo} key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
              ))
            }
          </div>
          {/* TODO Computed Sections */}
          <SectionMain todos={todos} uncompletedTodos={uncompletedTodos} clearTodos={clearTodos}/>
        </Main>
        {/* TODO Filter */}
        <SectionItems handleFilter={handleFilter}/>
        {/* Pendiente Seccion DRAG AND DROP */}
        <footer className="text-center dark:text-gray-400">Drag and DROP to reorder LIST</footer>
       
      </BackgroundImg>
    </>
  )
}

export default App