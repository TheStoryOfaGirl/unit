import { Link } from "react-router-dom";
import { NAV_LIST } from "./../../const";

export const Footer = () => {
  return (
    <>
      <div className="bg-grey grid md:grid-cols-5 gap-2 pt-3 pb-5 md:pt-5 md:pb-6 pl-5 md:gap-0 rounded-t-lg">
        {NAV_LIST.map((navItem) => (
          <div key={navItem} className="text-left">
            <Link
              to={"/"}
              className="text-left font-medium text-light-grey text-2xl m-0 no-underline active:text-white xl:hover:text-white xl:hover:delay-75 xl:hover:easy-out xl:hover:transition"
            >
              {navItem}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
