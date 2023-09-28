"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Text, Email } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const textfield = () => {


  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Text Field
      </h5>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Basic
        </h2>

        <div className="pt-3 pl-7 mb-5 gap-8">
          <Text label="text" id="text" name="text"
            getValue={() => { }}
            getError={() => { }}></Text>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Required
        </h2>
        <div className="pt-3 pl-7 mb-5 gap-8">
          <Text label="text" validate id="text" name="text"
            getValue={() => { }} getError={() => { }} ></Text>
        </div>
      </div>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Text Field with Email Validation
        </h2>

        <div className="pt-3 pl-7 mb-5 gap-8">
          <Email
            label="Email"
            id="email"
            name="email"
            type="email"
            validate
            getValue={() => { }} getError={() => { }}          ></Email>
        </div>
      </div>
    </BaseLayout>
  );
};

export default textfield;
