"use client";

import { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { CheckBox, Switch, Table } from "next-ts-lib";
import "next-ts-lib/dist/index.css"
import AcceptIcon from "./icons/AcceptIcon";

export default function Home() {
  const [dummyData, setDummyData] = useState("");

  console.log(dummyData);
  if (dummyData === "Add") {

  }


  // const headers = [
  //   { heading: "ID", field: "id", sort: true },
  //   { heading: "Name", field: "name", sort: true },
  //   { heading: "Age", field: "age", sort: true },
  // ];

  const headers = [
    {
      heading: "Module",
      field: "module",
      sort: false,
    },
    {
      heading: "View",
      field: "view",
      sort: false,
    },
    {
      heading: "Edit",
      field: "edit",
      sort: false,

    },
    {
      heading: "Create",
      field: "create",
      sort: false,

    },
    {
      heading: "Import",
      field: "import",
      sort: false,

    },
    {
      heading: "Sync",
      field: "Viggew",
      sort: false,
    },
  ];

  const Alvish = [
    {
      userId: 1,
      module: "Common",
      children:
        [
          {
            userID: "Vendor",
            view: <Switch />,
            Edit: <CheckBox id={""} />,
            Create: <CheckBox id={""} />,
            import: <CheckBox id={""} />,
            Sync: <CheckBox id={""} />,
          },
          {
            id: "Documents",
            view: <CheckBox id={""} />,
            Edit: "",
            Create: <CheckBox id={""} />,
            import: "",
            Sync: "",
          }
        ]
    },
    { id: 2, module: "Purchase Order", view: <CheckBox id={"v1"} />, edit: <CheckBox id={"e1"} />, create: <CheckBox id={"c1"} /> },
    { module: "Bill Posting", view: <CheckBox id={"v2"} />, edit: <CheckBox id={"e2"} />, create: <CheckBox id={"c2"} />, import: <CheckBox id={"i1"} /> },
    {
      module: "Approval", children: [
        {
          id: "Bill Approval",
          view: <CheckBox id={""} />,
          Edit: "",
          Create: "",
          import: "",
          Sync: "",
        },
        {
          id: "Payment Approval",
          view: <CheckBox id={""} />,
          Edit: "",
          Create: "",
          import: "",
          Sync: "",
        },
        {
          id: "Purchase Approval",
          view: <CheckBox id={""} />,
          Edit: "",
          Create: "",
          import: "",
          Sync: "",
        }
      ]
    },
    { module: "Automation", view: <CheckBox id={"v3"} />, edit: <CheckBox id={"e3"} />, create: <CheckBox id={"c3"} /> },
    { module: "Master Configuration" },
    { module: "Notification", view: <CheckBox id={"v4"} />, edit: <CheckBox id={"e4"} /> },
    { module: "Cloud Configuration", view: <CheckBox id={"v5"} />, edit: <CheckBox id={"e5"} /> },
    { module: "Rights Management" },
    { module: "Payments" },
    {
      module: "Reports", children: [{
        Alvish: "Bill Analysis",
      }, {
        id: "Vendor Aging",


      }]
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     age: 30,
  //     mihir: [
  //       {
  //         id: 11,
  //         childName: "Child",
  //         childAge: 5,

  //       },]

  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     age: 25,
  //     // If there is only one child, it can still be represented as an object
  //     mihir: [
  //       {
  //         id: 12,
  //         childName: "Child 2",
  //         childAge: 8,

  //       },

  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Jane Smith",
  //     age: 25,
  //     // If there is only one child, it can still be represented as an object
  //     mihir: [
  //       {
  //         id: 13,
  //         childName: "Child 2",
  //         childAge: 8,

  //       },
  //     ],
  //   },
  // ];
  const actionButtons = (
    <span className="flex justify-center items-center cursor-pointer">
      <AcceptIcon />
    </span>
  );
  const actions = [
    actionButtons
  ];


  // const dummy = {
  //     thumbnail: (item: any) => <Switch checked />,
  //     status:(item: any) => <Switch checked />,
  // }

  const actionarry = [
    "Add", "Update", "Delete"
  ]

  // if (!data || data.length === 0) {
  //   return <div>No data available.</div>; // Render a message or loading state
  // }

  return (
    <>
      <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Table
        </h5>
        <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
            Basic
          </h2>
          <div className="h-auto ml-7">

      <Table
        data={Alvish}
        headers={headers}
        actions={actions}
        getRowId={(data: any) => {
          console.log(data);

        }}
        // JsxComponents={dummy}
        actionDesc={actionarry}
        getAction={setDummyData}
        // actionSticky
        // expandableHeading ={false}
        expandable
        sticky={true}
        sortable
        action
      // selected
      />


      </div>
        </div>
      </BaseLayout>
    </>
  );
}




