import { ExternalLink } from "lucide-react";

type CardProps = {
    title: string;
    description: string;
    tags?: string[];
    link: string;
};

export function ProjectCard({title, description, tags, link}: CardProps) {
    return (
        <a href = {link} target="_blank"
       rel="noopener noreferrer"
       className="block">
        <div className = "relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
        <ExternalLink size={16} className = "absolute top-1 right-4 text-red-500"/>
        <h3 className = "text-lg text-blue-400 font-semibold">{title}</h3>
        <p className = "mt-3 text-sm text-gray-400">{description}</p>
        
        {tags && (
            <div className="mt-3 mx-auto">
                {tags.map((tag) => (
                    <span key = {tag}
                    className = "text-xs px-2 py-1 rounded-full text-center mx-auto bg-white/10 text-gray-300">
                        {tag}
                    </span>
                ))
                }
            </div>
        )}

            </div>
            </a>


    )
}