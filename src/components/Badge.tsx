import React from "react";

type BadgeColor =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

interface BadgeProps {
  color?: BadgeColor;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ color = "gray", children }) => {
  const bgColorMap: Record<BadgeColor, string> = {
    gray: "bg-gray-100 text-gray-600",
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    indigo: "bg-indigo-100 text-indigo-700",
    purple: "bg-purple-100 text-purple-700",
    pink: "bg-pink-100 text-pink-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${bgColorMap[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
