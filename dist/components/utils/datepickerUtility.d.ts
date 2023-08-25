interface CalendarDate {
    currentMonth: boolean;
    date: Date;
    today?: boolean;
}
export declare const generateDate: (month?: number, year?: number) => CalendarDate[];
export declare const months: string[];
export {};
