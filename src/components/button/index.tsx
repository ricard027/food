import { FC, ReactNode } from "react";

interface IButton {
  icon?: ReactNode;
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, icon }) => {
  return (
    <button className="bg-primary flex items-center gap-4 rounded-3xl px-4 py-2 font-semibold">
      {icon}
      {children}
    </button>
  );
};

export default Button;
