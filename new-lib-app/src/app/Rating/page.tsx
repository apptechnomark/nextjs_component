"use client";
import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Rating } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const rating: React.FC = () => {
  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Rating
      </h5>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Basic
        </h2>
        <div className="pb-4 pl-6">
          <Rating rateId="rate" editable={false} selected="1.5" />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Heart Icon
        </h2>
        <div className="pb-4 pl-6">
          <Rating rateId="rating2" icon="heart" />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Default Mark
        </h2>
        <div className="pb-4 pl-6">
          <div className="my-6" >
            <Rating rateId="rating3" selected="1.5" />
          </div>
          <div>
            <Rating rateId="rating4" icon="heart" selected="2.5" />
          </div>
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">
          Disable Rating
        </h2>
        <div className="pb-4 pl-6">
          <div className="my-6" >
            <Rating rateId="rating5" selected="0" />
          </div>
          <div>
            <Rating rateId="rating6" icon="heart" selected="0" />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default rating;
