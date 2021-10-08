import React from "react";

const TaskForm = () => {
  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10">
        <h2 className="text-3xl mb-7">A task</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="write a description"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
