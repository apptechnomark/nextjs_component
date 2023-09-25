"use client";

import React from "react";
import { Badge } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import BaseLayout from "../../components/BaseLayout";

const badge = () => {
  return (
    <BaseLayout>
      <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Badge
      </h5>
      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Basic(Dot Badge)
        </h2>
        <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Badge variant="dot" badgetype="dark" text="1" />
          <Badge variant="dot" badgetype="secondary" text="2" />
          <Badge variant="dot" badgetype="graph" text="3" />
          <Badge variant="dot" badgetype="success" text="4" />
          <Badge variant="dot" badgetype="warning" text="5" />
          <Badge variant="dot" badgetype="error" text="6" />
          <Badge variant="dot" badgetype="primary" text="7" />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Basic(Dot Badge With Effect)
        </h2>
        <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Badge variant="dot" badgetype="dark" text="1" effect />
          <Badge variant="dot" badgetype="secondary" text="2" effect />
          <Badge variant="dot" badgetype="graph" text="3" effect />
          <Badge variant="dot" badgetype="success" text="4" effect />
          <Badge variant="dot" badgetype="warning" text="5" effect />
          <Badge variant="dot" badgetype="error" text="6" effect />
          <Badge variant="dot" badgetype="primary" text="7" effect />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Basic(Pill Badge)
        </h2>
        <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Badge variant="pill" badgetype="dark" text="Badge" />
          <Badge variant="pill" badgetype="secondary" text="Badge" />
          <Badge variant="pill" badgetype="graph" text="Badge" />
          <Badge variant="pill" badgetype="success" text="Badge" />
          <Badge variant="pill" badgetype="warning" text="Badge" />
          <Badge variant="pill" badgetype="error" text="Badge" />
          <Badge variant="pill" badgetype="primary" text="Badge" />
        </div>
      </div>

      <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
          Basic(Pill Badge With Effect)
        </h2>
        <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Badge variant="pill" badgetype="dark" text="Badge" effect />
          <Badge variant="pill" badgetype="secondary" text="Badge" effect />
          <Badge variant="pill" badgetype="graph" text="Badge" effect />
          <Badge variant="pill" badgetype="success" text="Badge" effect />
          <Badge variant="pill" badgetype="warning" text="Badge" effect />
          <Badge variant="pill" badgetype="error" text="Badge" effect />
          <Badge variant="pill" badgetype="primary" text="Badge" effect />
        </div>
      </div>
    </BaseLayout>
  );
};

export default badge;