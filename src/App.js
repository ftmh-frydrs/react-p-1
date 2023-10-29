import "./App.css";
import TaskOne from "./components/TaskOne";
import TaskTwo from "./components/TaskTwo";
import TaskThree from "./components/TaskThree";
import TaskFour from "./components/TaskFour";
import TaskFive from "./components/TaskFive";
import TaskSix from "./components/TaskSix";
import TaskSeven from "./components/TaskSeven";
import TaskEight from "./components/TaskEight";
import TaskNine from "./components/TaskNine";
import TaskTen from "./components/TaskTen";

function App() {
  return (
    <div className="grid sm:grid-cols-3 gap-2 grid-cols-1">
      <TaskOne />
      <TaskTwo />
      <TaskFour />
      <TaskFive />
      <TaskSix />
      <TaskSeven />
      <TaskEight />
      <TaskNine />
      <TaskTen />
      <TaskThree />
    </div>
  );
}

export default App;
