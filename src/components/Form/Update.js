import React from "react";

const Update = () => {
  return (
    <div>
      <div className="bg-white rounded-lg flex flex-col w-full mt-10 md:mt-0 relative z-10">
        <h2 className="text-gray-900 text-lg mb-8 font-bold title-font">
          Edit Task
        </h2>

        <form>
          <div className="relative mb-4">
            <label for="task" className="leading-7 text-sm text-gray-600">
              Task Name
            </label>
            <input
              type="text"
              name="task"
              placeholder="Type your Task"
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 w-1/3">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Progress
            </label>
            <input
              type="text"
              name="progress"
              placeholder="70%"
              className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex">
          <button className="flex ml-auto text-black bg-white border-0 py-2 px-6 focus:outline-none shadow-lg shadow-inner rounded">Cancel</button>
          <button className="inline-flex text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded-lg text-sm cursor-pointer">Save Task</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
