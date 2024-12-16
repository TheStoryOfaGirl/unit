import {
  Loader,
  MemberCard,
  NavigateButton,
  NewsCard,
  ProjectCard,
} from "@components";
import { URLS } from "./../../const";
import { useEffect, useState } from "react";
import { Member, News } from "types";
import {
  useGetMembersQuery,
  useGetNewsQuery,
  useGetProjectsQuery,
} from "@utils";
import { mockNews } from "./../../mocks/mockNews";
import { mockMembers } from "./../../mocks/mockMembers";
import { mockProjects } from "./../../mocks/mockProjects";

export const Main = () => {
  // const [news, setNews] = useState<News[]>();
  // const [members, setMembers] = useState<Member[]>();
  // const [projects, setProjects] = useState();

  const { data: membersData, isLoading: isLoadingMembers } =
    useGetMembersQuery();
  const { isLoading: isLoadingNews, data: newsData } = useGetNewsQuery();
  const { isLoading: isLoadingProjects, data: projectsData } =
    useGetProjectsQuery();

  // useEffect(() => {
  //   if (isSuccessMembers && membersData.data) {
  //     setMembers(membersData.data);
  //   }
  //   if (isSuccessNews && newsData.data) {
  //     setNews(newsData.data)
  //   }
  // }, []);

  const members =
    membersData?.data && membersData?.data.length > 0
      ? membersData?.data
      : mockMembers;
  const news =
    newsData?.data && newsData?.data.length > 0 ? newsData?.data : mockNews;
  const projects =
    projectsData?.data && projectsData?.data.length > 0
      ? projectsData?.data
      : mockProjects;

  if (isLoadingMembers || isLoadingNews || isLoadingProjects) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-2 mb-[144px]">
        <div>
          <h2 className="text-left font-extrabold text-purple text-7xl m-0 mb-4">
            Кто мы
          </h2>
          <p className="text-left font-light text-white text-3xl m-0 mb-8">
            Мы делаем реальные проекты: приложения, игры, сайты и всё, что
            только захотим
          </p>
          <p className="text-left font-light text-white text-3xl m-0">
            Если ты программист, художник или просто человек, который хочет
            менять мир — присоединяйся к нам!
          </p>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 mb-[144px]">
        <div>
          <h2 className="text-left font-extrabold text-purple text-7xl m-0 mb-4">
            Что мы делаем
          </h2>
          <p className="text-left font-light text-white text-3xl m-0 mb-8">
            Мы делаем реальные проекты: приложения, игры, сайты и всё, что
            только захотим
          </p>
          <p className="text-left font-light text-white text-3xl m-0">
            Если ты программист, художник или просто человек, который хочет
            менять мир — присоединяйся к нам!
          </p>
        </div>
        <div></div>
      </div>
      <div className="mb-[144px]">
        <h2 className="text-left font-extrabold text-purple text-7xl m-0 mb-4">
          Наши проекты
        </h2>
        <div className="flex flex-wrap gap-5 mb-6">
          {projects?.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project}/>
          ))}
        </div>
        <NavigateButton text={`☛ Все проекты`} path={URLS.PROJECTS} />
      </div>
      <div className="mb-[144px]">
        <h2 className="text-left font-extrabold text-purple text-7xl m-0 mb-4">
          Новости
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {news?.slice(0, 2).map((newsItem: News) => (
            <NewsCard
              key={newsItem.id}
              srcImage={newsItem.srcImage}
              title={newsItem.title}
            />
          ))}
        </div>
        <NavigateButton text={`☛ Все новости`} path={URLS.NEWS} />
      </div>
      <div className="mb-[192px]">
        <h2 className="text-left font-extrabold text-purple text-7xl m-0 mb-4">
          Участники
        </h2>
        <div className="grid grid-cols-3  grid-flow-row-dense  gap-6 mb-6">
          {members?.slice(0, 6).map((member: Member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </div>
        <NavigateButton text={`☛ Все участники`} path={URLS.MEMBERS} />
      </div>
    </>
  );
};
