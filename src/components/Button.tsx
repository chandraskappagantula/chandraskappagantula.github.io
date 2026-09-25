import type React from "react";

type ButtonProp = {
    href: string;
    text: string;
    children: React.ReactNode;
}

export function Button({ href, text, children }: ButtonProp) {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith("#")) {
            e.preventDefault();

            const section = document.getElementById(href.substring(1));

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            aria-label={text}
            className="group"
        >
            <div className="relative flex items-center justify-center p-2 border border-white/15 bg-white/5 backdrop-blur-md text-white/80 hover:text-white">
                {children}
            </div>
        </a>
    );
}