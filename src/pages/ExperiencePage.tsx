import { useParams } from "react-router-dom";
import { detailedexperience } from "../components/DetailedExperience.ts"

export default function ProjectPage() {
  const { id } = useParams();
  const project = detailedexperience.find((p) => p.title === id);

  if (!project) {
    return <div className="p-8">Project not found.</div>;
  }

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <p className="mt-2 text-gray-400">{project.description}</p>

    </div>
  );
}
