import type React from "react";

type IconButtonProps = {
    href: string;
    label: string;
    children: React.ReactNode;
}

export function IconButton({href, label, children }: IconButtonProps) {
    return (
        <a href = {href} target = "_blank" rel = "noopener noreferrer" aria-label = {label} className = "group">
            <div className = "relative flex items-center justify-center w-14 h-14 rounded-2x1 border border-white/15 bg-white/5 backdrop-blur-md text-white/80 hover:text-white">
            {children}
            </div>
        </a>
    );
}