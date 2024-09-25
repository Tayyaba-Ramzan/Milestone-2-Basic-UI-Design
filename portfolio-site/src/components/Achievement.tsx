"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

interface Achievement {
    metric: string;
    value: string;
    prefix?: string;
    postfix?: string;
}

const achievementsList: Achievement[] = [
    { metric: "Projects", value: "100", postfix: "+" },
    { prefix: "~", metric: "Users", value: "100,000" },
    { metric: "Awards", value: "7" },
    { metric: "Years", value: "5" }
];

export default function Achievement() {
    return (
        <>
            <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="border-[#33353F] border rounded-md py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-16">
                    {achievementsList.map((achievement, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achievement.prefix}
                                <AnimatedNumbers
                                    includeComma
                                    animateToNumber={parseInt(achievement.value.replace(/,/g, ""))}
                                    locale="en-US"
                                    className="text-white text-4xl font-bold"
                                />
                                {achievement.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
