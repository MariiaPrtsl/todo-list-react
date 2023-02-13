import {useState} from 'react'
import CustomForm from './components/CustomForm';

function App() {
  const [count, setCount] = useState(0)

  const AddTask =(task)=>{
    console.log(task)
  }
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
        </header>
     <CustomForm addTask={AddTask}/>
    </div>
  );
}

export default App;
