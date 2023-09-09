import "./App.css";
import TaskList from "./Components/TaskList";
import Header from "./Components/Header";




function App() {
 
  return (
    <div>
      <Header />
      <TaskList />
      <div>
      <h2>You have 0 pending tasks</h2>
      </div>
    </div>
  );
}
export default App;
