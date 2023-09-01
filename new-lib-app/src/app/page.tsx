"use client";

import BaseLayout from "@/components/BaseLayout";
import { Accordion } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const dataCollection = [
    {
        question: "What makes blockchain trustworthy?",
        answer:

            "There are three sides to this answer. Firstly, nobody but the owner of the data can access it without permission. Thus, it is a safe way to protect data from third parties who should not see the information. Secondly, the data can be tracked at any time. It comes with a timestamp which indicates when the information was written on the blockchain and it is always available for fetching. ",
    },
    {
        question: "Why Do You Want to Work at This Company?",
        answer:
            "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
    },
    {
        question: "What Are Your Greatest Strengths?",
        answer:
            "Fusce et imperdiet ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ipsum erat, ullamcorper nec bibendum aliquam, commodo ac enim. In a aliquet enim, nec vehicula ligula. Aenean non magna sapien. Integer vel massa vulputate, varius nunc nec, malesuada arcu. ",
    },
];

const page = () => {
    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Accordion</h5>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
                <div className="pb-4">
                    <Accordion dataCollection={dataCollection} label="Basic" />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Only One Open</h2>
                <div className="pb-4">
                    <Accordion dataCollection={dataCollection} label="Basic" one />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic with icon change(+)</h2>
                <div className="pb-4">
                    <Accordion dataCollection={dataCollection} label="Basic" icon />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Only One Open With Icon (+)</h2>
                <div className="pb-4">
                    <Accordion dataCollection={dataCollection} label="Basic" icon one />
                </div>
            </div>
        </BaseLayout>
    );

};

export default page;