import './App.css';
import {useState,useRef} from 'react'

function App() {

  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')


   const inputTask = useRef(null)


  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((task) =>{
      return (
        task.task !== taskToDelete
      )
    }))
  }

  const completeTask = (taskToComplete) => {
    setTodoList(todoList.map((task) => {
      return task.task == taskToComplete ? {task:taskToComplete,completed:true}:{task:task.task,completed:task.completed ? true : false}
    }))
  }

  const addTask = () => {
    setTodoList([...todoList,{task:currentTask, completed: false}])
    inputTask.current.value = ('')
    setCurrentTask=('')
  }

  return (
  
    <div className="App">
      <header>
         <h1 className='heading'>TODO LIST</h1>
      </header>
      <div className="input">
        <input ref={inputTask} type="text" placeholder='Tasks...' onKeyDown={(event) => {if (event.keyCode == 13) addTask()}} onChange={(event) => {setCurrentTask(event.target.value)}}/>
        <button onClick={addTask} className='add-task'>Add Task</button>

      </div>
      <hr/>
      <ul className='todolist'>
        {todoList.map((val,key) => {
          return(
            <div className='completed'>
          <li key={key}>{val.task}</li>
          <button onClick={()=>completeTask(val.task)}>complete</button>
      <button onClick={() => deleteTask(val.task)}>X</button>
           {val.completed ? (
        <h1>Done</h1>
      ):(
        <h1>Not Done</h1>
      )}
          </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;