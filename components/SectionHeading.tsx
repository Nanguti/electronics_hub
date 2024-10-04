import React from "react";

const SectionHeading = ({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <h1
          className="uppercase  text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r
         from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center"
        >
          {title}
        </h1>
      </div>

      <p className="text-sm text-center py-4 italic">{eyebrow} </p>
    </div>
  );
};

export default SectionHeading;
