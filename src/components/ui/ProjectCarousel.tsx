"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink, PlayCircle, Code2 } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // We use a virtual index to handle infinite looping
    // The actual index in the array is (index % projects.length + projects.length) % projects.length

    const nextStep = useCallback(() => {
        setDirection(1);
        setIndex((prev) => prev + 1);
    }, []);

    const prevStep = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => prev - 1);
    }, []);

    const getProject = (i: number) => {
        const adjustedIndex = ((i % projects.length) + projects.length) % projects.length;
        return projects[adjustedIndex];
    };

    // Drag logic
    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            nextStep();
        } else if (info.offset.x > threshold) {
            prevStep();
        }
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -left-4 xl:-left-24 z-20 -translate-y-1/2 hidden md:block">
                <button
                    onClick={prevStep}
                    className="p-5 bg-background border border-border rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl group"
                    aria-label="Previous project"
                >
                    <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            <div className="absolute top-1/2 -right-4 xl:-right-24 z-20 -translate-y-1/2 hidden md:block">
                <button
                    onClick={nextStep}
                    className="p-5 bg-background border border-border rounded-full hover:bg-primary hover:text-white transition-all shadow-2xl group"
                    aria-label="Next project"
                >
                    <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Carousel Container */}
            <div className="relative h-[650px] flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    {[-1, 0, 1].map((offset) => {
                        const project = getProject(index + offset);
                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={`${index + offset}-${project.id}`}
                                custom={direction}
                                initial={{
                                    x: offset * 400 + (direction * 200),
                                    scale: isActive ? 1 : 0.8,
                                    opacity: isActive ? 1 : 0.4,
                                    zIndex: isActive ? 10 : 1
                                }}
                                animate={{
                                    x: offset * (windowWidth < 768 ? 340 : 480),
                                    scale: isActive ? 1 : 0.85,
                                    opacity: isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 1
                                }}
                                exit={{
                                    x: offset * 400 - (direction * 200),
                                    opacity: 0,
                                    scale: 0.7
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    opacity: { duration: 0.2 }
                                }}
                                drag={isActive ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={handleDragEnd}
                                className={`absolute w-[85vw] max-w-[350px] md:max-w-none md:w-[600px] bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-2xl transition-colors duration-500 ${isActive ? "border-primary/30" : "border-border/50"
                                    } flex flex-col h-[580px] cursor-grab active:cursor-grabbing`}
                            >
                                {/* Image Section */}
                                <div className="h-64 relative bg-stone-100 dark:bg-stone-800 overflow-hidden group/img">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 pointer-events-none"
                                            style={{
                                                objectPosition: project.objectPosition || "center",
                                                transform: `scale(${project.scale || 1})`
                                            }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                                            <Code2 className="text-stone-300 dark:text-stone-700" size={80} strokeWidth={0.5} />
                                        </div>
                                    )}

                                    {/* Overlay for inactive cards */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] transition-opacity" />
                                    )}

                                    {/* Bottom Mask to hide reflections */}
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none z-[5]" />

                                    {/* Action Buttons (Only for active card) */}
                                    {isActive && (
                                        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onPointerDown={(e) => e.stopPropagation()}
                                                        className="p-3 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md text-foreground rounded-full hover:bg-primary hover:text-white transition-all shadow-lg transform hover:scale-110"
                                                    >
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onPointerDown={(e) => e.stopPropagation()}
                                                        className="p-3 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md text-foreground rounded-full hover:bg-primary hover:text-white transition-all shadow-lg transform hover:scale-110"
                                                    >
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
                                            {project.id === "kleo" && (
                                                <a
                                                    href="https://app.arcade.software/share/collections/Ch7QtUK5HMxBgnM7ZTkO"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onPointerDown={(e) => e.stopPropagation()}
                                                    className="flex items-center space-x-2 px-5 py-2.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform"
                                                >
                                                    <PlayCircle size={16} />
                                                    <span>Watch Demos</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className={`text-2xl md:text-3xl font-bold font-outfit transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground"
                                            }`}>
                                            {project.title}
                                        </h3>
                                        <p className={`mt-4 text-base md:text-lg leading-relaxed transition-opacity duration-300 ${isActive ? "text-secondary" : "text-muted"
                                            }`}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-border/50">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-3 py-1.5 bg-stone-50/50 dark:bg-stone-800/50 text-stone-500 dark:text-stone-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-border/30"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Pagination Dots (Optional but nice) */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > (((index % projects.length) + projects.length) % projects.length) ? 1 : -1);
                            setIndex(index + (i - (((index % projects.length) + projects.length) % projects.length)));
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === (((index % projects.length) + projects.length) % projects.length)
                            ? "w-8 bg-primary"
                            : "w-2 bg-border hover:bg-primary/40"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default ProjectCarousel;
