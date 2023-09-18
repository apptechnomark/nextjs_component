"use client";

import React from "react";
import BaseLayout from "../../components/BaseLayout";
import Image from "next/image";
import Technomark from "./Technomark.png"
import Start from "./Start"
import { Card, CardAction, CardContent, CardHeader, Button, Avatar } from "next-ts-lib";
import "next-ts-lib/dist/index.css"


const card: React.FC = () => {
    return <BaseLayout>
        <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Card</h5>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card>
                <CardHeader>
                    <Avatar
                        name="Technomark"
                    />
                    <div className="ml-2">
                        <div className="text-xl font-semibold">Technomark Libraries</div>
                        <div className="text-gray-500 text-sm">September 14, 2023</div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Image src={Technomark} alt="" width={360}
                        height={170} />
                    <CardHeader>
                        <div className="ml-2">
                            <div className="text-lg font-semibold">Technomark Libraries</div>
                            <div className="text-gray-500 text-sm">September 14, 2023</div>
                        </div>
                    </CardHeader>
                    <div className="ml-2">
                        <span>
                            TechnoMark is a team of exceptionally talented people set to revolutionize modern-day technology. We are your preferred partners for Software, Web, mobile app, and E-commerce Development Services.
                        </span>
                    </div>
                </CardContent>
                <CardAction>
                    <Button className="rounded-full mr-2">
                        Enabled
                    </Button>
                    <Button className="rounded-md" variant="btn-primary">
                        Enabled
                    </Button>
                </CardAction>
            </Card>
        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card>
                <CardHeader>
                    <Avatar
                        name="Technomark"
                    />
                    <div className="ml-1">
                        <div className="text-lg font-semibold">Technomark Libraries</div>
                        <div className="text-gray-500 text-sm">September 14, 2023</div>
                    </div>
                    <Image
                        src={Technomark}
                        width={80}
                        height={80}
                        alt="Picture"
                    />
                </CardHeader>
            </Card>
        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width:"197px" }}>
                <CardHeader>
                    <div className="block">
                        <div className="ml-1">
                            <Start />
                        </div>
                        <div className="ml-2 my-2">
                            <span>
                                Revenue
                            </span>
                        </div>
                        <div className="ml-2 ">
                            <span>
                                $ 3,393.95
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    </BaseLayout>;
};

export default card;