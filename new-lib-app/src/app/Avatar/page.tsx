"use client";

import React from "react";
import { Avatar, AvatarGroup } from "next-ts-lib";
import "next-ts-lib/dist/index.css"
import BaseLayout from "../../components/BaseLayout"

const avatar = () => {
    return (
        <BaseLayout>
            <h5 className="m-5 pt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Avatar</h5>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic</h2>
                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Avatar 
                        variant="small" />
                    <Avatar 
                        name="John Doe"
                    />
                    <Avatar name="John Doe"
                        variant="large" />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Basic with Badge</h2>
                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <Avatar
                        name="John Doe"
                        badge
                        variant="small"
                    />
                    <Avatar
                        name="John Doe"
                        badge
                        badgeText="999999"
                    />
                    <Avatar
                        name="John Doe"
                        badge
                        variant="large"
                    />
                </div>
            </div>
            <div className="p-2  m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h2 className="m-7 text-xl tracking-tight text-gray-900 dark:text-white">Avatar Group</h2>
                <div className="pt-3 pl-4 mb-5 gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <AvatarGroup>
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Jane Doe"
                        />
                        <Avatar
                        />
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Bob"
                        />
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Jane Doe"
                        />
                        <Avatar
                            name="HD"
                        />
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Bob"
                        />
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Jane Doe"
                        />
                        <Avatar
                            name="HD"
                        />
                        <Avatar
                            imageUrl="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            name="Bob"
                        />
                    </AvatarGroup>
                </div>
            </div>

        </BaseLayout>

    );
};

export default avatar;
