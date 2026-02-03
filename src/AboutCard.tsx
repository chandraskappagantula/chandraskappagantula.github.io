type AboutProps = {
    title: string;
    description: string;
    para: string;
    tags?: string[];
    link: string;
}

export function AboutCard({title, description, para, tags, link}: AboutProps) {
    return (
        <a href = {link} 
       rel="noopener noreferrer"
       className="block">
        <div className = "relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <h2 className = "text-xl text-blue-400 font-semibold">{title}</h2>
            <h3 className = "text-lg text-white font">{description}</h3>
            <p className = "mt-1 text-sm text-gray-400">{para}</p>
            {tags && (
            <div className="mt-2 mx-auto center-justify">
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
    )}