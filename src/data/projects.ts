export interface Project {
    id: string;
    title: string;
    category?: string;
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
        category: "E-Commerce & Headless WordPress CMS",
        description: "Redesigned and rebuilt the Sunset Meadow Vineyards website with a warm, brand-authentic user experience, modern e-commerce functionality, and a fully responsive UI. Implemented a headless WordPress CMS backend so the team can effortlessly manage wines, events, and seasonal updates.",
        tech: ["Next.js", "React", "Headless WordPress", "Tailwind CSS", "GraphQL", "E-Commerce"],
        link: "https://www.sunsetmeadowvineyards.com/",
        image: "/projects/sunset-meadow.png",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "crabby-als",
        title: "Crabby Al’s Seafood Restaurant",
        category: "Restaurant & Local Business Web Design",
        description: "Designed and developed a modern, mobile-first website for Crabby Al’s Seafood Restaurant featuring a fresh coastal identity, easy-to-browse menus, and fast page loads. Focused on showcasing signature dishes, boosting local search visibility, and turning mobile visitors into diners.",
        tech: ["Custom Web Design", "Next.js", "React", "Responsive UI", "Local SEO"],
        link: "https://www.crabbyals.com/",
        image: "/projects/crabby-als.jpg",
        objectPosition: "center",
        scale: 1.1
    },
    {
        id: "possum-queen",
        title: "The Possum Queen Foundation",
        category: "501(c)(3) Nonprofit & Community Website",
        description: "Designed and built a welcoming, mobile-responsive website for The Possum Queen Foundation in Litchfield, CT to share their mission of helping local families facing medical hardships, showcase annual fundraising events, and streamline online donations.",
        tech: ["Nonprofit Web Design", "Responsive Layout", "Online Donations", "Event Showcase", "SEO"],
        link: "https://www.possumqueenfoundation.org/",
        image: "/projects/possum-queen.png",
        objectPosition: "center",
        scale: 1.05
    },
    {
        id: "volleyball",
        title: "VolleyTrack — Rotation Tracker",
        category: "Custom Web Application & UI/UX",
        description: "Designed and engineered a real-time court rotation and lineup web application built for coaches on the sidelines. Turns complex rotation rules into an intuitive, touch-friendly interface across phones, tablets, and desktops.",
        tech: ["Web App Design", "React", "Next.js", "TypeScript", "Interactive UX"],
        link: "https://volleytrack.net/",
        image: "/projects/volleytrack-main.png",
        objectPosition: "center 15%",
        scale: 1.1
    }
];
