"use client";

import { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Appbar, Search, Hamburger, Notification, Select } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

export default function Home() {
    const [searchResults, setSearchResults] = useState<any>([]);
    const [selectedValue, setSelectedValue] = useState<string>("");
    const [option, setOption] = useState([]);
    const [optionId, setOptionId] = useState<number>(0);
    const [optionError, setOptionError] = useState<boolean>(false);

    const sidebarItems = ["Dashboard", "Profile", "Messages", "Settings"];
    const notificationItems = [
        "Notification 1",
        "Notification 2",
        "Notification 3",
        "Notification 4",
        "Notification 5",
        "Notification 6",
        "Notification 7",
        "Notification 8"
    ];

    const handleSearch = (query: any) => {
        const dummyData = [
            { id: 1, name: "search1" },
            { id: 2, name: "search2" },
            { id: 3, name: "search3" },
        ];
        const filteredResults = dummyData.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);

    }

    const options = [
        { label: "Option 1", value: "option 1" },
        { label: "Option 2", value: "option 2" },
        { label: "Option 3", value: "option 3" },
    ];


    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    AppBar
                </h5>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic
                    </h2>
                    <div className="h-auto ml-7">
                        <Appbar
                            rightContent={
                                <>
                                    <Notification
                                        count={8}
                                        classname="w-96 h-full bg-white  border-l-[2px] border-l-lightSilver z-10"
                                    >
                                        <ul>
                                            {notificationItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Notification>
                                    <div className="pointer-events-none">
                                        <Search onSearch={handleSearch} />
                                    </div>
                                </>
                            }
                        >
                            <Hamburger
                                widths="260"
                                classname="h-full bg-[#cfd1d0] border-r-[2px] border-r-lightSilver"
                                logo={
                                    <img
                                        src="https://technomark.io/wp-content/uploads/2022/07/TM-Logo.svg"
                                        alt="Logo"
                                        height={120}
                                        width={120}
                                    />
                                }
                            >
                                <ul>
                                    {sidebarItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Hamburger>

                        </Appbar>
                        <ul>
                            {searchResults.map((result: any) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic with Title
                    </h2>
                    <div className="h-auto ml-7">
                        <Appbar
                            rightContent={
                                <>
                                    <Notification
                                        count={8}
                                        classname="w-96 h-full bg-white  border-l-[2px] border-l-lightSilver z-10"
                                    >
                                        <ul>
                                            {notificationItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Notification>
                                    <div className="pointer-events-none">
                                        <Search onSearch={handleSearch} />
                                    </div>
                                </>
                            }
                        >
                            <Hamburger
                                widths="260"
                                classname="h-full bg-[#cfd1d0] border-r-[2px] border-r-lightSilver"
                                logo={
                                    <img
                                        src="https://technomark.io/wp-content/uploads/2022/07/TM-Logo.svg"
                                        alt="Logo"
                                        height={120}
                                        width={120}
                                    />
                                }
                            >
                                <ul>
                                    {sidebarItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Hamburger>
                            <div className="font-medium text-lg ml-2">
                                Page Title
                            </div>
                        </Appbar>
                        <ul>
                            {searchResults.map((result: any) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic with Dropdown
                    </h2>
                    <div className="h-auto ml-7">
                        <Appbar
                            rightContent={
                                <>
                                    <Notification
                                        count={8}
                                        classname="w-96 h-full bg-white  border-l-[2px] border-l-lightSilver z-10"
                                    >
                                        <ul>
                                            {notificationItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </Notification>
                                    <div className="pointer-events-none">
                                        <Search onSearch={handleSearch} />
                                    </div>
                                </>
                            }
                        >
                            <Hamburger
                                widths="260"
                                classname="h-full bg-[#cfd1d0] border-r-[2px] border-r-lightSilver"
                                logo={
                                    <img
                                        src="https://technomark.io/wp-content/uploads/2022/07/TM-Logo.svg"
                                        alt="Logo"
                                        height={120}
                                        width={120}
                                    />
                                }
                            >
                                <ul>
                                    {sidebarItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-pureBlack p-3 pl-5 border-b-[1px] border-b-lightSilver cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Hamburger>
                            <div className="ml-2">
                                <Select
                                    id="basic"
                                    type="icons"
                                    options={options}
                                    validate
                                    search
                                    defaultValue={optionId}
                                    getValue={(value: any) => setOptionId(value)}
                                    getError={(e: any) => setOptionError(e)}
                                    hasError={optionError}
                                />
                            </div>
                        </Appbar>
                        <ul>
                            {searchResults.map((result: any) => (
                                <li key={result.id}>{result.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>



            </BaseLayout>
        </>
    );
}
