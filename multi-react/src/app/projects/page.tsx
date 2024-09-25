
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectTag from "@/components/ProjectTag";
import { animate, motion, useInView } from "framer-motion";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    name: string[];
}

const projectData: Project[] = [
    { id: 1, title: "Shopping Portfolio Website", description: "Project 1", image: "/projects/clothes.png", name: ["All", "Web"] },
    { id: 2, title: "Ecommerce Portfolio Website", description: "Project 2", image: "/projects/ecommerce.jpg", name: ["All", "Web", "mobile"] },
    { id: 3, title: "Food Portfolio Website", description: "Project 3", image: "/projects/food.png", name: ["All", "Web"] },
    { id: 4, title: "Perfume Portfolio Website", description: "Project 4", image: "/projects/perfume.jpg", name: ["All", "Web", "mobile"] },
    { id: 5, title: "Jeweler Portfolio Website", description: "Project 5", image: "/projects/Jeweler.png", name: ["All", "Web"] },
    { id: 6, title: "Makeup Portfolio Website", description: "Project 6", image: "/projects/makeup.jpg", name: ["All"] },
];

export default function ProjectSection() {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); 

    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = tag === "All" ? projectData : projectData.filter(project => project.name.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <h2 className="text-white text-3xl font-bold text-center pb-5">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                {["All", "Web", "mobile"].map((tagName) => (
                    <ProjectTag
                        key={tagName}
                        onClick={() => handleTagChange(tagName)}
                        name={tagName}
                        isSelected={tag === tagName}
                    />
                ))}
            </div>
            <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
                            <ProjectCard
                                imgUrl={project.image}
                                title={project.title}
                                description={project.description}
                            />
                        </motion.li>
                    ))
                ) : (
                    <p className="text-white text-center">No projects available for the selected tag.</p>
                )}
            </ul>
        </section>
    );
}
