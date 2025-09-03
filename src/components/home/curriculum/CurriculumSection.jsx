import { useState } from "react";
import coursesData from "@/data/courses.json";
import { CourseCard } from "./CourseCard";

export const CurriculumSection = () => {
  const [hovered, setHovered] = useState(null);
  const [openSemesters, setOpenSemesters] = useState(() => coursesData.map(() => true));
  const findCourseByCode = (code) => {
    for (const sem of coursesData) {
      const found = sem.courses.find((c) => c.code === code);
      if (found) return found;
    }
    return null;
  };

  return (
    <section id="curriculum" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary"> Curriculum</span>
        </h2>
				<p className="mb-8">
					These are my courses from the Industrial Engineering program at the University of Chile. Hover over a course to see its prerequisites and which courses it opens. 
					For more information on the work done in each course, please refer to my <a href="https://github.com/AdolfoRV/Cs-journey" target="_blank" className="text-glow text-primary font-bold">Cs journey repository</a>.
					<br />
					In case you're interested in learning more about the courses, feel free to visit my <a href="/notes" className="text-glow text-primary font-bold">Notes</a>.
				</p>

        <div className="flex flex-col gap-5">
          {coursesData.map((semester, semIdx) => (
            <div key={semIdx} className="flex flex-col gap-2">
              <h3
                className="font-semibold text-sm mb-1 cursor-pointer select-none flex items-center gap-2"
                onClick={() => setOpenSemesters((prev) => prev.map((v, i) => i === semIdx ? !v : v))}
              >
                <span>Semester {semester.semester}</span>
                <span>{openSemesters[semIdx] ? "▲" : "▼"}</span>
              </h3>
              {openSemesters[semIdx] && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {semester.courses.map((course, idx) => {
                    const hoveredCourse = hovered ? findCourseByCode(hovered) : null;
                    const isPrereq = hoveredCourse && Array.isArray(hoveredCourse.prerequisites) && hoveredCourse.prerequisites.includes(course.code);
                    const isOpened = hoveredCourse && Array.isArray(hoveredCourse.opensCourses) && hoveredCourse.opensCourses.includes(course.code);
                    return (
                      <CourseCard
                        key={course.code}
                        course={course}
                        hovered={hovered}
                        isPrereq={isPrereq}
                        isOpened={isOpened}
                        setHovered={setHovered}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
