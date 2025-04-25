import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "large",
}) => {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };
  const className = `rounded-md font-medium transition-all duration-200 ml-5 w-[200px] mt-5 ${variantClasses[variant]}  ${sizeClasses[size]}
`;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
