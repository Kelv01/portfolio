import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { mySkills } from "./constant/myskills";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-16 py-32 sm:items-start">
          <section className="mb-20">
            <div className="leading-relaxed">
              <p className="text-primary pb-4 text-base md:text-lg lg:text-xl">
                Hi, my name is
              </p>
              <h1 className="pb-2 text-6xl font-bold">Kelvin Nungari.</h1>
              <h2 className="text-muted-foreground pb-12 text-6xl font-bold">
                I build things for the web.
              </h2>
              <p className="text-muted-foreground max-w-xl pb-4 text-pretty">
                I'm a Frontend Developer transitioning to Fullstack. I
                specialize in building exceptional digital experiences using
                modern web technologies like React, Next.Js, Typescript, and
                MongoDb.
              </p>
              <div className="flex flex-wrap gap-8 pt-4">
                <Button className="rounded px-4 py-4">
                  <Link href="/projects">view projects</Link>
                </Button>
                <Button variant="secondary" className="rounded px-4 py-4">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
          </section>
          <section className="py-28">
            <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-between">
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                <div>
                  <h2 className="mb-12 pb-12 text-4xl font-bold">About Me</h2>
                  <div className="text-muted-foreground space-y-6 text-sm leading-relaxed text-pretty">
                    <p>
                      Hello! My name is Kelvin and I enjoy creating things that
                      live on the internet. My interest in web development
                      started back in 2018 when I decided to try editing custom
                      Tumbir themes, turns out hacking together HTML & CSS
                      taught me alot about design and structure!
                    </p>

                    <p>
                      Fast-forward to today, and I've had the privilege of
                      working at an advertising agency, a start-up, and a huge
                      corporation. My main focus these days is building
                      accessible, inclusive products and digital experiences for
                      a variety of clients.
                    </p>

                    <p>
                      Lately, I've been expanding my skill set from frontend
                      technologies like React and Next.js to backend systems
                      using MongoDB and system architecture patterns, aiming to
                      become a well-rounded Fullstack Engineer.
                    </p>
                  </div>
                </div>
                <div className="py-20">
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="w-full max-w-[350px]">
                      <Image
                        src="/dellonsmall.jpg"
                        alt="potrait"
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="pb-8">
                <h2 className="mb-4 text-2xl font-semibold">
                  Skills & Technologies
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {mySkills.map((group, index) => {
                  const CategoryIcon = group.icon;

                  return (
                    <div key={index}>
                      <div className="bg-secondary/30 border-secondary leading-pretty rounded-xl border p-8 shadow-md transition-all">
                        <div className="mb-4 flex gap-2">
                          <CategoryIcon className="text-primary h-5 w-5" />
                          <h3 className="text-primary font-semibold">
                            {group.category}
                          </h3>
                        </div>

                        <div className="pt-4 text-sm">
                          {group.skills.map((skills, i) => {
                            const Icon = skills.icon;
                            return (
                              <div
                                key={i}
                                className="mb-4 flex items-center gap-2"
                              >
                                <Icon className="text-primary/80 h-5 w-5" />
                                <h3 className="">{skills.name}</h3>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}
