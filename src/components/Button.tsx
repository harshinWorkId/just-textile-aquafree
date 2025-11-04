import React from 'react';

type ButtonProps = {
  name: string;
  color: string;
  bgColor: string;
};

const Button: React.FC<ButtonProps> = ({ name, color, bgColor }) => {
  return (
    <button
      className={`px-4 py-3 rounded-lg font-open ${color} ${bgColor} font-semibold`}
    >
      {name}
    </button>
  );
};

export default Button;
