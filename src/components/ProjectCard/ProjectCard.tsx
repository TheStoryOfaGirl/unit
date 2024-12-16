import { Link } from "react-router-dom";
import { Project } from "types";

type ProjectCardProps = Pick<
  Project,
  "name" | "description" | "link" | "srcImage"
>;

export const ProjectCard = ({
  name,
  description,
  link,
  srcImage,
}: ProjectCardProps) => {
  return (
    <>
      <div className="h-[440px] w-[334px] bg-grey rounded-lg">
        <img className="rounded-t-lg w-[334px]" src={srcImage} alt={name} />
        <div className="px-6 pt-4">
          <p className="text-left text-3xl font-meduim line-clamp-2 text-white m-0 mb-4">
            {name}
          </p>
          <p className="text-left text-lg text-white font-light line-clamp-2 m-0 mb-5">
            {description}
          </p>
          <Link
            className="block text-left text-light-grey text-lg truncate m-0 hover:text-white hover:opacity-95"
            to={link}
          >
            {link.substring(link.lastIndexOf("//") + 2, link.length - 1)}
          </Link>
        </div>
      </div>
    </>
  );
};
