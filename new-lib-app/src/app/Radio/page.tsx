"use client"

import React from "react";
import BaseLayout from "../../components/BaseLayout"
import { Radio } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const radio = () => {

    const check = () => {
        console.log("checked");

    }
    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Checkbox</h5>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>


                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Radio id="option1" onChange={(e) => { check }} label="Checked" checked />
                    <Radio id="option2" onChange={(e) => { check }} label="Default" />
                    <Radio id="option3" onChange={(e) => { check }} label="CheckedDisable" checked disabled />
                    <Radio id="option4" onChange={(e) => { check }} label="CheckedDisable" disabled />
                    <Radio id="option5" onChange={(e) => { check }} label="invalid" variant="invalid" />
                </div>
            </div>
        </BaseLayout>
    )
}


export default radio