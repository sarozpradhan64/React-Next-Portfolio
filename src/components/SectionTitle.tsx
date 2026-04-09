import React from "react";

const SectionTitle = ({
  title,
  position,
}: {
  title: string;
  position?: "left" | "center" | "right";
}) => {
  return (
    <>
      <div
        className={`${position === "center" ? "flex justify-center" : position === "right" ? "flex justify-end" : "flex justify-start"}`}
      >
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <span className="h-[3px] w-24 bg-secondary rounded-full"></span>
            <span className="h-[3px] w-6 bg-secondary/30 rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
