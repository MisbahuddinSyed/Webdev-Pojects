import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState("")
  const [todolist, setTodolist] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [showFinished, setShowFinished] = useState(false)

  useEffect(() => {
    let todoString = localStorage.getItem("todolist")
    if(todoString){
      let todolist = JSON.parse(todoString)
      setTodolist(todolist)
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if(loaded){
      localStorage.setItem("todolist", JSON.stringify(todolist))
    }
  }, [todolist, loaded])
  

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSave = () => {
    setTodolist([...todolist, { id: uuidv4(), todo, isComplete: false }])
    setTodo("")
  }

  const handleCheckbox = (e) => {
    let id = e.target.name

    let index = todolist.findIndex(item => {
      return item.id === id
    })

    let newTodolist = [...todolist]
    newTodolist[index].isComplete = !newTodolist[index].isComplete
    setTodolist(newTodolist)
  }

  const handleEdit = (id) => {
    let t = todolist.filter(item=>item.id == id)
    setTodo(t[0].todo)

    let newTodolist = todolist.filter(item=>{
      return item.id != id
    })
    setTodolist(newTodolist)
  }

  const handleDelete = (id) => {
   let newTodolist = todolist.filter(item=>{
      return item.id != id
    })
    setTodolist(newTodolist)
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  return (<div className="flex flex-col gap-5 h-screen bg-yellow-200  items-center">
    <Navbar />

    <div className='flex flex-col gap-5 p-4 md:w-2/5 h-4/5 bg-yellow-100 rounded'>
      <div className="title flex justify-center"><h1><b>iTask - Manage Your Task at One Place</b></h1></div>

      <div className="add w-full">
        <b className='text-sm'>Add a Todo</b>
        <div className="w-full flex flex-row gap-4">
          <input type="text" onChange={handleChange} value={todo} />
          <button onClick={handleSave} disabled={todo.length <= 3} className="save flex items-center text-white bg-yellow-600 rounded-lg pr-2 pl-2"><b className="text-xs">Save</b></button>
        </div>
      </div>
      <div><input onChange={toggleFinished} type="checkbox" checked={showFinished} />Show Finished</div>
      <div className="todos flex flex-col gap-3">
        <b className='text-sm'>Your Todos</b>
        
        {todolist.length === 0 && <div>No todos to display</div>}
        {todolist.map(item => {
          return ((showFinished || !item.isComplete) &&  <div key={item.id} className="todo-list flex flex-row">
            <div className='flex flex-row gap-2 items-center w-2/3'>
              <input type="checkbox" onChange={handleCheckbox} name={item.id} checked={item.isComplete} />
              <div className={item.isComplete ? "line-through" : ""} >{item.todo}</div>
            </div>
            <div className="buttons flex flex-row items-center gap-1">
              <button onClick={()=>handleEdit(item.id)} className="h-5 px-4 text-xs  text-white bg-yellow-600  rounded-lg">Edit</button>
              <button onClick={()=>handleDelete(item.id)} className="h-5 px-4 text-xs  text-white bg-yellow-600  rounded-lg">Delete</button>
            </div>
          </div>
          
          )

        }
        )
        }

      </div>
    </div>
  </div>

  )

}

export default App
