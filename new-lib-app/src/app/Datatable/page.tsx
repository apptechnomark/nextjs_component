"use client";

import React, { useEffect, useRef, useState } from "react";

import { CheckBox, DataTable, MenuIcon, Switch } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import BaseLayout from "../../components/BaseLayout";

const page = () => {
    const columns: any = [
        {
            header: "ID",
            accessor: "id",
            sortable: true,
            colalign: "left",
        },
        {
            header: "NAME",
            accessor: "name",
            sortable: true,
            colalign: "left",
        },
        {
            header: "STATUS",
            accessor: "status",
            sortable: false,
            colalign: "right",
        },
        {
            header: "AMOUNT",
            accessor: "amount",
            sortable: true,
            colalign: "right",
        },
        {
            header: "AGE",
            accessor: "age",
            sortable: false,
            colalign: "right",
        },
        {
            header: "",
            accessor: "action",
            sortable: false,
            colalign: "right",
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

    const nestedColumns: any = [
        {
            header: "ROLE NAME",
            accessor: "role",
            sortable: true,
            colalign: "left",
            colStyle: "!w-[100px]",
        },
        {
            header: "DESCRIPTION",
            accessor: "description",
            sortable: false,
            colalign: "left",
            colStyle: "",
        },
    ];

    //Nested Datatable Header
    const nestedHeaders: any = [
        {
            header: "",
            accessor: "Id",
            sortable: false,
            colStyle: "!w-5",
        },
        {
            header: "Module",
            accessor: "Module",
            sortable: true,
            colalign: "left",
            colStyle: "!w-[105px]",
        },
        {
            header: "View",
            accessor: "View",
            sortable: false,
            colalign: "center",
        },
        {
            header: "Edit",
            accessor: "Edit",
            sortable: false,
            colalign: "center",
        },
        {
            header: "Create",
            accessor: "Create",
            sortable: false,
            colalign: "center",
        },
        {
            header: "Import",
            accessor: "Import",
            sortable: false,
            colalign: "center",
        },
        {
            header: "Sync",
            accessor: "Sync",
            sortable: false,
            colalign: "center",
        },
    ];

    const nestedDataList = [
        {
            role: "Admin",
            description: "Standard provided role cannot be edited and deleted",
            children: [
                {
                    Id: "",
                    Module: "Vendor",
                    View: true,
                    Edit: true,
                    Create: false,
                    Import: true,
                    Sync: false,
                },
                {
                    Id: "",
                    Module: "Dashboard",
                    View: true,
                    Edit: false,
                    Create: true,
                    Import: false,
                    Sync: true,
                },
                {
                    Id: "",
                    Module: "Documents",
                    View: false,
                    Edit: false,
                    Create: true,
                    Import: false,
                    Sync: true,
                },
                {
                    Id: "",
                    Module: "Purchase Order",
                    View: true,
                    Edit: true,
                    Create: false,
                    Import: false,
                    Sync: false,
                },
                {
                    Id: "",
                    Module: "Bill Posting",
                    View: false,
                    Edit: false,
                    Create: true,
                    Import: true,
                    Sync: false,
                },
            ],
        },
        {
            role: "Commmon",
            children: [
                {
                    Id: "",
                    Module: "Vendor",
                    View: true,
                    Edit: true,
                    Create: false,
                    Import: true,
                    Sync: false,
                },
                {
                    Id: "",
                    Module: "Purchase Order",
                    View: true,
                    Edit: true,
                    Create: false,
                    Import: false,
                    Sync: false,
                },
                {
                    Id: "",
                    Module: "Bill Posting",
                    View: false,
                    Edit: false,
                    Create: true,
                    Import: true,
                    Sync: false,
                },
            ],
        },
        {
            role: "Approval",
            description: "Standard provided role cannot be edited and deleted",
            children: [
                {
                    Id: "",
                    Module: "Vendor",
                    View: true,
                    Edit: true,
                    Create: false,
                    Import: true,
                    Sync: false,
                },
                {
                    Id: "",
                    Module: "Dashboard",
                    View: true,
                    Edit: false,
                    Create: true,
                    Import: false,
                    Sync: true,
                },
                {
                    Id: "",
                    Module: "Documents",
                    View: false,
                    Edit: false,
                    Create: true,
                    Import: false,
                    Sync: true,
                }
            ],
        }
    ];

    const actionArray = ["Edit", "Remove"];

    // Action
    const Actions = ({ actions, id, recNo }: any) => {
        const actionsRef = useRef<HTMLDivElement>(null);
        const [open, setOpen] = useState(false);
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                actionsRef.current &&
                !actionsRef.current.contains(event.target as Node)
            ) {
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
            <div className="relative flex">
                <div
                    ref={actionsRef}
                    className="cursor-pointer w-10 flex justify-center items-center"
                    onClick={() => setOpen(!open)}
                >
                    <MenuIcon size="small" direction="meatball" classname={"w-full"} />
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
        ...e,
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
    })).slice(0, 5);

    //Nested Datatable Data
    const classListData2 = nestedDataList?.map((e: any) => ({
        ...e,
        details: e.children?.length > 0 && (
            <div>
                <DataTable
                    columns={nestedHeaders}
                    data={e.children.map(
                        (data: any) =>
                            new Object({
                                ...data,
                                View: (
                                    <CheckBox
                                        id={data.Module + Math.random()}
                                        defaultChecked={data.View}
                                    />
                                ),
                                Edit: (
                                    <CheckBox
                                        id={data.Module + Math.random()}
                                        defaultChecked={data.Edit}
                                    />
                                ),
                                Create:
                                    (
                                        <CheckBox
                                            id={data.Module + Math.random()}
                                            defaultChecked={data.Create}
                                        />
                                    ),
                                Import: (
                                    <CheckBox
                                        id={data.Module + Math.random()}
                                        defaultChecked={data.Import}
                                    />
                                ),
                                Sync: (
                                    <CheckBox
                                        id={data.Module + Math.random()}
                                        defaultChecked={data.Sync}
                                    />
                                ),
                            })
                    )}
                />
            </div>
        ),
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
                            hoverEffect={true}
                        />
                    </div>
                </div>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic (Sticky Header)
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
                {/* <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Expandable Datatable
                    </h2>
                    <div className="h-auto ml-7">
                        <DataTable
                            columns={nestedColumns}
                            data={nestedDataList.length > 0 ? classListData2 : []}
                            expandable
                        />
                    </div>
                </div> */}

            </BaseLayout>
        </>
    );
};

export default page;