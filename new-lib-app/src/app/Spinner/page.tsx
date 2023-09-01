"use client"

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { Spinner } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const TabComponent: React.FC = () => {

    const tabBar = [
        { id: "1", label: "Tab1" },
        { id: "2", label: "Tab2" },
        { id: "3", label: "Tab3" },
    ]

    const getid = (arags: any) => {
        console.log(arags)
    }

    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Spinner
                </h5>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic
                    </h2>
                    <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <Spinner size="15px"/>
                        <Spinner size="30px"/>
                        <Spinner size="45px"/>
                    </div>
                </div>
            </BaseLayout>

        </>
    );
};

export default TabComponent;
