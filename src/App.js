import logo from "./images/boca.png";
import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
const App = () => {
  return (
    <div className="tailwind">
      <Header />
      <div className="TaskList">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
