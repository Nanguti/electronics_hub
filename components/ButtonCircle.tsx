import type { ButtonHTMLAttributes } from "react";
import React from "react";

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({
  className = "",
  size = " ",
  ...args
}) => {
  return (
    <button
      type="button"
      className={`ttnc-ButtonCircle flex items-center justify-center rounded-lg 
        !leading-none focus:ring-transparent disabled:bg-opacity-70 ${className} ${size} `}
      {...args}
    />
  );
};

export default ButtonCircle;
