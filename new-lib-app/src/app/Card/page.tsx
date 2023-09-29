"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import Image from "next/image";
import Technomark from "./Technomark.png"
import Starbuck from "./starbuck_avtar.png"
import Start from "./icons/Start"
import ApIcon from "./icons/ApIcon"
import Badge from "./icons/Badge"
import Play from "./icons/play"
import Stop from "./icons/stop"
import ActionIcon from "./icons/ActionIcon"
import TaskIcon from "./icons/TaskIcon"
import Company from "./icons/Company"
import Done from "./icons/Done"
import Loader from "./icons/Loader"
import CompanLogo from "./icons/companyLogo"
import { Card, CardAction, CardContent, CardHeader, Button, Avatar, CheckBox, Radio, Select, AvatarGroup } from "next-ts-lib";
import "next-ts-lib/dist/index.css"
import "./card.scss"


const options = [
    { label: "Task 1", value: "Task 1" },
    { label: "Task 2", value: "Task 2" },
    { label: "Task 3", value: "Task 3" },
];

const card: React.FC = () => {
    const [optionId, setOptionId] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState("00:00");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    const handleStopClick = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined; // Initialize as undefined
        if (isPlaying) {
            let seconds = 0;
            interval = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const remainderSeconds = seconds % 60;
                const formattedTime = `${minutes.toString().padStart(2, "0")}:${remainderSeconds.toString().padStart(2, "0")}`;
                setTime(formattedTime);
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isPlaying]);

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
            <Card style={{ width: "197px" }}>
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

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width: "250px" }}>
                <CardHeader>
                    <div className="block w-[250px]">
                        <div className="inline relative">
                            <div className="ml-1">
                                <Start />
                            </div>
                            <div className="absolute top-0 right-[0px]">
                                <ActionIcon />
                            </div>
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

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width: "350px" }}>
                <CardHeader>
                    <div className="relative h-[80px]">
                        <div className="absolute top-6">
                            <Start />
                        </div>
                        <div className="absolute top-3 left-[30px]">
                            <span>
                                Revanue
                            </span>
                        </div>
                        <div className="absolute top-11 left-[30px]">
                            <span>
                                $3,393.95
                            </span>
                        </div>
                        <div className="absolute top-6 left-[280px]">
                            <ActionIcon />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>



        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width: "350px", height: "140px" }}>
                <CardHeader>
                    <div className="block relative w-full">
                        <div className="mr-1 absolute right-0 top-2">
                            <CheckBox id="Checked" />
                        </div>
                        <div className="absolute left-[146px] top-4">
                            <span>
                                <ApIcon />
                            </span>
                        </div>
                        <div className="absolute top-[68px] left-[100px]">
                            <span>
                                Accounts Payable
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>



        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card className="Account-payable" style={{ width: "350px", height: "140px" }}>
                <CardHeader>
                    <div className="block relative w-full">
                        <div className="mr-1 absolute  top-2">
                            <Radio id="Radio_Checked1" />
                        </div>
                        <div className="absolute left-[146px] top-4">
                            <span>
                                <ApIcon />
                            </span>
                        </div>
                        <div className="absolute top-[68px] left-[100px]">
                            <span>
                                Accounts Payable
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card className="border border-[#00ACE2]" style={{ width: "350px" }}>
                <CardHeader>
                    <div className="relative h-[80px] w-[100%]">
                        <div className="absolute top-6">
                            <Done />
                        </div>
                        <div className="absolute top-3 left-[50px]">
                            <span>
                                Total Task Created
                            </span>
                        </div>
                        <div className="vertical w-[2px] h-[25px] bg-[#D8D8D8] absolute left-[35px] top-[25px]"></div>
                        <div className="absolute top-11 left-[50px]">
                            <span className="font-semibold tracking-wide">
                                285
                            </span>
                        </div>

                    </div>
                </CardHeader>
            </Card>
        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card className="border border-[#FD7E14]" style={{ width: "350px" }}>
                <CardHeader>
                    <div className="relative h-[80px] w-[100%]">
                        <div className="absolute top-6">
                            <Loader />
                        </div>
                        <div className="absolute top-3 left-[50px]">
                            <span>
                                In Progress Work
                            </span>
                        </div>
                        <div className="vertical w-[2px] h-[25px] bg-[#D8D8D8] absolute left-[35px] top-[25px]"></div>
                        <div className="absolute top-11 left-[50px]">
                            <span className="font-semibold tracking-wide">
                                3918
                            </span>
                        </div>

                    </div>
                </CardHeader>
            </Card>
        </div>

        <div className="p-2   m-3 bg-[#DADADA] border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Card variant="square" style={{ width: "350px" }} className="group cursor-pointer">
                <CardHeader>
                    <div className="relative">
                        <div className="inline-block">
                            <Start />
                        </div>
                        <div className="inline-block ml-3 mb-2">
                            <span>Revenue</span>
                        </div>
                        <div className="inline-block ml-[110px]">
                            $3,393.95
                        </div>
                        <div className="absolute top-[6px] inline-block ml-[10px]">
                            <ActionIcon />
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div >


        <div className="p-2   m-3 bg-[#DADADA] border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Card variant="square" style={{ width: "350px" }} className="group cursor-pointer">
                <CardHeader>
                    <div>
                        <div className="inline-block">
                            <Start />
                        </div>
                        <div className="inline-block ml-3 mb-2">
                            <span>Revenue</span>
                        </div>
                        <div className="inline-block ml-[130px]">
                            $3,393.95
                        </div>
                    </div>
                </CardHeader>
                <div className="bg-[#D8D8D8] group-hover:transition-width group-hover:bg-[#02B89D]  group-hover:duration-[300ms] group-hover:ease-in bottom-0 h-[5px] w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-[5px] before:bg-[#02B89D] before:transition-width before:duration-[800ms] before:ease-in  group-hover:w-full"></div>
            </Card>
        </div >

        <div className="p-2   m-3 bg-[#DADADA] border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 ">
            <Card variant="square" style={{ width: "350px" }} className="group cursor-pointer">
                <CardHeader>
                    <div className="relative">
                        <div className="inline-block">
                            <Start />
                        </div>
                        <div className="inline-block ml-3 mb-2">
                            <span>Revenue</span>
                        </div>
                        <div className="inline-block ml-[110px]">
                            $3,393.95
                        </div>
                        <div className="absolute top-[6px] inline-block ml-[10px]">
                            <ActionIcon />
                        </div>
                    </div>
                </CardHeader>
                <div className="bg-[#D8D8D8] group-hover:transition-width group-hover:bg-[#02B89D]  group-hover:duration-[300ms] group-hover:ease-in bottom-0 h-[5px] w-full relative before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-[5px] before:bg-[#02B89D] before:transition-width before:duration-[800ms] before:ease-in  group-hover:w-full"></div>
            </Card>
        </div >

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width: "350px", height: "140px" }}>
                <CardHeader>
                    <div className="block relative w-full">
                        <div className="mr-1 absolute right-0 top-2">
                            <Radio id="Radio_Checked" />
                        </div>
                        <div className="absolute left-[146px] top-4">
                            <span>
                                <ApIcon />
                            </span>
                        </div>
                        <div className="absolute top-[68px] left-[100px]">
                            <span>
                                Accounts Payable
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>

        <div className="p-5  m-3 bg-[#DADADA] border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
            <Card className="my-card">
                <CardHeader>
                    <div className="flex flex-col justify-between items-start relative w-full  ">
                        <div className="mr-1 relative  top-2">
                            <Radio id="Radio_Checked2" />
                        </div>
                        <div className="absolute top-[70px] left-[120px]">
                            <span>
                                <Company />
                            </span>
                        </div>
                        <div className="absolute top-[180px] font-bold left-[85px]">
                            <span>
                                View a demo company
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>

        </div>

        <div className="p-5  m-3 bg-[#DADADA] border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " >
            <Card className="my-card">
                <CardHeader>
                    <div className="flex flex-col justify-between items-start relative w-full  ">
                        <div className="mr-1 relative  top-2">
                            <CheckBox id="checkbox_Checked2" />
                        </div>
                        <div className="absolute top-[70px] left-[120px]">
                            <span>
                                <Company />
                            </span>
                        </div>
                        <div className="absolute top-[180px] font-bold left-[85px]">
                            <span>
                                View a demo company
                            </span>
                        </div>
                    </div>
                </CardHeader>
            </Card>

        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card style={{ width: "345px" }}>
                <CardHeader>
                    <div className="relative w-full">
                        <span className="font-bold">Title</span>
                        <div className="inline-block ml-4">
                            <Badge />
                        </div>
                        <div className="inline-block absolute right-0">
                            <ActionIcon />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="ml-2 mt-1 flex mb-2">
                        <TaskIcon />
                        <div >
                            <Select
                                id="basic"
                                type="icons"
                                options={options}
                                validate
                                search
                                defaultValue={optionId}
                                getValue={(value: any) => setOptionId(value)}
                                getError={() => { }} />
                        </div>
                    </div>

                    <hr className="border-t-[1px] border-[#D8D8D8]" />

                    <div className="p-1 relative flex justify-between">
                        <div className="relative right-[14px]">
                            {isPlaying ? (

                                <Button
                                    className="rounded-md cursor-pointer"
                                    onClick={handleStopClick}
                                >

                                    <Stop />
                                </Button>
                            ) : (
                                <Button
                                    className="rounded-full mr-2 cursor-pointer"
                                    onClick={handlePlayClick}
                                >
                                    <Play />
                                </Button>
                            )}
                            {isPlaying ? (
                                <> <span className="absolute top-[8px] left-[50px] border-b-2 border-[#FB2424]">{time}</span></>
                            ) : (
                                <>
                                    <span className="absolute top-[8px] left-[50px] border-b-2 border-[#02B89D]">{time}</span></>
                            )}
                        </div>
                        <span className="absolute  top-[13px] right-[50px]">{date}</span>
                        <AvatarGroup > <Avatar variant="small" name="Technomark"></Avatar>
                            <Avatar variant="small" name="Pathquest"></Avatar></AvatarGroup>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="p-2  m-3 bg-[#DADADA] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Card variant="square" style={{ width: "345px" }}>
                <CardHeader>
                    <div className="relative w-full">
                        <div className="w-[50px]">
                            <Image src={Starbuck} alt="" width={40}
                                height={40} />
                        </div>
                        <div className=" absolute top-[10px] right-[32px] inline-block ml-4">
                            <CompanLogo />
                        </div>
                        <div className="inline-block absolute right-0 top-[10px]">
                            <ActionIcon />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="ml-2 mt-1 flex mb-2">
                        <span className="font-semibold text-[#333333]">Pereira Hawaii (Oahu)...</span>

                    </div>
                    <div className="ml-2 mt-1 flex mb-2">
                        <span className="font-normal text-[14px] text-[#6E6D7A]">Last updated on Aug 11, 2020
                            at <br />12:30:00</span>

                    </div>


                    <div className="p-1 relative flex justify-between">
                        <AvatarGroup > <Avatar variant="small" name="Technomark"></Avatar>
                            <Avatar variant="small" name="Pathquest"></Avatar>
                            <Avatar variant="small" name="Pacific"></Avatar>
                            <Avatar variant="small" name="Devloper"></Avatar>
                        </AvatarGroup>
                    </div>
                </CardContent>
            </Card>
        </div>
    </BaseLayout >;
};

export default card;