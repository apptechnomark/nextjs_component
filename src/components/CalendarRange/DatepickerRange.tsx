import { generateDate, months } from "./utils/datepickerUtility";
import React, { useEffect, useState, useRef } from "react";
import style from "./scss/Datepicker.module.scss";
import ChevronLeftIcon from "./icons/ChevronLeft.js";
import CalendarIcon from "./icons/CalendarIcon.js";
import Typography from "../Typography/Typography";
import "../Typography/Typography.module.scss";

interface DatepickerDate {
    date: Date;
    currentMonth: boolean;
    today: boolean;
}

interface DatepickerProps {
    startYear: number;
    endYear: number;
    value: string;
    id: string;
    label?: string,
    className?: string,
    hasError?: boolean,
    errorMessage?: string;
    getValue: (value: any) => void;
    getError: (arg1: boolean) => void;
    validate?: boolean;
    disabled?: boolean;
}

const DatepickerRange: React.FC<DatepickerProps> = ({
    value,
    startYear,
    endYear,
    label,
    validate,
    disabled,
    hasError,
    errorMessage = "This is required field!",
    getValue,
    getError,
    ...props }) => {
    const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const currentDate: Date = new Date();
    const inputRef = useRef(null);

    const [today, setToday] = useState<Date>(currentDate);
    const [showMonthList, setShowMonthList] = useState<boolean>(false);
    const [showYearList, setShowYearList] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date>(
        currentDate
    );
    const [fullDate, setFullDate] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [toggleOpen, setToggleOpen] = useState<boolean>(false);
    const [animate, setAnimate] = useState<string>("");

    let dateParts = value.split(" to ");
    let startDateString = dateParts[0];
    let endDateString = dateParts[1];

    const [startDate, setStartDate] = useState<Date | null>(new Date(startDateString));
    const [endDate, setEndDate] = useState<Date | null>(new Date(endDateString));
    const [rangeDates, setRangeDates] = useState<Date[]>([]);
    const [startDates, setStartDates] = useState<string>(startDateString);
    const [endDates, setEndDates] = useState<string>(endDateString);


    const currentMonth = today.getMonth();
    const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);

    const currentYear = today.getFullYear();
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);

    const yearsPerPage: number = 16;
    const totalPages: number = Math.ceil(
        (endYear - startYear + 1) / yearsPerPage
    );
    const startIndex: number = (currentPage - 1) * yearsPerPage;
    const displayedYears: number[] = Array.from(
        { length: yearsPerPage },
        (_, index) => {
            const year = startYear + startIndex + index;
            return year <= endYear ? year : null;
        }
    ).filter((year) => year !== null);

    const toggleMonthList = () => {
        setAnimate("");
        setShowMonthList(!showMonthList);
    };
    const selectMonth = (month: number) => {
        setAnimate(style.slideRightAnimation);
        const newDate = new Date(today);
        newDate.setMonth(month);
        setToday(newDate);
        setShowMonthList(false);
        setSelectedMonth(month);
        selectedMonth ? setAnimate(style.slideRightAnimation) : setAnimate("");
    };

    const toggleYearList = () => {
        setShowYearList(true);
        setAnimate("");
        if (!showYearList && !showMonthList) {
            setCurrentPage(Math.ceil((selectedYear - startYear + 1) / yearsPerPage));
        } else {
            setShowMonthList(false);
        }
    };
    const selectYear = (year: number) => {
        const newDate = new Date(today);
        newDate.setFullYear(year);
        setToday(newDate);
        setShowYearList(false);
        setSelectedYear(year);
        setTimeout(() => {
            setShowMonthList(true);
            setAnimate("");
        }, 0);
    };

    // const handleDateClick = (date: Date) => {
    //     const newDate = new Date(date);
    //     setToday(newDate);
    //     setSelectedDate(date);

    //     if (startDate == null) {
    //         setStartDate(date);
    //         setEndDate(null);
    //         newDate.setDate(date.getDate() + 1);
    //         const formattedDate = newDate.toISOString().slice(0, 10).split("-");
    //         const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;
    //         setStartDates(updatedDate);
    //     } else if (endDate == null) {
    //         newDate.setDate(date.getDate() + 1);
    //         const formattedDate = newDate.toISOString().slice(0, 10).split("-");
    //         const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;
    //         // setToggleOpen(false);
    //         setEndDates(updatedDate);
    //         if (date > startDate) {
    //             setEndDate(date);
    //         } else {
    //             setEndDate(startDate);
    //             setStartDate(date);
    //         }
    //     } else {
    //         setStartDate(date);
    //         setEndDate(null);
    //         newDate.setDate(date.getDate() + 1);
    //         const formattedDate = newDate.toISOString().slice(0, 10).split("-");
    //         const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;
    //         setStartDates(updatedDate);
    //     }

    //     if (date.getMonth() < selectedMonth) {
    //         handleIconClick(false);
    //     }
    //     if (date.getMonth() > selectedMonth) {
    //         handleIconClick(true);
    //     }
    //     setAnimate("");
    //     setRangeDates([]);
    // };

    const handleDateClick = (date: Date) => {
        const newDate = new Date(date);
        setToday(newDate);
        setSelectedDate(date);

        if (startDate == null) {
            setStartDate(date);
            setEndDate(null);
            newDate.setDate(date.getDate() + 1);
            const formattedDate = newDate.toISOString().slice(0, 10).split("-");
            const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;
            setStartDates(updatedDate);
        }
        else if (endDate == null) {
            newDate.setDate(date.getDate() + 1);
            const formattedDate = newDate.toISOString().slice(0, 10).split("-");
            const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;

            if (date > startDate) {
                setEndDates(updatedDate);
                setEndDate(date);
            } else {
                setStartDate(date);
                setStartDates(updatedDate);
            }
            setToggleOpen(false);
        } else {

            setStartDate(date);
            setEndDate(null);
            newDate.setDate(date.getDate() + 1);
            const formattedDate = newDate.toISOString().slice(0, 10).split("-");
            const updatedDate = `${formattedDate[0]}-${formattedDate[1]}-${formattedDate[2]}`;
            setStartDates(updatedDate);
        }

        if (date.getMonth() < selectedMonth) {
            handleIconClick(false);
        }
        if (date.getMonth() > selectedMonth) {
            handleIconClick(true);
        }
        setAnimate("");
        setRangeDates([]);
    };

    const handleDateHover = (date: Date) => {
        if (startDate && !endDate) {
            const rangeDates = [];
            let current = new Date(startDate);
            while (current < date) {
                current.setDate(current.getDate() + 1);
                rangeDates.push(new Date(current));
            }
            // while (current > date) {
            //     current.setDate(current.getDate() - 1);
            //     rangeDates.push(new Date(current));
            // }
            setRangeDates(rangeDates);
        }
    };
    const handleMouseOut = () => {
        setRangeDates([]);
    };

    const goToNextPage = () => {
        currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
    };

    const goToPreviousPage = () => {
        currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
    };

    const calendarShow = () => {
        setToggleOpen(true);
    };

    const handleIconClick = (isNextMonth: boolean) => {
        const newDate = new Date(today);
        const year = newDate.getFullYear();
        if (isNextMonth) {
            const month = newDate.getMonth() + 1;
            newDate.setMonth(newDate.getMonth() + 1);
            setSelectedMonth(month);
        } else {
            const month = newDate.getMonth() - 1;
            newDate.setMonth(newDate.getMonth() - 1);
            setSelectedMonth(month);
        }
        setSelectedYear(year);
        setToday(newDate);
        setAnimate(
            isNextMonth ? style.slideRightAnimation : style.slideLeftAnimation
        );
        setTimeout(() => {
            setAnimate("");
        }, 100);
    };

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            const target = event.target;
            const isInputClick =
                inputRef.current && inputRef.current.contains(target);
            const isCalendarClick = target.closest(".bottomAnimation");
            if (!isInputClick && !isCalendarClick) {
                setToggleOpen(false);
            }
        };
        const handleMouseDown = (event: any) => {
            setTimeout(() => {
                handleOutsideClick(event);
            }, 0);
        };
        document.addEventListener("mousedown", handleMouseDown);
        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    const updateFromInput = (inputValue: string) => {
        const inputDate = new Date(inputValue);
        if (
            !isNaN(inputDate.getTime()) &&
            inputDate.getFullYear().toString().length == 4
        ) {
            const formattedDate = inputDate.toISOString().slice(0, 10);
            setToggleOpen(true);
            setToday(inputDate);
            setSelectedDate(inputDate);
            setSelectedMonth(inputDate.getMonth());
            setSelectedYear(inputDate.getFullYear());
            setFullDate(formattedDate);
        } else {
            setToggleOpen(false);
        }
    };

    useEffect(() => {
        getValue(startDates + " to " + endDates);
    }, [startDates, endDates]);

    return (
        <>
            <div
                className={`flex w-full before:absolute before:bottom-0 before:left-0 before:block before:w-0 before:h-px before:bg-primary before:transition-width before:duration-[800ms] before:ease-in hover:before:w-full`}
                ref={inputRef}
            >
                <div className="flex w-full relative">
                    <input
                        type="date"
                        className={`peer block min-h-[auto] pl-1 w-full border-b bg-transparent px-3 py-[0.32rem] border-lightSilver outline-none`}
                        onClick={calendarShow}
                        defaultValue={startDates}
                        onChange={(e: any) => updateFromInput(e.target.value)}
                    />
                    <span
                        className="absolute right-2 top-2.5 cursor-pointer"
                        onClick={calendarShow}
                    >
                        <CalendarIcon />
                    </span>
                </div>
                <div className="flex w-full relative">
                    <input
                        type="date"
                        className={`peer block min-h-[auto] pl-1 w-full border-b bg-transparent px-3 py-[0.32rem] border-lightSilver outline-none`}
                        onClick={calendarShow}
                        defaultValue={endDates}
                        onChange={(e: any) => updateFromInput(e.target.value)}
                    />
                    <span
                        className="absolute right-2 top-2.5 cursor-pointer"
                        onClick={calendarShow}
                    >
                        <CalendarIcon />
                    </span>
                </div>
            </div>
            {toggleOpen && (
                <div className="relative">
                    <div
                        className={`bottomAnimation absolute z-20  bg-white ${toggleOpen ? style.bottomAnimation : ""
                            }`}
                    >
                        <div className="flex mx-auto items-center">
                            <div className="shadow-md overflow-hidden">
                                <div className="flex justify-between border-b-2 border-lightSilver py-[12px] px-[12px]">
                                    <div
                                        className={`flex flex-row  ${showYearList ? "" : animate}`}
                                    >
                                        {showMonthList === true ? (
                                            ""
                                        ) : showYearList === true ? (
                                            ""
                                        ) : (
                                            <h1
                                                className="proxima text-[14px] font-semibold cursor-pointer text-slatyBlue"
                                                onClick={toggleMonthList}
                                            >
                                                {months[currentMonth]}
                                            </h1>
                                        )}
                                        {showYearList === true && showMonthList === false ? (
                                            <h1 className="proxima text-[14px] font-semibold ml-1 text-slatyBlue">
                                                {displayedYears[0] +
                                                    " - " +
                                                    displayedYears[displayedYears.length - 1]}
                                            </h1>
                                        ) : (
                                            <h1
                                                className={`proxima text-[14px] font-semibold ml-1 cursor-pointer text-slatyBlue`}
                                                onClick={toggleYearList}
                                            >
                                                {currentYear}
                                            </h1>
                                        )}
                                    </div>
                                    <div className={`flex items-center gap-5`}>
                                        {showYearList === false ? (
                                            <>
                                                <div
                                                    className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ${showMonthList ? "hidden" : ""
                                                        } text-[20px]`}
                                                    onClick={() => handleIconClick(false)}
                                                >
                                                    <ChevronLeftIcon />
                                                </div>
                                                <div
                                                    className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ${showMonthList ? "hidden" : ""
                                                        } rotate-180 text-[20px]`}
                                                    onClick={() => handleIconClick(true)}
                                                >
                                                    <ChevronLeftIcon />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {currentPage <= totalPages && (
                                                    <>
                                                        <div
                                                            className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ${currentPage === 1
                                                                ? "opacity-40 pointer-events-none"
                                                                : ""
                                                                } text-[20px]`}
                                                            onClick={() => {
                                                                if (currentPage === 1) {
                                                                    return;
                                                                }
                                                                goToPreviousPage();
                                                            }}
                                                        >
                                                            <ChevronLeftIcon />
                                                        </div>
                                                        <div
                                                            className={`w-5 h-5 cursor-pointer hover:scale-105 transition-all text-darkGray ${currentPage === totalPages
                                                                ? "opacity-40 pointer-events-none"
                                                                : ""
                                                                } rotate-180 text-[20px]`}
                                                            onClick={() => {
                                                                if (currentPage === totalPages) {
                                                                    return;
                                                                }
                                                                goToNextPage();
                                                            }}
                                                        >
                                                            <ChevronLeftIcon />
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                                {showMonthList === true ? (
                                    <div className="overflow-hidden">
                                        <div className={`${style.topAnimation}  w-full h-full`}>
                                            <div className="grid grid-cols-4 gap-1 place-content-center overflow-hidden proxima">
                                                {months.map((month, index) => (
                                                    <div
                                                        key={index}
                                                        className={`py-5 px-[5.5px] w-full h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer `}
                                                        onClick={() => selectMonth(index)}
                                                    >
                                                        <div
                                                            className={`w-14 h-12 hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ${index === selectedMonth
                                                                ? "bg-lightGreen text-primary"
                                                                : ""
                                                                }`}
                                                        >
                                                            {month.length > 5 ? month.slice(0, 3) : month}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : showYearList === true ? (
                                    <div className="overflow-hidden">
                                        <div className={`${style.topAnimation}`}>
                                            <div className={`${animate}  w-full`}>
                                                <div className="grid grid-cols-4 grid-rows-4 gap-1 place-content-center overflow-hidden proxima">
                                                    {displayedYears.map((year) => (
                                                        <div
                                                            key={year}
                                                            className={`py-2 w-[67px] h-full grid place-content-center text-sm text-textColor proxima relative cursor-pointer`}
                                                            onClick={() => selectYear(year)}
                                                        >
                                                            <div
                                                                className={`py-4 px-3 w-full h-full hover:bg-lightGreen hover:text-primary transition-all duration-200 flex items-center justify-center rounded-md ${year === selectedYear
                                                                    ? "bg-lightGreen text-primary"
                                                                    : ""
                                                                    }`}
                                                            >
                                                                {year}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div
                                            className={`w-full grid grid-cols-7 proxima  ${animate}`}
                                        >
                                            {days.map((day, index) => (
                                                <Typography
                                                    type="h6"
                                                    key={index}
                                                    className="h-14 grid place-content-center"
                                                >
                                                    {day}
                                                </Typography>
                                            ))}
                                        </div>
                                        <div
                                            className={`w-full h-full grid grid-cols-7 ${animate}`}
                                        >
                                            {generateDate(today.getMonth(), today.getFullYear()).map(
                                                (
                                                    { date, currentMonth }: DatepickerDate,
                                                    index: number
                                                ) => {
                                                    const currentDate = new Date(date);
                                                    const isSameDay =
                                                        currentDate.getDate() === selectedDate.getDate() &&
                                                        currentDate.getMonth() === selectedDate.getMonth() &&
                                                        currentDate.getFullYear() === selectedDate.getFullYear();

                                                    const isSelected =
                                                        (startDate && endDate) &&
                                                        currentDate >= startDate &&
                                                        currentDate <= endDate;

                                                    const isStartDate = startDate && currentDate.getTime() === startDate.getTime();
                                                    const isEndDate = endDate && currentDate.getTime() === endDate.getTime();
                                                    const isInRange = rangeDates.some(
                                                        (rangeDate) =>
                                                            currentDate.getTime() === rangeDate.getTime()
                                                    );
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="h-full  w-full grid place-content-center text-sm text-textColor proxima relative "
                                                            onClick={() => handleDateClick(currentDate)}
                                                            onMouseEnter={() => handleDateHover(currentDate)}
                                                            onMouseLeave={handleMouseOut}
                                                        ><Typography
                                                            type="h5"
                                                            className={`h-[40px] w-[40px] m-[2px] grid place-content-center rounded-full cursor-pointer z-10 
                                                                ${currentMonth ? "" : "text-[#cbd5e0]"}
                                                                ${(isSelected && !isStartDate && !isEndDate) && "bg-[#caf1ff] transition-color duration-[700ms] font-semibold"} 
                                                                ${isInRange && "border-dashed border border-primary"}
                                                                ${(isSameDay || isStartDate || isEndDate)
                                                                    ? " bg-primary font-semibold text-white border-none"
                                                                    : (isSelected && !isStartDate && !isEndDate) ? "" : "hover:bg-whiteSmoke"}
                                                                `}
                                                        >
                                                                {currentDate.getDate()}
                                                            </Typography>
                                                            {(isSameDay || isStartDate || isEndDate) && (
                                                                <>
                                                                    <span
                                                                        className={`${style.rippleAnimation} absolute rounded-full bg-primary opacity-50`}
                                                                    ></span>
                                                                </>
                                                            )}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export { DatepickerRange };