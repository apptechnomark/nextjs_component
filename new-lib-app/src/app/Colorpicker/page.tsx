"use client"

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import { ColorPicker } from "next-ts-lib";
import "next-ts-lib/dist/index.css";

const ColorPickerComponent: React.FC = () => {
    const [colorName, setColorName] = useState<string>("");

    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Color Picker
            </h5>
            <div className="p-2 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">
                    Basic
                </h2>
                <div className="pb-4 pl-7">
                    <ColorPicker
                        value={colorName}
                        onChange={(e:any) => {
                            setColorName(e);
                        }}
                    />
                </div>
            </div>
        </BaseLayout>
    );
};

export default ColorPickerComponent;
