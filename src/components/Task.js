import React from "react";

const Task = () => {
  return (
    <div>
      <div className="h-absolute p-3 rounded-lg border-2 border-green-300 flex flex-col relative title-font overflow-hidden bg-green-500 bg-opacity-5">
        <span className="bg-green-500 bg-opacity-5 tracking-widest absolute rounded-lg border-2 text-green-300 border-green-300 px-3 py-1 text-sm left-3 top-0 mt-3">
          Group Task 1
        </span>
        <h2 className="text-sm tracking-widest title-font font-medium left-3 mt-10">
          January - March
        </h2>
        <div className="border-2 border-gray-200 px-2 py-4 mt-4  rounded-lg bg-gray-100">
          <h2 className="text-gray-900 title-font font-medium">
            Re-designed the zero-g doggie bags. No more spills!
          </h2>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div class="flex ">
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-4 rounded-full"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
              <svg
                fill="none"
                stroke="currentColor"
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeLidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="border-2 border-gray-200 px-2 py-4 mt-4 rounded-lg bg-gray-100">
          <h2 className="text-gray-900 title-font font-medium">
            Re-designed the zero-g doggie bags. No more spills!
          </h2>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <div class="flex w-full md:justify-start justify-center items-end">
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-250">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>

            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeLidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        button tambah
      </div>
    </div>
  );
};

export default Task;
