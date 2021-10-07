import { Route, Switch } from "react-router";

import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div>
      <Heading />
      <Switch>
        <Route path="/" component={TaskList} exact />
        <Route path="/add" component={TaskForm} />
      </Switch>
    </div>
  );
}

export default App;
