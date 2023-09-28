"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import BaseLayout from "../../components/BaseLayout";
import MeatballsMenuIcon from "./Icons/MeatballsMenu";
import { CheckBox, DataTable, Switch, Table, Tooltip } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const page = () => {

    const columns: any = [
        {
            header: "ID",
            accessor: "id",
            sortable: true,
            colalign: "left"
        },
        {
            header: "NAME",
            accessor: "name",
            sortable: true,
            colalign: "left"
        },
        {
            header: "STATUS",
            accessor: "status",
            sortable: false,
            colalign: "right"
        },
        {
            header: "AMOUNT",
            accessor: "amount",
            sortable: false,
            colalign: "right"
        },
        {
            header: "AGE",
            accessor: "age",
            sortable: false,
            colalign: "right"
        },
        {
            header: "",
            accessor: "action",
            sortable: false,
            colalign: "left"
        },
    ];

    const dataList = [
        {
            id: 1,
            name: "John Doe",
            status: "Active",
            amount: 1000,
            age: 30,
            action: "Edit",
        },
        {
            id: 2,
            name: "Jane Smith",
            status: "Inactive",
            amount: 500,
            age: 25,
            action: "Delete",
        },
        {
            id: 3,
            name: "Alice Johnson",
            status: "Active",
            amount: 750,
            age: 28,
            action: "Edit",
        },
        {
            id: 4,
            name: "Bob Brown",
            status: "Active",
            amount: 1200,
            age: 35,
            action: "Delete",
        },
        {
            id: 5,
            name: "Eva Davis",
            status: "Inactive",
            amount: 900,
            age: 29,
            action: "Edit",
        },
        {
            id: 6,
            name: "Michael Wilson",
            status: "Active",
            amount: 1500,
            age: 40,
            action: "Delete",
        },
        {
            id: 7,
            name: "Olivia Clark",
            status: "Inactive",
            amount: 600,
            age: 26,
            action: "Edit",
        },
        {
            id: 8,
            name: "Daniel Lee",
            status: "Active",
            amount: 800,
            age: 32,
            action: "Delete",
        },
        {
            id: 9,
            name: "Sophia Taylor",
            status: "Active",
            amount: 1100,
            age: 33,
            action: "Edit",
        },
        {
            id: 10,
            name: "William Anderson",
            status: "Inactive",
            amount: 950,
            age: 27,
            action: "Delete",
        },
    ];
    const actionArray = ["Edit", "Remove"];

    // Action
    const Actions = ({ actions, id, recNo }: any) => {
        const actionsRef = useRef<HTMLDivElement>(null);
        const [open, setOpen] = useState(false);
        const handleOutsideClick = (event: MouseEvent) => {
            if (actionsRef.current && !actionsRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        useEffect(() => {
            window.addEventListener("click", handleOutsideClick);
            return () => {
                window.removeEventListener("click", handleOutsideClick);
            };
        }, []);

        return (
            <div className="relative w-full flex justify-end">
                <div
                    ref={actionsRef}
                    className="cursor-pointer w-10 flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    <MeatballsMenuIcon />
                    {open && (
                        <React.Fragment>
                            <div className="absolute z-10 top-7 right-1 flex justify-center items-center">
                                <div className="py-2 border border-lightSilver rounded-md bg-pureWhite shadow-lg ">
                                    <ul className="w-40">
                                        {actions.map((action: any, index: any) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    handleKebabChange(action);
                                                }}
                                                className="flex w-full h-9 px-3 hover:bg-lightGray !cursor-pointer"
                                            >
                                                <div className="flex justify-center items-center ml-2 cursor-pointer">
                                                    <label className="inline-block text-xs cursor-pointer">
                                                        {action}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        );
    };

    const handleKebabChange = (actionName: string) => {
        if (actionName === "Edit") {
            alert("Edit Clicked");
        }
        if (actionName === "Remove") {
            alert("Remove Clicked");
        }
    };

    const classListData = dataList?.map((e: any) => ({
        id: e.id,
        name: e.name,
        status: (
            <div>
                {e.status === "Active" ? (
                    <Switch checked={true} />
                ) : (
                    <Switch checked={false} />
                )}
            </div>
        ),
        amount: e.amount,
        age: e.age,
        action: <Actions id={e.Id} recNo={e.RecordNo} actions={actionArray} />,
    }));

    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Data Table
                </h5>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic
                    </h2>
                    <div className="h-auto ml-7">
                        <DataTable
                            columns={columns}
                            data={dataList.length > 0 ? classListData : []}
                            sticky
                            hoverEffect={true}
                        />
                    </div>
                </div>

            </BaseLayout>
        </>
    );
}

export default page