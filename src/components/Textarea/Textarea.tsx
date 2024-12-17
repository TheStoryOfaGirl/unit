import { ComponentProps, forwardRef } from "react";

interface TextareaProps extends ComponentProps<"textarea"> {
  isError?: boolean;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isError, helperText, ...props }, ref) => {
    return (
      <>
        <div className="w-min rounded-lg">
          <textarea
            ref={ref}
            className="py-3 px-5 text-2xl bg-black w-[569px] text-white rounded-lg resize-none overflow-hidden"
            style={{ fontFamily: "NT Sakharov" }}
            {...props}
            rows={3}
          ></textarea>
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
