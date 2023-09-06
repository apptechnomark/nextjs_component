"use client";
import React, { useState } from 'react'
import { Password } from 'next-ts-lib'
import BaseLayout from "../../components/BaseLayout"
import "next-ts-lib/dist/index.css"

export default function password() {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHasNoError, setPasswordHasNoError] = useState(false);
    
    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Password</h5>
            <div className="p-2 h-[350px] m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl  tracking-tight text-gray-900 dark:text-white">Basic</h2>
                <div className="pt-28 pl-8 mb-5 gap-8">
                    <Password
                        label="Password"
                        name="password"
                        validate
                        getValue={(e: any) => setPassword(e)}
                        getError={(e: any) => setPasswordHasNoError(e)}
                        hasError={passwordError}
                    />
                </div>
            </div>
        </BaseLayout>
    )
}
