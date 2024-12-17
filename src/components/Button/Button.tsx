import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <>
      <button
        className="w-full text-left pl-5 py-3 bg-purple border-0 rounded-lg font-bold text-2xl cursor-pointer hover:brightness-110 active:opacity-90 hover:delay-75 hover:easy-out hover:transition"
        type="submit"
        {...props}
      >
        {text}
      </button>
    </>
  );
};
