import React from "react";

const baseClasses = " font-medium flex justify-center items-center";
const colorClasses = {
    light: " bg-white border border-gray-300 text-gray-700",
    primary: " bg-primary border border-primary text-white",
    secondary: " bg-secondary border border-secondary text-white",
    danger: " bg-red-500 border border-red-500 text-white",
    warning: " bg-warning text-white",
};

const outlineClasses = {
    light: " border border-gray-300 text-gray-700",
    primary: " border border-primary text-primary",
    secondary: " border border-secondary text-primary",
    danger: " border border-red-500 text-white",
    warning: " text-dark",
};

const sizeClasses = {
    sm: "py-1 px-2 text-xs rounded",
    md: "py-2 px-3.5 text-sm rounded",
    lg: "py-3 px-5 text-base tracking-wider rounded",
};

export default function Btn({
    color = "primary",
    outline = "",
    size = "lg",
    className,
    children,
    sm,
    styles,
    ...props
}) {
    const color_classes = colorClasses[color] || "";
    const outline_classes = outlineClasses[outline] || "";
    const size_classes = sizeClasses[size] || "";

    return (
        <button
            {...props}
            className={`${baseClasses} ${color_classes} ${outline_classes} ${size_classes} ${className}`}
            style={{
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                ...styles,
            }}
        >
            {children}
        </button>
    );
}
