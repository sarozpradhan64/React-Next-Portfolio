import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="mb-3 text-2xl font-medium text-white">{title}</h2>
      <span className="h-[2px] bg-secondary w-20 mb-8 inline-block"></span>
    </div>
  );
};

export default SectionTitle;
