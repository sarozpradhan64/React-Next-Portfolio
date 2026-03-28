import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div className="mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <div className="absolute top-0 left-0 z-50">
          <span className="h-[3px] bg-secondary w-12 rounded-full"></span>
          <span className="h-[3px] bg-secondary/30 w-4 rounded-full"></span>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
