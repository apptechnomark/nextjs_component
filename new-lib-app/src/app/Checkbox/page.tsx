"use client"

import React from "react";
import BaseLayout from "../../components/BaseLayout"
import { CheckBox } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const checkbox = () => {

    const check = () => {
        console.log("checked");

    }
    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Checkbox</h5>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <CheckBox id="option1" onChange={(e) => { check }} label="Checked" />
                    <CheckBox id="option2" onChange={(e) => { check }} label="Default" />
                    <CheckBox id="option3" onChange={(e) => { check }} label="CheckedDisable" checked disabled />
                    <CheckBox id="option4" onChange={(e) => { check }} label="CheckedDisable"  disabled />
                    <CheckBox id="option5" onChange={(e) => { check }} label="invalid" invalid />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Intermediate</h2>

                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <CheckBox id="option6" onChange={(e) => { check }} label="Checked" intermediate checked />
                    <CheckBox id="option7" onChange={(e) => { check }} label="Default" intermediate />
                    <CheckBox id="option8" onChange={(e) => { check }} label="Disable Checked" intermediate checked disabled />
                    <CheckBox id="option9" onChange={(e) => { check }} label="Disable Checked" intermediate disabled />
                    <CheckBox id="option10" onChange={(e) => { check }} label="invalid" invalid intermediate />
                  
                </div>

            </div>
            </BaseLayout>
    )
}


export default checkbox