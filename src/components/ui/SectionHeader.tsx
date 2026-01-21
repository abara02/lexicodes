export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black font-outfit mb-6 tracking-tight text-foreground">{title}</h2>
            {subtitle && <p className="text-xl text-secondary max-w-2xl font-medium opacity-80">{subtitle}</p>}
            <div className="h-1.5 w-16 bg-primary mt-8 rounded-full opacity-60"></div>
        </div>
    );
}
