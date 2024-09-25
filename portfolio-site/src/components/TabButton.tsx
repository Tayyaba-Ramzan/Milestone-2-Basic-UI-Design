import React from 'react';
import { motion } from "framer-motion"; // Make sure to import correctly

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" }
}

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

    return (
        <button onClick={selectTab} className="relative">
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                initial="default"
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-purple-500 mt-2 mr-3"
            />
        </button>
    );
}

export default TabButton;
