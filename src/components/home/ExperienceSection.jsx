import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import TimelineItem from "@/components/ui/TimelineItem";
import credentialsData from "@/data/education/credentials.json";
import jobsData from "@/data/jobs.json";

export const ExperienceSection = () => {
  const work = jobsData?.career ?? [];
  const education = credentialsData?.education ?? [];

  return (
    <section id="experience" className="relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="mb-2 grid w-full grid-cols-2">
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="work">
            <div className="rounded-lg border bg-card">
              <ul className="ml-10 border-l">
                {work.map((exp, id) => (
                  <TimelineItem key={id} experience={exp} />
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="rounded-lg border bg-card">
              <ul className="ml-10 border-l">
                {education.map((exp, id) => (
                  <TimelineItem key={id} experience={exp} />
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};