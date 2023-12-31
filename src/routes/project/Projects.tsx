import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import css from "./Projects.module.css";

import { routesComponents } from "../../components/exportRoutesComponents";
import { useEffect, useState } from "react";
import { getProjects } from "../../services/getProjects";
const { Slider } = routesComponents;

interface ProjectProps {
  id?: number;
  name?: string;
  full_name?: string;
  stringify?: string;
}

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getProjects();
        const data: ProjectProps[] | unknown = response.data;

        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error(
            "Erro: os dados obtidos não são do tipo ProjectProps[]"
          );
        }
      } catch (error) {
        console.error("Erro ao obter os projetos:", error);
      }
    })();
  }, []);

  const settings = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <>
      <div className={css.project}>
        {projects && (
          <Slider settings={settings}>
            {projects.map((project: ProjectProps) => (
              <SwiperSlide key={project.id}>
                <p>
                  <Link to={`../Project/${project.id}/${project.name}`}>
                    {project.name}
                  </Link>
                </p>
              </SwiperSlide>
            ))}
          </Slider>
        )}
      </div>
      <div style={{ margin: "2px" }}>
        <span>
          AVISO: Todas as chamadas são para o mesmo projeto. Para projetos em
          OFF acesse:{" "}
          <Link
            style={{
              fontFamily: "monospace",
              fontSize: "15px",
            }}
            to="https://github.com/Robsonnsbr"
            target="_blank"
          >
            github.com/Robsonnsbr
          </Link>
        </span>
      </div>
    </>
  );
};
