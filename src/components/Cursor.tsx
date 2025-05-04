import React from 'react'
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: -50, y: -50 });
    const [isVisible, setIsVisible] = useState(false);
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        let mouseMoveTimer: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsMoving(true);
            setIsVisible(true);

            clearTimeout(mouseMoveTimer);

            mouseMoveTimer = setTimeout(() => {
                setIsMoving(false);
            }, 1500);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(mouseMoveTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 h-6 w-6 rounded-full border-4 border-fuchsia-500 mix-blend-difference"
            initial={{
                x: position.x - 16,
                y: position.y - 16,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                opacity: isMoving ? 1 : 0,
                scale: isMoving ? 1 : 0.8
            }}
            transition={{
                type: "tween",
                duration: 0.3,
                opacity: { duration: 0.5, ease: "easeInOut" },
                scale: { duration: 0.5, ease: "easeInOut" },
            }}
        />
    );
};

export default Cursor
