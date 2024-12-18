import { Link } from "react-router-dom";

interface NavigateButtonProps {
  text: string;
}

export const NavigateButton = ({ text }: NavigateButtonProps) => {
  return (
    <div className="bg-grey rounded-md md:px-6 md:py-3 w-full md:w-72">
      <Link
        to={"/"}
        className="text-left font-light text-white text-[26px] md:text-2xl px-6 py-3 md:px-0 md:py-0 m-0 underline block xl:hover:transition xl:hover:scale-105"
      >
        {text}
      </Link>
    </div>
  );
};
