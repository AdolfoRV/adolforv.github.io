import { cn } from "@/lib/utils";

export function CourseCard({
  course,
  hovered,
  isPrereq,
  isOpened,
  setHovered,
}) {
  return (
    <div
      className={cn(
        "bg-card p-3 rounded-md shadow-xs transition-all cursor-pointer border border-transparent text-xs relative",
        hovered === course.code && "border-primary bg-primary/10",
        isPrereq && "!border-blue-500 border-primary bg-primary/10",
        isOpened && "!border-green-500 border-primary bg-primary/10"
      )}
      style={{ minHeight: 60 }}
      onMouseEnter={() => setHovered(course.code)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="font-bold text-primary mb-0.5 text-xs">{course.code}</div>
      <div className="text-xs mb-0.5">{course.name_en}</div>
      {/* <div className="text-xs mb-0.5">{course.name}</div> */}
      <div className="absolute left-2 top-1 text-[9px] text-muted-foreground">
        {course.credits}cr
      </div>
    </div>
  );
}
