"use client";

import { Close, NavigationBar, Scrollspy, ScrollspyPopup } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import Icon from "./CustomIcon";

const page: React.FC = () => {
    const titles = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
    const targetIds1 = ["page-1", "page-2", "page-3", "page-4", "page-5"];
    const targetIds2 = ["page-6", "page-7", "page-8", "page-9", "page-10"];
    const targetIds3 = ["page-11", "page-12", "page-13", "page-14", "page-15"];
    const targetIds4 = ["page-16", "page-17", "page-18", "page-19", "page-20"];
    const targetIds5 = ["page-21", "page-22", "page-23", "page-24", "page-25"];
    const icons = [<Icon />, <Icon />, <Icon />, <Icon />, <Icon />];

    const tabs = [
        { id: "page-21", label: "CLASS" },
        { id: "page-22", label: "LOCATION" },
        { id: "page-23", label: "DEPARTMENT" },
        { id: "page-24", label: "PROJECT" },
        { id: "page-25", label: "MECHANICAL" },
        { id: "page-26", label: "IT" },
        { id: "page-27", label: "ELECTRICAL" },
    ];

    const [lgOpen, setLgOpen] = useState(false);
    const [value, setValue] = useState("");

    const lgOpenModal = () => {
        setLgOpen(true);
    };

    const lgCloseModal = () => {
        setLgOpen(false);
    };


    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Scrollspy</h5>
        <div className="p-4 m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Horizontal</h2>
            <Scrollspy titles={titles} targetIds={targetIds1} variant="horizontal" />
            <div className="min-h-[calc(100vh-52px)] top-[100px] ">
                <div
                    id="page-1"
                    className={`pt-[40px] min-h-[500px] w-full`}
                >
                    <div className="font-medium text-[24px] p-2">Page 1</div>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    id="page-2"
                    className="pt-[40px] min-h-[500px] w-full"
                >
                    <div className="font-medium text-[24px] p-2">Page 2</div>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    id="page-3"
                    className="pt-[40px] min-h-[500px] w-full"
                >
                    <div className="font-medium text-[24px] p-2">Page 3</div>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    id="page-4"
                    className="pt-[40px] min-h-[500px] w-full"
                >
                    <div className="font-medium text-[24px] p-2">Page 4</div>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div
                    id="page-5"
                    className="pt-[40px] min-h-[500px] w-full"
                >
                    <div className="font-medium text-[24px] p-2">Page 5</div>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
        <div className="p-4 m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Vertical</h2>
            <div className="flex flex-row">
                <div className="flex-col w-1/5">
                    <Scrollspy
                        titles={titles}
                        targetIds={targetIds2}
                        variant="vertical"
                    />
                </div>
                <div className="flex-col w-full ">
                    <div id="page-6" className="h-[636px] w-full ">
                        <div className="font-medium text-[24px] p-2">Page 1</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-7" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 2</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-8" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 3</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-9" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 4</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-10" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 5</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Vertical With Drawer</h2>
            <div className="flex flex-row">
                <div className="flex-col w-1/5">
                    <Scrollspy
                        titles={titles}
                        targetIds={targetIds3}
                        variant="vertical"
                        icons={icons}
                        type="drawer"
                    />
                </div>
                <div className="flex-col w-full ">
                    <div id="page-11" className="h-[636px] w-full ">
                        <div className="font-medium text-[24px] p-2">Page 1</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-12" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 2</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-13" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 3</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-14" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 4</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-15" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 5</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Vertical With Drawer (Large)</h2>
            <div className="flex flex-row">
                <div className="flex-col w-[40%]">
                    <Scrollspy
                        titles={titles}
                        targetIds={targetIds4}
                        variant="vertical"
                        icons={icons}
                        type="drawer"
                        large
                    />
                </div>
                <div className="flex-col w-full ">
                    <div id="page-16" className="h-[636px] w-full ">
                        <div className="font-medium text-[24px] p-2">Page 1</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-17" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 2</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-18" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 3</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-19" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 4</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-20" className="h-[636px] w-full">
                        <div className="font-medium text-[24px] p-2">Page 5</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 m-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Scrollspy Pop-up</h2>
            <button onClick={lgOpenModal} className="bg-blue-500 ml-5 text-white px-4 py-2 rounded">
                Scrollspy Pop-up
            </button>
            <ScrollspyPopup
                isOpen={lgOpen}
                onClose={() => setLgOpen(false)}
                className="m-10 overflow-y-scroll !h-[600px]"
            >
                <div className="flex justify-between w-full sticky top-0 bg-[#F4F4F4]">
                    <NavigationBar
                        tabs={tabs}
                        visibleTab={7}
                        getValue={(e: any) => {
                            setValue(e);
                        }}
                        variant="modal"
                    />
                    <div onClick={() => setLgOpen(false)} className="p-1">
                        <Close variant="large" />
                    </div>
                </div>
                <div>
                    <div id="page-21" className={`pt-[40px] h-[300px] w-auto `}>
                        <div className="font-medium text-[24px] p-2">Page 1</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-22" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 2</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-23" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 3</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-24" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 4</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-25" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 5</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-26" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 6</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div id="page-27" className="pt-[40px] h-[300px] w-auto ">
                        <div className="font-medium text-[24px] p-2">Page 7</div>
                        <p className="p-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </ScrollspyPopup>
        </div>
    </BaseLayout>;
};

export default page;