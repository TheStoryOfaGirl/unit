import { SCREEN_SIZES } from "./../../const";
import useWindowDimensions from "./../../hooks/useWindowDimensions";
import { ComponentProps, forwardRef } from "react";

interface TextareaProps extends ComponentProps<"textarea"> {
  isError?: boolean;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isError, helperText, ...props }, ref) => {
    const { width } = useWindowDimensions();
    return (
      <>
        <div className="w-full md:w-min rounded-lg">
          <textarea
            ref={ref}
            className="py-3 px-5 text-2xl bg-black box-border w-full md:w-[569px] text-white rounded-lg resize-none overflow-hidden"
            style={{ fontFamily: "NT Sakharov" }}
            {...props}
            rows={width > SCREEN_SIZES.MOBILE ? 3 : 4}
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
