import { Link } from "react-router-dom";
import { Project } from "types";

type ProjectCardProps = Pick<
  Project,
  "name" | "description" | "link" | "image"
>;

export const ProjectCard = ({
  name,
  description,
  link,
  image,
}: ProjectCardProps) => {
  return (
    <>
      <div className="h-[440px] w-full md:w-[334px] bg-grey rounded-lg">
        <img
          className="rounded-t-lg w-full md:w-[334px] h-[200px] object-cover"
          src={image}
          alt={name}
        />
        <div className="px-6 pt-4">
          <p className="text-left text-3xl font-meduim line-clamp-2 text-white m-0 mb-4">
            {name}
          </p>
          <p className="text-left text-xl text-white font-light line-clamp-3 m-0 mb-5">
            {description}
          </p>
          <Link
            className="block text-left text-light-grey text-lg truncate m-0 active:text-white active:opacity-95 xl:hover:text-white xl:hover:opacity-95"
            to={link}
          >
            {link}
          </Link>
        </div>
      </div>
    </>
  );
};
