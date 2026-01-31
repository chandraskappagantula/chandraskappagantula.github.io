import { useEffect, useState } from "react";

const links = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About Me"},
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 right-6 z-50">
      <ul className="flex gap-8 text-sm">
        {links.map((link) => {
          const isActive = activeId === link.id;

          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative pb-1 transition-colors duration-300
                  ${
                    isActive
                      ? "text-blue"
                      : "text-gray-400 hover:text-blue"
                  }
                `}
              >
                {link.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-white
                    transition-transform duration-300 ease-out
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
                    origin-left
                  `}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
