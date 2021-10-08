import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory, useParams } from "react-router";

const TaskForm = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const history = useHistory();
  const params = useParams();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.id) {
      addTask(task);
    } else {
      updateTask(task);
    }
    history.push("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);

    console.log(taskFound);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
        <h2 className="text-3xl mb-7">{task.id ? "Edit task" : "Add task"}</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            onChange={handleOnChange}
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleOnChange}
            value={task.description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {task.id ? "Edit" : "Create"} Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
