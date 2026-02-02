import type React from "react";

type ButtonProp = {
    href: string;
    text: string;
    children: React.ReactNode;
}

export function Button({href, text, children}: ButtonProp) {
    return (
        <a href = {href} rel = "noopener noreferrer" aria-label = {text} className = "group">
            <div className = "relative flex items-center justify-center p-2 border border-white/15 bg-white/5 backdrop-blur-md text-white/80 hover:text-white">
            {children}
            </div>
        </a>
    );
}