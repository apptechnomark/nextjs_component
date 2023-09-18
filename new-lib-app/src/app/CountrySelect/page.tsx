"use client";

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { CountrySelect } from "next-ts-lib";
import "next-ts-lib/dist/index.css"

const Countryselect: React.FC = () => {
    const [phone, setPhone] = useState<string>("");
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [phoneHasError, setPhoneHasError] = useState<boolean>(false);

    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Country Select Dropdown</h5>

        <div className="p-4 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h2 className="m-5 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
            <CountrySelect
                validate
                required
                label='label'
                getValue={(e: any) => setPhone(e)}
                getError={(err: any) => setPhoneHasError(err)}
                hasError={phoneError} />
        </div>
    </BaseLayout>;
};

export default Countryselect;