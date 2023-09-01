"use client"

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { Tel } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const TelComponent: React.FC = () => {
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState(false);
    const [phoneHasError, setPhoneHasError] = useState(false);

    return (
        <>
            <BaseLayout>
                <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Phonenumber with Country Code
                </h5>
                <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                        Basic
                    </h2>
                    <div className="flex items-center h-20 ml-7 flex-col">
                        <Tel
                            label="Telephone"
                            validate
                            required
                            value={phone}
                            getValue={(e: any) => setPhone(e.slice(4))}
                            getError={(err: any) => setPhoneHasError(err)}
                            hasError={phoneError}
                            countryCode
                        />
                    </div>
                </div>
            </BaseLayout>

        </>
    );
};

export default TelComponent;
