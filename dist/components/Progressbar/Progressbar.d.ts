import React from "react";
interface ProgressBarProps {
    progress?: number;
    label: string;
    variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    striped?: boolean;
    progressDigit?: boolean;
}
declare const ProgressBar: React.FC<ProgressBarProps>;
export { ProgressBar };