import React from "react";

export default function Button({ children, rounded, variant, handleClick }) {
  const getButtonVariant = (variant) => {
    if (variant === "primary") {
      return "bg-primary-cyan text-white hover:opacity-60 transition-all border-primary-cyan";
    } else if (variant === "ghost") {
      return "bg-transparent border-none text-neutral-grayishViolet hover:text-neutral-veryDarkViolet transition-all";
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`py-1.5 px-6 w-full font-bold capitalize rounded border 
        ${rounded ? "rounded-full" : null} 
      ${getButtonVariant(variant)}
      
      `}
    >
      {children}
    </button>
  );
}
