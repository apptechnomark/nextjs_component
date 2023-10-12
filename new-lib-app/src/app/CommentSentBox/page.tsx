"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { CommentSentBox } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const page: React.FC = () => {
    let firstImage = "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    let secondImage = "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    let thirdImage = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"

    const options = [
        { label: "Oliver Smith", value: "Oliver Smith", imageUrl: firstImage },
        { label: "Sophia Johnson", value: "Sophia Johnson", imageUrl: secondImage },
        { label: "Liam Brown", value: "Liam Brown", imageUrl: thirdImage },
        { label: "Emma Taylor", value: "Emma Taylor" },
        { label: "Noah Williams", value: "Noah Williams", imageUrl: firstImage },
        { label: "Olivia Jones", value: "Olivia Jones" },
        { label: "Ava Davis", value: "Ava Davis", imageUrl: secondImage },
        { label: "Isabella Miller", value: "Isabella Miller" },
        { label: "Ethan Wilson", value: "Ethan Wilson" },
        { label: "Mia Moore", value: "Mia Moore" },
        { label: "Lucas Anderson", value: "Lucas Anderson", imageUrl: firstImage },
        { label: "Harper Jackson", value: "Harper Jackson" },
        { label: "Lily Harris", value: "Lily Harris", imageUrl: secondImage },
        { label: "Aiden Martin", value: "Aiden Martin" },
        { label: "Zoe Thompson", value: "Zoe Thompson", imageUrl: secondImage },
    ];
    const handleGetValue = (value: any) => {
    }

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Comment Sent Box</h5>

        <div className="px-3 pb-12 mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <CommentSentBox options={options} getValue={(e) => { handleGetValue(e) }}
                getInputValue={(e) => { handleGetValue(e) }}
                getCompanyListValue={(e) => { handleGetValue(e) }}
            />
        </div>
        <div className="mt-5 px-3 pb-12 mx-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic With Selection</h2>
            <CommentSentBox options={options} getValue={(e) => { handleGetValue(e) }}
                getInputValue={(e) => { handleGetValue(e) }}
                getCompanyListValue={(e) => { handleGetValue(e) }}
                variant="commentSentBox"
            />
        </div>
    </BaseLayout>;
};

export default page;