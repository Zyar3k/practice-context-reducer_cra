import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, deleteTask } = useContext(GlobalContext);
  console.log(tasks);
  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
          >
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
              >
                EDIT
              </Link>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
