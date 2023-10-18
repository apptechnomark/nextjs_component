import { Button } from "../Button/Button";
import { Close } from "../Closebutton/Close";
import Typography from "../Typography/Typography";
import React, { useEffect, useState } from "react";
import NegativeSignIcon from "./icons/NegativeSignIcon";
import RightArrowIcon from "./icons/RightArrow";

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: string[];
    icons: React.ReactNode[];
    counts?: number;
    onOpenModal?: () => void;
}

const PropertyDrawer: React.FC<DrawerProps> = ({
    isOpen,
    onClose,
    items,
    icons,
    counts,
    onOpenModal,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div
            className={` fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[1px] z-50`}
        >
            <div
                className={`fixed overflow-scroll h-[450px] bottom-0 w-full transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-full"
                    } bg-pureWhite`}
            >
                <div className="flex justify-between items-center w-full h-[72px] py-2 px-5 border-b-[1px] border-[#D8D8D8]">
                    <div>
                        <NegativeSignIcon />
                    </div>
                    <div className="flex flex-col">

                        <Typography type="h5">{counts} task Selected</Typography>
                        <Typography className="italic text-[#6E6D7A]">
                            click on - button to select more
                        </Typography>
                    </div>
                    <div onClick={onClose}>
                        <Close variant="small" />
                    </div>
                </div>
                <div className="p-4">
                    <ul className="">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={`flex w-full justify-between items-center ${index === items.length - 1
                                    ? ""
                                    : "border-b-[1px] border-[#D8D8D8]"
                                    }`}
                            >
                                <div className="flex py-4 flex-grow ">
                                    <span className=" flex items-center justify-center">
                                        {icons[index]}
                                    </span>
                                    <Typography type="h6" className="ml-5">
                                        {item}
                                    </Typography>
                                </div>
                                <span className="flex ">
                                    <RightArrowIcon onClick={onOpenModal} />
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-5 border-t-[1px] border-[#D8D8D8]">
                        <Button
                            className="rounded-md btn-md !w-full"
                            variant="btn-outline-primary"
                            onClick={onClose}
                        >
                            Submit Task
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PropertyDrawer };
