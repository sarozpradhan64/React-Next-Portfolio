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
    gray: "bg-white/10 text-slate-300 border-white/5",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    yellow: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    purple: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${bgColorMap[color]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
