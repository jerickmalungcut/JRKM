// components/Projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data";
import ProjectTabs from "./ProjectTabs";
import "./index.css";
import Heading from "../Heading";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/variants";
import { FaWindowClose } from "react-icons/fa";

const Projects = () => {
  const [currentTab, setCurrentTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    currentTab === "All"
      ? projects
      : projects.filter((project) => project.category === currentTab);

  return (
    <section className="project-list container min-h-screen" id="projects">
      <Heading mainHeading="Project" subHeading="Featured" />
      <ProjectTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="projects">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeIn("down", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-img">
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={250}
                className="w-auto h-auto"
                priority
              />
            </div>

            <h3>{project.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProject(null)}>
              <FaWindowClose size={30} color="#8680ff" />
            </span>
            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              width={500}
              height={300}
              className="h-auto w-auto"
              priority
            />
            <div className="flex items-center justify-between gap-4 md:gap-8 px-4 mt-6">
              <h3 className="text-sm">{selectedProject.title}</h3>
              <span className="text-white text-xs">{selectedProject.tech}</span>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Check Live Site</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Projects;
