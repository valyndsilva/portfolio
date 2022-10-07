import React from "react";

type Props = {
  children?: React.ReactNode;
  className: string;
  onClick?: () => void;
};
const ToggleButton = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
