import React from "react";
import Task from "./Task";

const Group = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <Task/>
          </div>

          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-absolute p-3 rounded-lg border-2 border-green-300 flex flex-col relative title-font overflow-hidden bg-green-500 bg-opacity-5">
              <span className="bg-green-500 bg-opacity-5 tracking-widest absolute rounded-lg border-2 text-green-300 border-green-300 px-3 py-1 text-sm left-3 top-0 mt-3">
                Group Task 2
              </span>
              <h2 className="text-sm tracking-widest title-font font-medium left-3 mt-10">
                April - June
              </h2>
              <div className="border-2 border-gray-200 px-2 py-4 mt-4 rounded-lg bg-gray-100">
                <h2 className="text-gray-400 font-medium">No Task</h2>
              </div>
              New Task
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Group;
