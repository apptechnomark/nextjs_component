"use client"

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import { SpeedDial } from "next-ts-lib";
import {
    AiFillFacebook,
    AiFillApple,
    AiFillGithub,
    AiFillYoutube,
} from "react-icons/ai";
import "next-ts-lib/dist/index.css";

const SpeeddialComponent: React.FC = () => {

    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Speed Dial
            </h5>
            <div className="p-2 m-3 h-18 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Basic
                </h2>
                <div className="flex items-center h-14  flex-col">
                    <SpeedDial
                        
                        listItems={[
                            {
                                icon: <AiFillFacebook />,
                                action: () => {
                                    console.log("Facebook clicked");
                                },
                                hoverText: "Facebook item",
                            },
                            {
                                icon: <AiFillApple />,
                                action: () => {
                                    console.log("Apple clicked");
                                },
                                hoverText: "Apple",
                            },
                            {
                                icon: <AiFillGithub />,
                                action: () => {
                                    console.log("Git clicked");
                                },
                                hoverText: "Git",
                            },
                            {
                                icon: <AiFillYoutube />,
                                action: () => {
                                    console.log("Youtube clicked");
                                },
                                hoverText: "Youtube",
                            },
                        ]}
                    ></SpeedDial>
                </div>
            </div>
            <div className="p-2 m-3 h-18 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Large Variant
                </h2>
                <div className="flex items-center h-14  flex-col">
                    <SpeedDial
                        large
                        listItems={[
                            {
                                icon: <AiFillFacebook />,
                                action: () => {
                                    console.log("Facebook clicked");
                                },
                                hoverText: "Facebook item",
                            },
                            {
                                icon: <AiFillApple />,
                                action: () => {
                                    console.log("Apple clicked");
                                },
                                hoverText: "Apple",
                            },
                            {
                                icon: <AiFillGithub />,
                                action: () => {
                                    console.log("Git clicked");
                                },
                                hoverText: "Git",
                            },
                            {
                                icon: <AiFillYoutube />,
                                action: () => {
                                    console.log("Youtube clicked");
                                },
                                hoverText: "Youtube",
                            },
                        ]}
                    ></SpeedDial>
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Speed Dia with Tooltip
                </h2>
                <div className="flex items-center h-12  flex-col">
                    <SpeedDial
                        open
                        // large
                        listItems={[
                            {
                                icon: <AiFillFacebook />,
                                action: () => {
                                    console.log("Facebook clicked");
                                },
                                hoverText: "Facebook item",
                            },
                            {
                                icon: <AiFillApple />,
                                action: () => {
                                    console.log("Apple clicked");
                                },
                                hoverText: "Apple",
                            },
                            {
                                icon: <AiFillGithub />,
                                action: () => {
                                    console.log("Git clicked");
                                },
                                hoverText: "Git",
                            },
                            {
                                icon: <AiFillYoutube />,
                                action: () => {
                                    console.log("Youtube clicked");
                                },
                                hoverText: "Youtube",
                            },
                        ]}
                    ></SpeedDial>
                </div>
            </div>

            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Speed Dia with Tooltip and Large Variant
                </h2>
                <div className="flex items-center h-12  flex-col">
                    <SpeedDial
                        open
                        large
                        listItems={[
                            {
                                icon: <AiFillFacebook />,
                                action: () => {
                                    console.log("Facebook clicked");
                                },
                                hoverText: "Facebook item",
                            },
                            {
                                icon: <AiFillApple />,
                                action: () => {
                                    console.log("Apple clicked");
                                },
                                hoverText: "Apple",
                            },
                            {
                                icon: <AiFillGithub />,
                                action: () => {
                                    console.log("Git clicked");
                                },
                                hoverText: "Git",
                            },
                            {
                                icon: <AiFillYoutube />,
                                action: () => {
                                    console.log("Youtube clicked");
                                },
                                hoverText: "Youtube",
                            },
                        ]}
                    ></SpeedDial>
                </div>
            </div>

        </BaseLayout>
    );
};

export default SpeeddialComponent;
