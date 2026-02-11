import { useParams } from "react-router-dom";
import { detailedexperience } from "../components/DetailedExperience.ts"
import * as katex from "katex";
import "katex/dist/katex.min.css";
import { useEffect, useRef } from "react";


export default function ProjectPage() {
  const { id } = useParams();
  const project = detailedexperience.find((p) => p.title === id);
  const equationRef = useRef<HTMLDivElement | null>(null);
  const equation2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if (equationRef.current && project?.equation) {
        katex.render(project.equation, equationRef.current, {
          throwOnError: false,
          displayMode: true,
        });
      }
    }, [project?.equation]);

    useEffect(() => {
      if (equation2Ref.current && project?.equation2) {
        katex.render(project.equation2, equation2Ref.current, {
          throwOnError: false,
          displayMode: true,
        });
      }
    }, [project?.equation2]);
  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return (
    <div className="max-h-full px-16 max-w-4xl max-w-full bg-black">
      
      <div className = "max-h-full px-16 4x1">
      <h1 className="text-3xl font-semibold text-blue-400 m-2 mx-auto flex justify-center">{project.title}</h1>
      ‎ 
      <p className="mt-2 text-white-400 flex justify-left">{project.description}</p>
      ‎ 
      <p className = "text-white-400">{project.blurbs}</p>
      <div ref={equationRef} className="my-6" />
      <div ref = {equation2Ref} className = "my-6" />
      <p className = "text-white-400">{project.smallblurb}</p>
      <p className = "text-white-400">{project.descriptionwithlink?.text} <a href = {project.descriptionwithlink?.linkurl} target = "_blank" rel = "noopener noreferrer" className = "text-blue-400 underline hover:text-blue-300">{project.descriptionwithlink?.linktext} </a> {project.descriptionwithlink?.textafter}</p>
      </div>
      ‎ 
      <div className = "flex justify-center max-h-full max-w-4xl max-w-full ">
        <img src = {project.images} className="m-4 w-full max-w-md h-auto flex justify-right items-right rounded-xl border border-white/10" alt = "Example"/>
        <img src = {project.images2} className = "m-4 w-full max-w-md h-auto flex justify-right items-right rounded-xl border border-white/10" alt = "Example 2"/>
      </div>
      <div className = "flex justify-center mx-auto max-h-full w-[45rem]">
        <p className = "text-gray-400 text-sm m-4">{project.imagecaption}</p>
        <p className = "text-gray-400 text-sm m-4">{project.image2caption}</p>
      </div>
      

    </div>

    
  );
}
