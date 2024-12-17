import { Link } from "react-router-dom";

interface NewsCardProps {
  srcImage: string;
  title: string;
}

export const NewsCard = ({ srcImage, title }: NewsCardProps) => {
  const styles = {
    backgroundImage: "url(" + srcImage + ")",
  };
  return (
    <>
      <Link
        to={"/"}
        className="no-underline hover:underline hover:decoration-white"
      >
        <div className="rounded-lg bg-cover h-80 flex items-end" style={styles}>
          <div className="pb-5">
            <p className="text-left m-0 text-white font-medium text-4xl px-8 line-clamp-2 text-balance">
              {title}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
