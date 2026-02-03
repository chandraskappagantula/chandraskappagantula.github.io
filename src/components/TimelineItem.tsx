import { TimelineCard } from "./TimelineCard";
type Props = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  side: "left" | "right";
};
export function TimelineItem({ title, subtitle, date, description, side }: Props) {
    const isLeft = side === "left";

  return (
    <div className="grid grid-cols-[1fr_40px_1fr] items-start">

      <div className={isLeft ? "pr-8 text-right justify-end" : ""}>
        {isLeft && <TimelineCard {...{ title, subtitle, date, description, side }} />}
      </div>

      <div className="relative flex justify-center">
        <div className="w-3 h-3 rounded-full bg-blue-500 mt-2" />
      </div>

      <div className={!isLeft ? "pl-8 justify-start" : ""}>
        {!isLeft && <TimelineCard {...{ title, subtitle, date, description, side }} />}
      </div>
    </div>
  );
}