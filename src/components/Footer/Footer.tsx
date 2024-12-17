import { Link } from "react-router-dom";
import { NAV_LIST } from "./../../const";

export const Footer = () => {
  return (
    <>
      <div className="bg-grey grid grid-cols-5 pt-5 pb-6 pl-5 rounded-t-lg">
        {NAV_LIST.map((navItem) => (
          <div key={navItem} className="text-left">
            <Link
              to={"/"}
              className="text-left font-medium text-light-grey text-2xl m-0 no-underline hover:text-white hover:delay-75 hover:easy-out hover:transition"
            >
              {navItem}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
