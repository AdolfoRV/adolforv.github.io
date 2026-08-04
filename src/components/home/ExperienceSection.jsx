import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { TimelineItem } from "@/components/ui/TimeLineItem";
import credentialsData from "@/data/education/credentials.json";
import jobsData from "@/data/jobs.json";

export const ExperienceSection = () => {
  const work = jobsData?.career ?? [];
  const education = credentialsData?.education ?? [];
  const certifications = credentialsData?.certifications ?? [];

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
                {/* Formal Education */}
                {education.map((exp, id) => (
                  <TimelineItem key={id} experience={exp} />
                ))}

                {/* Certifications */}
                <li className="relative ml-10 py-4">
                  <h3 className="font-semibold uppercase">
                    Certifications
                  </h3>
                </li>
                {certifications.map((exp, id) => (
                  <TimelineItem key={`cert-${id}`} experience={exp} />
                ))}

                {/* Certificates */}
                {/* <li className="relative ml-10 py-4">
                  <h3 className="font-semibold uppercase">
                    Certificates
                  </h3>
                </li>
                {certificates.map((exp, id) => (
                  <TimelineItem key={`cert-${id}`} experience={exp} />
                ))} */}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};