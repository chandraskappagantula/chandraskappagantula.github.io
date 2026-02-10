import { TimelineItem } from "./TimelineItem";
import { experience } from "../components/Experience.ts"



export function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto mt-16">

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-400 to-blue-400" />

      <div className="space-y-20"> {experience.map((experience, index) => (
         <TimelineItem experience = {experience} side={index % 2 === 0 ? "left" : "right"} /> ))} </div>
     
    </div>
  );
}
