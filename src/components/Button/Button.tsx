import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <>
      <button
        className="w-full text-left pl-5 py-3 bg-purple border-0 rounded-lg font-bold text-2xl cursor-pointer xl:hover:brightness-110 active:opacity-90 xl:hover:delay-75 xl:hover:easy-out xl:hover:transition"
        type="submit"
        {...props}
      >
        {text}
      </button>
    </>
  );
};
