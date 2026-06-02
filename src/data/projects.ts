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
        id: "sunset",
        title: "Sunset Meadow Vineyards",
        description: "Redesigned and rebuilt the Sunset Meadow Vineyards website with a user-focused experience, modern e-commerce functionality, and a fully responsive UI. Implemented a headless WordPress CMS backend to provide flexible content management, scalability, and optimized performance.",
        tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "GraphQL"],
        link: "https://www.sunsetmeadowvineyards.com/",
        image: "/projects/sunset-meadow.png",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "kleo",
        title: "MyKleo.Ai",
        description: "Worked on enhancing UI/UX, ensuring backend stability, and supporting experimental AI features while creating engaging product demos. Collaborated in team settings to deliver practical solutions and improve overall product performance.",
        tech: ["React", "TypeScript", "Next.js", "Prisma"],
        link: "https://www.mykleo.ai/",
        image: "/projects/kleo.png",
        objectPosition: "center 80%",
        scale: 1.2
    },
    {
        id: "volleyball",
        title: "Volleyball Rotation Tracker",
        description: "I built a website that allows volleyball coaches to easily track players on the court, giving them more time to be present with their athletes. This project was my solution to a real problem I faced in my own experience as a volleyball coach.",
        tech: ["React", "Next.js", "TypeScript"],
        github: "https://github.com/abara02",
        link: "https://volleytrack.net/",
        image: "/projects/volleytrack-main.png",
        objectPosition: "center 15%",
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
    },
    {
        id: "crabby-als",
        title: "Crabby Al’s Seafood Restaurant",
        description: "Designed and developed a modern website for Crabby Al’s Seafood Restaurant with a fresh coastal feel, easy-to-navigate menus, and a fully responsive layout. Focused on showcasing the restaurant’s seafood offerings, improving customer engagement, and creating a smooth browsing experience across devices.",
        tech: ["Next.js", "React", "CSS", "TypeScript", "Responsive Design"],
        link: "https://www.crabbyals.com/",
        image: "/projects/crabby-als.png",
        objectPosition: "center",
        scale: 1.1
    }
];
