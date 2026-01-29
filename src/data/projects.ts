export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
    objectPosition?: string;
    scale?: number;
}

export const projects: Project[] = [
    {
        id: "kleo",
        title: "MyKleo.Ai",
        description: "Worked on enhancing UI/UX, ensuring backend stability, and supporting experimental AI features while creating engaging product demos. Collaborated in team settings to deliver practical solutions and improve overall product performance.",
        tech: ["React", "TypeScript", "Next.js", "Prisma"],
        link: "https://www.mykleo.ai/",
        image: "/projects/kleo.png",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "volleyball",
        title: "Volleyball Rotation Tracker",
        description: "I built a website that allows volleyball coaches to easily track players on the court, giving them more time to be present with their athletes. This project was my solution to a real problem I faced in my own experience as a volleyball coach.",
        tech: ["React", "Next.js", "TypeScript"],
        github: "https://github.com/abara02",
        link: "https://volleytrack.net/",
        image: "/projects/volleytrack-main.png",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "1",
        title: "Snake Game in C",
        description: "I built a replica of the classic Snake game in C, implementing game logic, collision detection, and smooth gameplay mechanics.",
        tech: ["Data Structures", "C Programming"],
        github: "https://github.com/abara02",
        image: "/projects/snake-game.png",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "pizza-app",
        title: "Mock Pizza Ordering App",
        description: "A simple mock up app designed to practicle mobile implementation, and ui design etc. It was done on android studio with kotlin as the language UI: XML layouts, ConstraintLayout, RecyclerView (for menu and cart)",
        tech: ["Kotlin", "Android Studio", "XML", "Jetpack Components", "Gradle"],
        github: "https://github.com/abara02/Mock-Pizza-Ordering-App",
        image: "/projects/pizza-app.png",
        objectPosition: "top center",
        scale: 1.1
    }
];
