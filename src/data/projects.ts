export interface Project {
    id: string;
    title: string;
    category?: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
    imageAlt?: string;
    objectPosition?: string;
    scale?: number;
}

export const projects: Project[] = [
    {
        id: "sunset",
        title: "Sunset Meadow Vineyards",
        category: "E-Commerce & Headless WordPress CMS",
        description: "Created a beautiful, mobile-friendly website that showcases Sunset Meadow Vineyards, highlights its wines, and makes it easy for customers to explore what they offer. With built-in online shopping, customers can purchase products directly through the website, helping the vineyard reach more customers and grow online sales.",
        tech: ["Next.js", "React", "Headless WordPress", "Tailwind CSS", "GraphQL", "E-Commerce"],
        link: "https://www.sunsetmeadowvineyards.com/",
        image: "/projects/sunset-meadow.png",
        imageAlt: "Sunset Meadow Vineyards mobile-friendly winery and e-commerce website in Goshen, Connecticut designed by LexiCodes Digital",
        objectPosition: "top center",
        scale: 1.1
    },
    {
        id: "possum-queen",
        title: "The Possum Queen Foundation",
        category: "Wix & CMS • 501(c)(3) Nonprofit Website",
        description: "Created a welcoming, mobile-friendly website that helps The Possum Queen Foundation share its mission, promote fundraising events, and connect with families in need. The website also makes it easy for supporters to donate online, helping the organization raise funds and make a difference in the community.",
        tech: ["Wix", "CMS", "Nonprofit Web Design", "Responsive Layout", "Online Donations"],
        link: "https://www.possumqueenfoundation.org/",
        image: "/projects/possum-queen.jpg",
        imageAlt: "The Possum Queen Foundation mobile-friendly nonprofit website in Litchfield, Connecticut built with Wix and CMS by LexiCodes Digital",
        objectPosition: "top center",
        scale: 1.05
    },
    {
        id: "volleyball",
        title: "VolleyTrack — Rotation Tracker",
        category: "Custom Web Application & UI/UX",
        description: "Created an easy-to-use volleyball rotation tracker that helps coaches stay organized and focused on the game. With a clear layout and simple controls, coaches can manage lineups, track player rotations, and make quick adjustments from their phone, tablet, or computer.",
        tech: ["Web App Design", "React", "Next.js", "TypeScript", "Interactive UX"],
        link: "https://volleytrack.net/",
        image: "/projects/volleytrack-main.png",
        imageAlt: "VolleyTrack custom volleyball rotation tracker web application interface for coaches",
        objectPosition: "center 15%",
        scale: 1.1
    },
    {
        id: "crabby-als",
        title: "Crabby Al’s Seafood Restaurant",
        category: "Restaurant & Local Business Web Design",
        description: "Created a modern, mobile-friendly restaurant website for Crabby Al’s Seafood Restaurant that showcases its menu, highlights weekly specials and live events, and makes important customer information easy to find on any phone, tablet, or computer.",
        tech: ["Custom Web Design", "Next.js", "React", "Responsive UI", "Local SEO"],
        link: "https://www.crabbyals.com/",
        image: "/projects/crabby-als.jpg",
        imageAlt: "Crabby Al's Seafood Restaurant mobile-friendly restaurant website and online menu in Thomaston, Connecticut designed by LexiCodes Digital",
        objectPosition: "top center",
        scale: 1.05
    }
];
