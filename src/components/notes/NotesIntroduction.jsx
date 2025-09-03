import rawCourses from "@/data/courses.json";
import { Link } from "react-router-dom";

const NotesIntroduction = () => {
  // Flatten my courses
  const allCourses = rawCourses.flatMap((sem) => sem.courses);
  return (
    <section id="presentation" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight">
          <span className="text-primary opacity-0 animate-fade-in">Course Notes</span> 
					<span className="opacity-0 animate-fade-in-delay-1"> & </span>
					<span className="text-primary opacity-0 animate-fade-in-delay-2">Summaries</span>
        </h2>
				<p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
					Welcome! Here you'll find my summaries and code snippets for various
					courses I've taken. Click on a course to view its dedicated notes and
					resources.
				</p>
        <div className="py-10 grid gap-4 md:grid-cols-2 opacity-0 animate-fade-in-delay-4">
					{allCourses.map((course) => (
					<Link
						key={course.code}
						to={`/notes/${course.code}`}
						className="bg-card p-3 rounded-md shadow-xs transition-all cursor-pointer border border-transparent text-xs relative hover:border-primary hover:bg-primary/10"
					>
						<h2 className="text-xl font-semibold mb-1">{course.name_en}</h2>
						{/* <p className="text-sm text-foreground/60">{course.name_en}</p> */}
					</Link>
					))}
        </div>
      </div>
    </section>
  );
};

export default NotesIntroduction;