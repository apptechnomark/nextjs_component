"use client";

import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Button, CheckBox, DataTable, PropertyBar, Switch, PropertyDrawer } from "next-ts-lib";
import "next-ts-lib/dist/index.css";
import PlusIcon from "./icons/PlusIcon";
import Export from "./icons/Export";
import Import from "./icons/import"
import Filter from "./icons/Filter"
import News from "./icons/News"
import Cancel from "./icons/Cancel"
import Check from "./icons/Check"
import Rate from "./icons/Rate"
import Chat from "./icons/Chat"
import Sync from "./icons/Sync"

const page: React.FC = () => {
    const [value, setValue] = useState("class");
    const [selectAll, setSelectAll] = useState(false);
    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);
    const [selectedRowCount, setSelectedRowCount] = useState(0);
    const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState(false);
    const [rowCheckboxChecked, setRowCheckboxChecked] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const [isOpen, setIsOpen] = useState(true);

    const openDrawer = () => {

        setIsOpen(true);
    };

    const closeDrawer = () => {
        setIsOpen(false);
    };

    const itemList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

    const iconList = [
        <Chat />,
        <Check />,
        <News />,
        <Sync />,
        <Export />,
        <Import />,
        <Filter />,
        <Cancel />,
    ];



    const toggleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        setIsOpen(true);
        setHeaderCheckboxChecked(newSelectAll);
        if (newSelectAll) {
            // Select all rows
            const allRowIds = dataList.map((row) => row.id);
            setSelectedRowIds(allRowIds);
            setSelectedRowCount(allRowIds.length - 5); // Subtract 5 for the header
        } else {
            // Deselect all rows
            setSelectedRowIds([]);
            setSelectedRowCount(0);
        }
    };

    const handleRowCheckboxChange = (id: number) => {
        if (id === 0) {
            // It's the header checkbox, toggle the selection state
            toggleSelectAll();
        } else {
            // It's a row checkbox
            const updatedSelectedRowIds = selectedRowIds.slice();
            if (selectedRowIds.includes(id)) {
                // If the row is already selected, remove it from the selectedRowIds
                const index = selectedRowIds.indexOf(id);
                updatedSelectedRowIds.splice(index, 1);
                setSelectedRowCount(selectedRowCount - 1);
            } else {
                // If the row is not selected, add it to the selectedRowIds
                updatedSelectedRowIds.push(id);
                setSelectedRowCount(selectedRowCount + 1);
            }
            setSelectedRowIds(updatedSelectedRowIds);

            // Check if any row checkboxes are checked
            if (updatedSelectedRowIds.length > 0) {
                setRowCheckboxChecked(true);
            } else {
                setRowCheckboxChecked(false);
            }

            // Check if all row checkboxes are checked
            if (updatedSelectedRowIds.length === dataList.length - 5) {
                setSelectAll(true);
            } else {
                setSelectAll(false);
            }
        }
    };



    const columns: any = [
        {
            header: <CheckBox id="header" checked={selectAll} onChange={toggleSelectAll} />,
            accessor: "",
            sortable: false,
            colalign: "left",
        },
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

        },
        {
            id: 2,
            name: "Jane Smith",
            status: "Inactive",
            amount: 500,
            age: 25,

        },
        {
            id: 3,
            name: "Alice Johnson",
            status: "Active",
            amount: 750,
            age: 28,

        },
        {
            id: 4,
            name: "Bob Brown",
            status: "Active",
            amount: 1200,
            age: 35,

        },
        {
            id: 5,
            name: "Eva Davis",
            status: "Inactive",
            amount: 900,
            age: 29,

        },
        {
            id: 6,
            name: "Michael Wilson",
            status: "Active",
            amount: 1500,
            age: 40,

        },
        {
            id: 7,
            name: "Olivia Clark",
            status: "Inactive",
            amount: 600,
            age: 26,
        },
        {
            id: 8,
            name: "Daniel Lee",
            status: "Active",
            amount: 800,
            age: 32,

        },
        {
            id: 9,
            name: "Sophia Taylor",
            status: "Active",
            amount: 1100,
            age: 33,
        },
        {
            id: 10,
            name: "William Anderson",
            status: "Inactive",
            amount: 950,
            age: 27,

        },
    ];

    const classListData = dataList?.map((e: any) => ({
        ...e,
        "": <CheckBox id={e.id.toString()} checked={selectedRowIds.includes(e.id)} onChange={() => handleRowCheckboxChange(e.id)} />,
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

    })).slice(0, 5);



    const iconsInfo = [
        {
            icon: <Sync key={1} />,
            name: "Sync",
        },
        {
            icon: <Chat key={2} />,
            name: "Chat",
        },
        {
            icon: <Rate key={3} />,
            name: "Rate",
        },
        {
            icon: <Check key={4} />,
            name: "Check",
        },
        {
            icon: <Cancel key={5} />,
            name: "Cancel",
        },
        {
            icon: <News key={6} />,
            name: "News",
        },
        {
            icon: <Filter key={7} />,
            name: "Filter",
        },
        {
            icon: <Import key={8} />,
            name: "Import",
        },
        {
            icon: <Export key={9} />,
            name: "Export",
        },
        {
            icon: <Button className="rounded-md btn-sm" variant="btn-primary">
                <span className="flex items-center">
                    <span className="mr-2 mt-1">
                        <PlusIcon />
                    </span>
                    Primary
                </span>
            </Button>,
        },
    ];

    const tabs = [
        { id: "class", label: "CLASS" },
        { id: "location", label: "LOCATION" },
        { id: "department", label: "DEPARTMENT" },
        { id: "project", label: "PROJECT" },
        { id: "mechanical", label: "MECHANICAL" },
        { id: "it", label: "IT" },
        { id: "electrical", label: "ELECTRICAL" },
    ];

    const values = (e: any) => {
        setValue(e);
    }

    const iconsArray = [
        <Export key={1} />, <Import key={2} />, <Filter key={3} />, <News key={4} />, <Export key={1} />, <Import key={2} />, <Filter key={3} />, <Export key={1} />, <Import key={2} />, <Filter key={3} />
    ];


    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth <= 450) {
                setIsMobileView(true);
            }
            else {
                setIsMobileView(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };


    }, []);






    return (
        <>
             <BaseLayout>

            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Property Bar</h5>

            <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
                <div className="">

                    <PropertyBar
                        tabs={tabs}
                        visibleTab={2}
                        getValue={(e) => { setValue(e) }}
                        icons={iconsInfo}
                    />
                </div>
            </div>

            <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h2 className="m-5 text-xl   tracking-tight text-gray-900 dark:text-white">Row select</h2>
                <div className="overflow-x-auto ">

                    <PropertyBar variant="selectedRows" count={10} getValue={values} tableBarIcons={iconsArray} message="shift+click to select, esc to deselect all" />
                </div>
            </div>

            <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <h2 className="m-5 text-xl   tracking-tight text-gray-900 dark:text-white"></h2>
                <div className="overflow-x-auto ">

                    <DataTable
                        columns={columns}
                        data={dataList.length > 0 ? classListData : []}
                        hoverEffect={true}
                    />
                    <div className={`fixed bottom-5 left-0 w-full bg-white transition-transform duration-300 transform ${selectedRowCount > 0 ? 'translate-y-0' : 'translate-y-20'}`}>
                        {selectedRowCount > 0 && isMobileView ? (
                            <>
                                <PropertyDrawer
                                    isOpen={isOpen}
                                    counts={selectedRowCount}
                                    onClose={closeDrawer}
                                    items={itemList}
                                    icons={iconList}
                                />
                            </>
                        ) : (


                            selectedRowCount > 0 && (
                                <PropertyBar
                                    variant="selectedRows"
                                    count={selectedRowCount}
                                    getValue={values}
                                    tableBarIcons={iconsArray}
                                    message="shift+click to select, esc to deselect all"
                                />
                            )

                        )}
                    </div>
                </div>
            </div>

            </BaseLayout>
        </>
    );
};

export default page;