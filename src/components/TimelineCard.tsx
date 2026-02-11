import type { Experience } from "../components/Experience.ts";

type Props = {
  experience: Experience;
  side: "left" | "right";
};

import { useNavigate } from "react-router-dom";




export function TimelineCard({experience, side }: Props) {
  const navigate = useNavigate();
    const isRightAligned = side == "right";
  return (
    <div
      className={`
        rounded-xl border border-white/10 bg-white/5 p-6
        ${isRightAligned ? "text-right" : "text-left"}
      `}
    >

      <div
        className={`
          flex items-start gap-4 justify-between
          ${isRightAligned ? "flex-row-reverse" : ""}
        `}
      >
        <div>
          <h3 className="text-lg font-semibold text-blue-400">{experience.title}</h3>
          <p className="text-sm text-gray-400">{experience.subtitle}</p>
        </div>

        <span className="text-xs text-red-400 whitespace-nowrap">
          {experience.date}
        </span>
      </div>


      <p className="mt-3 text-sm text-gray-300">
        {experience.description}
      </p>
      <button onClick = {() => navigate(`/project/${experience.title}`)} className = "mt-3 border-white/15 bg-white/5 backdrop-blur-md text-blue-400 hover:text-red-400 flex justify-center items-center">View Details</button>
    </div>
  );
}



