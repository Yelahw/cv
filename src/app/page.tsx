import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { InterestCard } from "@/components/interest-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16">
      <section className="mx-auto w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <span className="max-w-md text-pretty pb-2 font-mono text-lg text-muted-foreground">
              {RESUME_DATA.about}
            </span>
            <span className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3 print:hidden" />
                {RESUME_DATA.location}
              </a>
            </span>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span>{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span>{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          {/* <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar> */}
        </div>
        <Section className="mt-6 print:hidden">
          <div className="-mx-3 grid grid-cols-1 gap-3 border-b py-1 pl-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-xl font-bold">About</h2>
          </div>

          {RESUME_DATA.summary.map((p, id) => (
            <p
              key={id}
              className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]"
            >
              {p}
            </p>
          ))}
        </Section>

        <Section className="mt-4 text-pretty">
          <div className="inline-flex gap-x-1 px-0">
            {RESUME_DATA.mainSkills.map((skill) => (
              <Badge variant="outline" key={skill} className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </Section>

        <Section className="mt-6">
          <div className="-mx-3 grid grid-cols-1 gap-3 border-b py-1 pl-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-xl font-bold">Work Experience</h2>
          </div>

          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="break-inside-avoid">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center gap-x-3 font-semibold leading-none">
                      <span className="h-2 w-2 rounded-full bg-primary print:hidden"></span>
                      <span className="text-lg">{work.title}</span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>
                </CardHeader>
                <a className="mr-2 font-mono underline" href={work.link}>
                  {work.company}
                </a>
                <span className="inline-flex gap-x-1">
                  {work.badges.map((badge) => (
                    <Badge
                      className="align-middle text-[10px] print:px-1 print:py-0.5 print:leading-tight"
                      key={badge}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
                {work.missions.map((mission) => (
                  <CardContent
                    key={mission.description}
                    className="mb-4 text-xs print:text-[10px]"
                  >
                    {work.missions.length > 1 && (
                      <h4 className="mt-2 font-mono text-sm font-bold leading-none print:text-[12px]">
                        - {mission.title}
                      </h4>
                    )}
                    <p className="mt-2 print:text-[12px]">
                      {mission.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1 print:hidden">
                      {mission.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="text-xs print:text-[10px]"
                          variant="outline"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="hidden print:flex">
                      <span>
                        {mission.technologies.map((tech, id) =>
                          id == mission.technologies.length - 1
                            ? `${tech}.`
                            : `${tech}, `,
                        )}
                      </span>
                    </div>
                  </CardContent>
                ))}
              </Card>
            );
          })}
        </Section>

        <Section className="mt-6">
          <div className="-mx-3 grid grid-cols-1 gap-3 border-b py-1 pl-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-xl font-bold">Education</h2>
          </div>

          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex justify-center gap-x-3 font-semibold leading-none">
                      <span className="h-2 w-2 translate-y-1 rounded-full bg-primary print:hidden"></span>
                      {education.degree}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.school}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="mt-6 scroll-mb-16 print:hidden">
          <div className="-mx-3 grid grid-cols-1 gap-3 border-b py-1 pl-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-xl font-bold">Projects</h2>
          </div>

          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section className="mt-6 print:hidden">
          <div className="-mx-3 grid grid-cols-1 gap-3 border-b py-1 pl-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="text-xl font-bold">Activities</h2>
          </div>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-2 md:grid-cols-2 lg:grid-cols-2">
            {RESUME_DATA.activities.map((activity) => {
              return (
                <InterestCard
                  key={activity.title}
                  title={activity.title}
                  description={activity.description}
                  link={"link" in activity ? activity.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
