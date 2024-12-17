import { forwardRef } from "react";

interface InputProps {
  placeholder: string;
  helperText?: string;
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, helperText, isError, ...props }, ref) => {
    return (
      <>
        <div className="border border-solid border-light-grey w-min rounded-lg">
          <input
            ref={ref}
            className="py-3 px-5 text-2xl bg-black w-[334px] border-0 text-white rounded-lg"
            style={{ fontFamily: "NT Sakharov" }}
            placeholder={placeholder}
            {...props}
          ></input>
        </div>
        {isError && helperText && (
          <div className="text-left font-light text-white text-lg m-0 ml-2">
            {helperText}
          </div>
        )}
      </>
    );
  },
);
