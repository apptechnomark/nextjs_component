/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import BaseLayout from "../../components/BaseLayout";
import { Alert } from "next-ts-lib";
import "next-ts-lib/dist/index.css"
import React,
{ useEffect, useState } from "react";
import styles from "./Alert.module.scss"



const alert: React.FC = () => {
    const [hide, setHide] = useState(false);




    useEffect(() => {

        setTimeout(() => {

            setHide(true);

        }, 2000);

    });
    return <BaseLayout>
        <div className="w-full flex items-center justify-center">
            <div className={`${styles.showAnimation} ${hide && styles.hideAnimation} w-[500px]`}>
                <Alert variant="success" message="Operation completed successfully!" />
            </div>
        </div>
        <h5 className="mt-10 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alerts</h5>

        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Success</h2>
            <div className="pb-4">
                <Alert variant="success" message="A simple alert-check it out" />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Warning</h2>
            <div className="pb-4">
                <Alert variant="warning" message="A simple alert-check it out" />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Error</h2>
            <div className="pb-4">
                <Alert variant="error" message="A simple alert-check it out" />
            </div>
        </div>
        <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Info</h2>
            <div className="pb-4">
                <Alert variant="info" message="A simple alert-check it out" />
            </div>
        </div>
 

    </BaseLayout>;
};

export default alert;