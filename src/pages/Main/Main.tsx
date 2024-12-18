import {
  Footer,
  Form,
  Loader,
  MemberCard,
  NavigateButton,
  NewsCard,
  ProjectCard,
} from "@components";
import { useEffect, useRef, useState } from "react";
import { Member, News } from "types";
import {
  useGetMembersQuery,
  useGetNewsQuery,
  useGetProjectsQuery,
} from "@utils";
import srcMainImage from "./../../assets/img/pcHover.svg";
import srcMainMobileImage from "./../../assets/img/mbHover.svg";
import useWindowDimensions from "./../../hooks/useWindowDimensions";

export const Main = () => {
  const { data: membersData, isLoading: isLoadingMembers } =
    useGetMembersQuery();
  const { isLoading: isLoadingNews, data: newsData } = useGetNewsQuery();
  const { isLoading: isLoadingProjects, data: projectsData } =
    useGetProjectsQuery();

  const members = membersData?.data ?? [];
  const news = newsData?.data ?? [];
  const projects = projectsData?.data ?? [];

  const imageRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState({ height: 0 });
  const { width } = useWindowDimensions();

  useEffect(() => {
    function handleResize() {
      if (imageRef.current) {
        setHeight({ height: imageRef.current?.height + 64 });
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoadingMembers || isLoadingNews || isLoadingProjects) {
    return <Loader />;
  }

  return (
    <>
      <img
        ref={imageRef}
        src={width > 428 ? srcMainImage : srcMainMobileImage}
        alt=""
        className="absolute top-0 left-0 w-full -z-10"
        onLoad={() =>
          setHeight({ height: Number(imageRef?.current?.height) + 64 })
        }
      />
      <div style={height}></div>
      {height.height && (
        <>
          <div className="md:grid md:grid-cols-2 mb-[144px]">
            <div>
              <h2 className="text-6xl xl:text-7xl text-left font-extrabold text-purple m-0 mb-4">
                Кто мы
              </h2>
              <p className="text-left font-light text-white text-[28px] xl:text-3xl m-0 mb-8">
                Мы делаем реальные проекты: приложения, игры, сайты и всё, что
                только захотим
              </p>
              <p className="text-left font-light text-white text-[28px] xl:text-3xl m-0">
                Если ты программист, художник или просто человек, который хочет
                менять мир — присоединяйся к нам!
              </p>
            </div>
            <div></div>
          </div>
          <div className="md:grid md:grid-cols-2 mb-[144px]">
            <div>
              <h2 className="text-6xl xl:text-7xl text-left font-extrabold text-purple m-0 mb-4">
                Что мы делаем
              </h2>
              <p className="text-left font-light text-white text-[28px] xl:text-3xl m-0 mb-8">
                Мы делаем реальные проекты: приложения, игры, сайты и всё, что
                только захотим
              </p>
              <p className="text-left font-light text-white text-[28px] xl:text-3xl m-0">
                Если ты программист, художник или просто человек, который хочет
                менять мир — присоединяйся к нам!
              </p>
            </div>
            <div></div>
          </div>
          <div className="mb-[144px]">
            <h2 className="text-6xl xl:text-7xl text-left font-extrabold text-purple m-0 mb-4">
              Наши проекты
            </h2>
            <div className="flex flex-wrap gap-5 mb-6">
              {projects
                ?.slice(0, 3)
                .map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            <NavigateButton text={`☛ Все проекты`} />
          </div>
          <div className="mb-[144px]">
            <h2 className="text-6xl xl:text-7xl text-left font-extrabold text-purple m-0 mb-4">
              Новости
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {news
                ?.slice(0, 2)
                .map((newsItem: News) => (
                  <NewsCard
                    key={newsItem.id}
                    srcImage={newsItem.image}
                    title={newsItem.title}
                  />
                ))}
            </div>
            <NavigateButton text={`☛ Все новости`} />
          </div>
          <div className="mb-[192px]">
            <h2 className="text-6xl xl:text-7xl text-left font-extrabold text-purple m-0 mb-4">
              Участники
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-6 mb-6">
              {members
                ?.slice(1, 6)
                .map((member: Member) => (
                  <MemberCard key={member.id} {...member} />
                ))}
            </div>
            <NavigateButton text={`☛ Все участники`} />
          </div>
          <div className="mb-20">
            <p
              className="text-left font-light text-white text-3xl m-0 mb-1"
              id="formId"
            >
              Хочешь к нам?
            </p>
            <p className="text-left font-light text-white text-3xl m-0 mb-8">
              Тогда заполняй анкету....
            </p>
            <Form />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
