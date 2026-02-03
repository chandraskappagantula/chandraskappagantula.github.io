type Props = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  side: "left" | "right";
};


export function TimelineCard({title, subtitle, date, description, side }: Props) {
    const isRightAligned = side == "right";
  return (
    <div
      className={`
        rounded-xl border border-white/10 bg-white/5 p-6
        ${isRightAligned ? "text-right" : "text-left"}
      `}
    >
      {/* Header: title + date */}
      <div
        className={`
          flex items-start gap-4 justify-between
          ${isRightAligned ? "flex-row-reverse" : ""}
        `}
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>

        <span className="text-xs text-gray-400 whitespace-nowrap">
          {date}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-300">
        {description}
      </p>
    </div>
  );
}



