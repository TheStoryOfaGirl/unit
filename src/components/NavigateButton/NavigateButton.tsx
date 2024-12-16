import { Link } from "react-router-dom";

interface NavigateButtonProps {
  text: string;
  path: string;
}

export const NavigateButton = ({ text, path }: NavigateButtonProps) => {
  return (
    <div className="bg-grey rounded-md w-72 px-6 py-3">
      <Link
        to={path}
        className="text-left font-light text-white text-2xl m-0 underline block hover:transition hover:scale-105"
      >
        {text}
      </Link>
    </div>
  );
};
