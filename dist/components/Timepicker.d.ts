import React from 'react';
interface TimepickerProps {
    getValue: (value: string) => void;
    value: string;
}
declare const Timepicker: React.FC<TimepickerProps>;
export { Timepicker };
