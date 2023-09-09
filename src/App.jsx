import "./App.css";
import TaskList from "./Components/TaskList";
import Header from "./Components/Header";




function App() {
 
  return (
    <div>
      <Header />
      <TaskList />
      <div>
      <h2>You have 2 pending tasks</h2>
      <button>Clear All</button>
      </div>
    </div>
  );
}
export default App;
