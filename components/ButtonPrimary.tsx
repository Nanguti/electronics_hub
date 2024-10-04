import React from "react";

const ButtonPrimary = ({ text, link }: { text?: string; link?: string }) => {
  return (
    <button className="bg-gradient-to-r from-emerald-300 to-sky-400 py-4 px-4 rounded-lg text-gray-950">
      {text}
    </button>
  );
};

export default ButtonPrimary;
