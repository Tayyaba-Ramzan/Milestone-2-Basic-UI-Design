"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/components/TabButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBook, faGraduationCap, faCertificate, faCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faPython, faJsSquare } from '@fortawesome/free-brands-svg-icons';

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: () => (
            <ul className="list-disc pl-5">
                <li><FontAwesomeIcon icon={faHtml5} className="mr-2" /> HTML</li>
                <li><FontAwesomeIcon icon={faCss3Alt} className="mr-2" /> CSS</li>
                <li><FontAwesomeIcon icon={faJsSquare} className="mr-2" /> JavaScript</li>
                <li><FontAwesomeIcon icon={faPython} className="mr-2" /> Python</li>
                <li><FontAwesomeIcon icon={faCode} className="mr-2" /> Next.js</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: () => (
            <ul className="list-disc pl-5">
                <li><FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Intermediate in Computer Science</li>
                <li><FontAwesomeIcon icon={faBook} className="mr-2" /> Matriculation (Science)</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: () => (
            <ul className="list-disc pl-5">
                <li><FontAwesomeIcon icon={faCertificate} className="mr-2" /> DAE Software Engineering</li>
                <li><FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Computer Information Technology</li>
            </ul>
        )
    }
];

export default function AboutSection() {
    const [tab, setTab] = useState<string>("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white pt-20">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="flex justify-center mb-6 md:mb-0">
                    <Image
                        src={"/com.jpg"}
                        alt="about image"
                        height={500}
                        width={500}
                        layout="responsive" // Responsive layout
                        className="rounded-lg object-cover w-full max-w-xs md:max-w-full"
                    />
                </div>
                <div>
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                        <p className="text-base md:text-lg">
                            I’m Tayyaba Ramzan, a software engineer passionate about artificial intelligence and Web 3.0. I create innovative software and engaging online experiences. Explore my projects that showcase my creativity and technical skills. Let’s collaborate on exciting challenges!
                        </p>
                    </div>
                    <div className="flex flex-row mt-8 flex-wrap">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            <FontAwesomeIcon icon={faCogs} className="mr-2" />
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            <FontAwesomeIcon icon={faCertificate} className="mr-2" />
                            Certifications
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content()}
                    </div>
                </div>
            </div>
        </section>
    );
}
