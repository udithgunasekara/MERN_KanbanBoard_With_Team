import React from "react";

export default function TaskCard() {
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden sm:max-w-sm mb-3">
      <div className="p-1 px-4">
        <div className="pt-3">
          <span className="px-2 py-1 text-xs font-semibold text-white bg-red-500 rounded-full">
            {/* TODO adding priority */}
            High
          </span>
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Finish the farm website design
          </h3>
          <p className="mt-2 text-gray-600">
            This is a description of the task that gives more details about what
            needs to be done.
          </p>
          <span className="grid grid-cols-10">
            <div className="col-span-3">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
              </div>
            </div>

            <div className="text-sm text-gray-500 col-start-4 col-span-3">
              8 comments
            </div>

            <div className="col-end-11 col-span-1">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
              </div>
            </div>
          </span>

          <p className="mt-2 text-sm text-gray-500">9th June, 2022</p>
        </div>
      </div>
    </div>
  );
}
