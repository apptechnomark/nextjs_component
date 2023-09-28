"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { MenuIcon } from "next-ts-lib"
import "next-ts-lib/dist/index.css"

const MenuIcons: React.FC = () => {
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [phoneHasError, setPhoneHasError] = useState<boolean>(false);

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Menu Icon</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Kebab Icon</h2>
            <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <MenuIcon size="small" direction="kebab" classname={"h-full"} />
                <MenuIcon size="medium" direction="kebab" classname={"h-full"} />
                <MenuIcon size="large" direction="kebab" classname={"h-full"} />
            </div>
        </div>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Meat Ball</h2>
            <div className="pt-3 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <MenuIcon size="small" direction="meatball" classname={"w-full"} />
                <MenuIcon size="medium" direction="meatball" classname={"w-full"} />
                <MenuIcon size="large" direction="meatball" classname={"w-full"} />
            </div>
        </div>
    </BaseLayout>;
};

export default MenuIcons;