import { FC, HTMLAttributes, ReactNode } from "react";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
}

const Button: FC<IButton> = ({ children, icon ,...props}) => {
  return (
    <button className="bg-primary flex items-center gap-4 rounded-3xl px-4 py-2 font-semibold" {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
