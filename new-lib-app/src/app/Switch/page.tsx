"use client"

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Switch } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const SwitchComponent: React.FC = () => {

    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Switch
                </h5>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic
                    </h2>
                    <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <Switch />
                        <Switch checked />
                        <Switch disabled checked />
                        <Switch disabled />
                    </div>
                </div>

                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Primary & Invalid variant
                    </h2>
                    <div className="pt-3 pl-7 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <Switch variant="primary" checked/>
                        <Switch variant="invalid" checked/>
                    </div>
                </div>

            </BaseLayout>

        </>
    );
};

export default SwitchComponent;
