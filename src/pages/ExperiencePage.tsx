import { useParams } from "react-router-dom";
import { detailedexperience } from "../components/DetailedExperience.ts"

export default function ProjectPage() {
  const { id } = useParams();
  const project = detailedexperience.find((p) => p.title === id);

  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return (
    <div className="max-h-full px-16 max-w-4xl max-w-full bg-black">
      <div className = "max-h-full px-16 4x1">
      <h1 className="text-3xl font-semibold text-blue-400">{project.title}</h1>
      ‎ 
      <p className="mt-2 text-white-400 flex justify-left">{project.description}</p>
      ‎ 
      <p className = "text-white-400">{project.blurbs}</p>
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
