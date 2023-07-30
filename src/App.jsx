import Header from "./componentes/Header"
import TaskList from "./componentes/TaskList"
import Task from "./componentes/Task"


function App() {
  return (
    <div>

   <Header/>

   <h5>"Total Tareas: 6"</h5>

   <TaskList/>
   <Task></Task>
   <footer>Tienes tareas pendientes</footer>
   </div>
  )
}

export default App
