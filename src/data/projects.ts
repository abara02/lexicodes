export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "kleo",
        title: "MyKleo.Ai",
        description: "Intelligent content creation and publishing platform for modern marketing teams. An AI-powered social media teammate that streamlines workflows from ideation to publishing.",
        tech: ["AI Marketing", "Content Strategy", "UI/UX Design", "Social Media Automation"],
        link: "https://www.mykleo.ai/",
        image: "/projects/kleo.png"
    },
    {
        id: "volleyball",
        title: "Volleyball Rotation Tracker",
        description: "A custom web application built to solve real coaching challenges, allowing for intuitive tracking of player rotations and positions on court.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/abara02",
        image: "/projects/tracker.png"
    },
    {
        id: "1",
        title: "Snake Game in C",
        description: "I built a replica of the classic Snake game in C, implementing game logic, collision detection, and smooth gameplay mechanics.",
        tech: ["C", "Game Development", "Algorithms"],
        github: "https://github.com/abara02",
        image: "/projects/snake-game.png"
    },
    {
        id: "new-project",
        title: "Project Title",
        description: "Project Description goes here.",
        tech: ["Tech 1", "Tech 2"],
        link: "",
        image: ""
    }
];
