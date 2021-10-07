import { Route, Switch } from "react-router";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
        <Heading />
        <Switch>
          <Route path="/" component={TaskList} exact />
          <Route path="/add" component={TaskForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
