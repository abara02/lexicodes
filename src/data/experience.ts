export interface Experience {
    id: string;
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export const experiences: Experience[] = [
    {
        id: "1",
        role: "Software Intern",
        company: "Kleosi Inc",
        duration: "Jan 2025 – Jul 2025",
        description: [
            "Gained exposure to real-world software development and experience collaborating in team environments.",
            "Contributed to UI/UX solutions, improving usability and feature clarity.",
            "Assisted with backend stability, maintenance, bug fixes, and performance monitoring.",
            "Supported experimental AI features through testing, validation, and monitoring model performance.",
            "Created clear, engaging product demos using strong product and technical understanding."
        ]
    },
    {
        id: "2",
        role: "Tech Associate",
        company: "Staples",
        duration: "Jun 2023 – Dec 2024",
        description: [
            "Diagnosed and resolved hardware and software issues to improve customer system performance.",
            "Configured new computers, performed data transfers, and ensured proper system setup.",
            "Provided technical consultations for printers, networking, and peripherals.",
            "Delivered customer-focused solutions while promoting tech products and services."
        ]
    }
];
