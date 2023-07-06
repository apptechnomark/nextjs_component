import React, { useState, useEffect } from 'react';
import styles from "./styles/timepicker.module.css";

interface Timepicker24Props { }

const Timepicker24: React.FC<Timepicker24Props> = (props: any) => {
    const hourDigits12: number[] = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const hourDigits24: number[] = [24, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const minuteDigits: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    const [selectedHourDigit, setSelectedHourDigit] = useState<number>(12) || useState<number>(24);
    const [selectedMinuteDigit, setSelectedMinuteDigit] = useState<number>(0);
    const [isAM, setIsAM] = useState<boolean>(false);
    const [showHourDigits, setShowHourDigits] = useState<boolean>(true);
    const [showMinuteDigits, setShowMinuteDigits] = useState<boolean>(false);
    const [isHour24Selected, setIsHour24Selected] = useState<boolean>(false);

    const [isDigit12, setIsDigit12] = useState<boolean>(true);
    const [isDigit24, setIsDigit24] = useState<boolean>(false);
    const [isDigit241, setIsDigit241] = useState<boolean>(true);

    const [animateHour, setAnimateHour] = useState<String>('');
    const [animateMinute, setAnimateMinute] = useState<String>('');

    const handleHourSelectDigit = (digit: number) => {
        setSelectedHourDigit(digit);
        setIsHour24Selected(true);

        digit ? setAnimateHour('topAnimation') : setAnimateHour('');

        if (digit <= 12) {
            setIsDigit12(true);
            setIsDigit24(false);
        } else {
            setIsDigit24(true);
            setIsDigit12(false);
        }
        setTimeout(() => {
            setAnimateHour('');
        }, 300);
    };

    const handleMinuteSelectDigit = (digit: number) => {
        setSelectedMinuteDigit(digit);
        digit ? setAnimateMinute('topAnimation') : setAnimateMinute('');
        setTimeout(() => {
            setAnimateMinute('');
        }, 300);
    };

    useEffect(() => {
        let fullTime = selectedHourDigit + ':' + selectedMinuteDigit;
        props.onSelectedTime(fullTime);
    }, [selectedHourDigit, selectedMinuteDigit]);

    const toggleSetAM = () => {
        setIsAM(!isAM);
    };

    const showHourClock = () => {
        setIsHour24Selected(false);

        if (showHourDigits) {
            setShowHourDigits(true);
            setShowMinuteDigits(false);
        } else {
            setShowMinuteDigits(false);
            setShowHourDigits(true);
        }
    };

    const showMinuteClock = () => {

        if (showMinuteDigits) {
            setShowMinuteDigits(true);
            setShowHourDigits(false);
        } else {
            setShowMinuteDigits(true);
            setShowHourDigits(false);
        }
    };

    const renderHourDigits12 = hourDigits12.map((digit, index) => (
        <div
            key={digit}
            className={`absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ${digit === selectedHourDigit ? 'text-white' : 'text-black'} ${isDigit12 ? "text-black" : "text-gray-400"}`}
            style={{
                transform: `${isDigit12 ? `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)` : `rotate(${index * 30}deg) translate(0, -55px) rotate(${-index * 30}deg)`}`,
                top: '46%',
                left: '47%'
            }}
            onClick={() => {
                handleHourSelectDigit(digit),
                    setIsHour24Selected(false)
            }}
        >
            {digit}
        </div>
    ));

    const renderHourDigits24 = hourDigits24.map((digit, index) => (
        <div
            key={digit}
            className={`absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ${isDigit24 ? "text-black" : "text-gray-400"}  ${digit === selectedHourDigit ? 'text-white' : 'text-gray'} `}
            style={{
                transform: `${isDigit24 ? `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)` : `rotate(${index * 30}deg) translate(0,-55px) rotate(${-index * 30}deg)`}`,
                top: `46%`,
                left: '47%'
            }}
            onClick={() => handleHourSelectDigit(digit)}
        >
            {digit}
        </div>
    ));

    const renderMinuteDigits = minuteDigits.map((digit, index) => {
        const formattedDigit = digit < 10 ? `0${digit}` : digit;
        return (
            <div
                key={digit}
                className={`absolute top-1/2 left-1/2 z-10 text-sm transform -translate-x-1/2 -translate-y-1/2 w-5 flex items-center justify-center ${digit === selectedMinuteDigit ? 'text-white' : 'text-black'
                    }`}
                style={{
                    transform: `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)`,
                    top: '46%',
                    left: '47%'
                }}
                onClick={() => handleMinuteSelectDigit(digit)}
            >
                {formattedDigit}
            </div>
        );
    });

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-3">
                <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                        <div className='border border-gray-300 rounded bg-slatyGreen overflow-hidden'>
                            <input
                                className={`${animateHour} w-9 h-8 py-1 font-semibold text-lg border rounded text-center cursor-pointer ${showHourDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'}`}
                                type="text"
                                placeholder="00"
                                readOnly
                                defaultValue={`${selectedHourDigit < 10 ? `0${selectedHourDigit}` : selectedHourDigit}`}
                                onClick={showHourClock}
                                style={{ outline: 'none' }}
                            />
                        </div>
                        <span className="text-gray-600">:</span>
                        <div className='border border-gray-300 rounded bg-slatyGreen overflow-hidden'>
                            <input
                                className={`${animateMinute} w-9 h-8 py-1 font-semibold text-lg border border-gray-300 rounded text-center cursor-pointer ${showMinuteDigits === true ? 'bg-slatyGreen text-primary' : 'bg-lightGray'
                                    }`}
                                type="text"
                                placeholder="00"
                                readOnly
                                defaultValue={`${selectedMinuteDigit < 10 ? `0${selectedMinuteDigit}` : selectedMinuteDigit}`}
                                onClick={showMinuteClock}
                                style={{ outline: 'none' }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 ml-10 border border-gray-300 rounded-md opacity-50">
                        <div
                            className={`w-10 h-8 ${isAM && 'bg-slatyGreen text-primary'} transition-all rounded-l-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none `}
                            onClick={toggleSetAM}
                        >
                            AM
                        </div>
                        <div
                            className={`w-10 h-8 ${!isAM && 'bg-slatyGreen text-primary'} transition-all rounded-r-md font-medium text-sm duration-200 flex items-center justify-center py-1 px-2 cursor-pointer pointer-events-none`}
                            onClick={toggleSetAM}
                        >
                            PM
                        </div>
                    </div>
                </div>
                {!showMinuteDigits && showHourDigits && (
                    <>
                        <div className="w-56 h-56 bg-lightGray left-0 top-0 rounded-full relative flex items-center justify-center">
                            {!isHour24Selected &&
                                <div className={`w-full h-full relative -left-1`}>
                                    {renderHourDigits12}
                                    {hourDigits12.map((digit, index) =>
                                        digit === selectedHourDigit && (
                                            <React.Fragment key={digit}>
                                                <div
                                                    className={`absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer`}
                                                    style={{ top: '41%', left: '42.6%', transform: `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)` }}
                                                    onClick={() => handleHourSelectDigit(selectedHourDigit === 12 ? 1 : selectedHourDigit + 1)}
                                                ></div>
                                                <div
                                                    className="absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2"
                                                    style={{
                                                        top: '49.5%',
                                                        left: '52%',
                                                        transformOrigin: 'center top',
                                                        transform: `translateX(-50%) rotate(${index * 30}deg) translateY(-90px)`
                                                    }}
                                                ></div>
                                            </React.Fragment>
                                        )
                                    )}
                                    <div className="absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4" style={{ top: '55%', left: '52%' }}></div>
                                </div>}
                        </div>
                        <div className={`${isHour24Selected ? `w-56 h-56 -top-56 scaleUpAnimation ` : `w-32  h-32 -top-[181px] left-0 bg-transparent `}  bg-lightGray rounded-full relative flex items-center justify-center`}>
                            <div className={`w-full h-full relative ${isHour24Selected ? "right-1" : "-left-1.5"}`}>
                                {renderHourDigits24}
                                {hourDigits24.map((digit, index) =>
                                    digit === selectedHourDigit && (
                                        <React.Fragment key={digit}>
                                            <div
                                                className={`absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer`}
                                                style={{
                                                    top: isDigit241 ? '38%' : '41%',
                                                    left: isDigit241 ? '40%' : '43%',
                                                    transform: `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)`
                                                }}
                                                onClick={() => handleHourSelectDigit(selectedHourDigit === 24 ? 1 : selectedHourDigit + 1)}
                                            >
                                            </div>
                                            <div
                                                className="absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2"
                                                style={{
                                                    top: isDigit241 ? '50.5%' : '49.5%',
                                                    left: isDigit241 ? '55%' : '52%',
                                                    transformOrigin: 'center top',
                                                    transform: `translateX(-50%) rotate(${index * 30}deg) translateY(-90px)`
                                                }}
                                            ></div>
                                        </React.Fragment>
                                    )
                                )}
                                {isHour24Selected && <div className="absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4" style={{ top: '55%', left: '52%' }}></div>}
                            </div>
                        </div>
                    </>
                )}
                {showMinuteDigits && (
                    <div className="w-56 h-56 bg-lightGray rounded-full relative flex items-center justify-center">
                        <div className={`w-full h-full relative right-1 scaleUpAnimation`}>
                            {renderMinuteDigits}
                            {minuteDigits.map((digit, index) =>
                                digit === selectedMinuteDigit && (
                                    <React.Fragment key={digit}>
                                        <div
                                            className={`absolute w-10 h-10 bg-primary rounded-full transform -translate-x-1/2 translate-y-16 cursor-pointer`}
                                            style={{ top: '41%', left: '42.6%', transform: `rotate(${index * 30}deg) translate(0, -90px) rotate(${-index * 30}deg)` }}
                                            onClick={() => handleMinuteSelectDigit(selectedMinuteDigit === 0 ? 1 : selectedMinuteDigit + 1)}
                                        ></div>
                                        <div
                                            className="absolute w-0.5 h-[90px] bg-primary transform -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                top: '49.5%',
                                                left: '52%',
                                                transformOrigin: 'center top',
                                                transform: `translateX(-50%) rotate(${index * 30}deg) translateY(-90px)`
                                            }}
                                        ></div>
                                    </React.Fragment>
                                )
                            )}
                            <div className="absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-4" style={{ top: '55%', left: '52%' }}></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export { Timepicker24 };