"use client"

import React from "react";
import { Toast } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

import BaseLayout from "../../components/BaseLayout"


const toast = () => {
  const successToast = () => {
    Toast.success("Success message!", "This is success message");
  };

  const errorToast = () => {
    Toast.error("Error message!", "This is error message");
  };

  const warningToast = () => {
    Toast.warning("Warning message!", "This is warning message");
  };

  const infoToast = () => {
    Toast.info("Info message!", "This is info message");
  };
  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Toast</h5>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>

        <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Toast position="top_right" />
          <button
            className="py-2 px-4 bg-teal-500 text-white mx-3 rounded-md"
            onClick={successToast}
          >
            Success
          </button>
          <button
            className="py-2 px-4 bg-rose-200 text-red-500 mx-3 rounded-md"
            onClick={errorToast}
          >
            Error
          </button>
          <button
            className="py-2 px-4 bg-amber-100 text-yellow-900 mx-3 rounded-md"
            onClick={warningToast}
          >
            Warning
          </button>
          <button
            className="py-2 px-4 bg-indigo-50 text-blue-700 mx-3 rounded-md"
            onClick={infoToast}
          >
            Info
          </button>
        </div>
      </div>
    </BaseLayout>
  )
}

export default toast