import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FiGithub } from "react-icons/fi";

import Image from "next/image";
import Link from "next/link";
import { mySkills } from "./constant/myskills";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, ExternalLink } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <section className="min-h-screen">
        <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-12 py-20 sm:items-start sm:px-6 lg:px-14 lg:py-32">
          <section className="pb-12">
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
          <section className="min-h-screen">
            <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-12 py-20 sm:items-start sm:px-6 lg:px-14 lg:py-32">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
            <section className="py-8">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-14 sm:items-start sm:px-6 lg:px-14">
                <div className="pb-2">
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
              </div>
            </section>
            <section className="py-20">
              <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-14 sm:items-start sm:px-6 lg:px-14">
                <div className="pb-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Projects I have Built
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
                  <Card className="relative w-full overflow-hidden pt-0">
                    {/*<div className="absolute z-30 aspect-video w-full bg-black/3 object-cover" />*/}
                    <Image
                      src="/pionus.png"
                      alt="Pionus Safaris website"
                      className="h-auto w-full object-cover"
                      width={500}
                      height={500}
                    />
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="mb-4 text-lg sm:text-xl">
                        Pionus Safaris
                      </CardTitle>
                      <CardDescription className="mb-4 text-sm leading-relaxed sm:text-base">
                        A modern frontend web platform for discovering,
                        organizing, and preparing safari tour bookings in East
                        Africa. Built with Next.js (Pages Router) and
                        TypeScript, this project focuses on scalable UI
                        architecture, strong typing, and clean separation of
                        concerns while remaining fully backend-ready.
                      </CardDescription>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwindcss</Badge>
                      </div>
                    </CardHeader>

                    <CardFooter className="bg-card flex flex-wrap gap-4 border-t-transparent">
                      <a
                        href="https://github.com/Kelv01/alx-project-nexus.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {" "}
                        <FiGithub className="h-5 w-5" /> Code
                      </a>
                      <a
                        href="https://alx-project-nexus-pionus-safaris.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {" "}
                        <ExternalLink className="h-5 w-5" /> Live Demo
                      </a>
                    </CardFooter>
                  </Card>

                  <Card className="relative w-full overflow-hidden pt-0">
                    {/*<div className="absolute inset-0 z-30 aspect-video bg-black/3" />*/}
                    <Image
                      src="/movieverse.png"
                      alt="Movieverse website"
                      className="h-auto w-full object-cover"
                      width={500}
                      height={500}
                    />
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="mb-4 text-lg sm:text-xl">
                        MovieVerse
                      </CardTitle>
                      <CardDescription className="mb-4 text-sm leading-relaxed sm:text-base">
                        MovieVerse is a modern React application for discovering
                        movies, exploring genres, and reading reviews. It uses
                        the TMDb API to provide up-to-date movie data and
                        trending titles. Built with Vite, Tailwind CSS, Zustand,
                        and React Router.
                      </CardDescription>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwindcss</Badge>
                      </div>
                    </CardHeader>

                    <CardFooter className="bg-card flex flex-wrap gap-4 border-t-transparent">
                      <a
                        href="https://github.com/Kelv01/movie-verse.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {" "}
                        <FiGithub className="h-5 w-5" /> Code
                      </a>
                      <a
                        href="https://movie-verse-tau-gray.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {" "}
                        <ExternalLink className="h-5 w-5" /> Live Demo
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-7x mx-auto w-full px-14 sm:items-start sm:px-6 lg:px-14">
                {/*className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between px-14 sm:items-start sm:px-6 lg:px-16"*/}
                <div className="mb-6 text-center leading-relaxed text-pretty">
                  <h2 className="text-2xl font-bold">Experience & Growth</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="leading-relaxed text-pretty">
                    <Card className="border-l-sidebar-accent cursor-pointer border transition-all duration-600 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
                      <CardHeader>
                        <CardTitle className="pb-4">Current Focus</CardTitle>
                        <CardDescription>
                          Transitioning into Backend & AI integration building
                          APis and exploring intelligent aplications
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className="leading-relaxed text-pretty">
                    <Card className="border-r-sidebar-accent cursor-pointer border transition-all duration-600 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
                      <CardHeader>
                        <CardTitle className="pb-4">Core Strength</CardTitle>
                        <CardDescription>
                          Frontend development with React, Next.js & modern
                          UI/UX best practices
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-2">
              <div className="max-w-7x mx-auto w-full px-14 sm:items-start sm:px-6 lg:px-14">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="pb-4 leading-relaxed text-pretty">
                    <li className="text-primary pb-4">
                      <span className="text-foreground">2025 - present</span>
                    </li>
                    <h3 className="pb-2 font-semibold">
                      Backend & AI transition
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Building APis with Node.js and exploring AI integrations
                    </p>
                  </div>

                  <div className="pb-4">
                    <li className="text-accent pb-4">
                      <span className="text-foreground">Late 2025</span>
                    </li>
                    <h3 className="pb-2 font-semibold">Fronend ProDev (ALX)</h3>
                    <p className="text-muted-foreground text-sm">
                      Advanced React, Next.js & Typescript projects, and
                      Playwright testing
                    </p>
                  </div>

                  <div className="pb-4">
                    <li className="text-accent pb-4">
                      <span className="text-foreground"> Mid 2025</span>
                    </li>
                    <h3 className="pb-2 font-semibold">
                      Fronend Development (ALX)
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      HTML, CSS, Javascript & UI foundations
                    </p>
                  </div>

                  <div className="pb-4">
                    <li className="text-accent pb-4">
                      <span className="text-foreground"> Early 2025</span>
                    </li>
                    <h3 className="pb-2 font-semibold">
                      Professional Foundations (ALX)
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Workplace skills, Teamwork & communication
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="max-w-7x sm:items-star mx-auto w-full px-14 sm:px-6 lg:px-14">
                <div>
                  <Card className="ring-accent/30 shadow-lg">
                    <CardHeader>
                      <CardTitle className="p-4 text-center text-2xl font-semibold">
                        Get In Touch
                      </CardTitle>
                      <CardDescription className="text-center text-sm leading-relaxed text-pretty">
                        Whether you have a question or just want to say hi, I'll
                        try my best to get back to you! Currently open for new
                        opportunities.
                      </CardDescription>
                    </CardHeader>
                    <div className="p-4">
                      <Field className="p-4">
                        <FieldLabel className="pb-4">Name</FieldLabel>
                        <Input
                          id="fieldgroup-name"
                          type="name"
                          placeholder="Name"
                          className="bg-secondary rounded-xl"
                        />
                      </Field>
                      <Field className="p-4">
                        <FieldLabel className="pb-4">Email</FieldLabel>
                        <Input
                          id="fieldgroup-name"
                          type="email"
                          placeholder="example@email.com"
                          className="bg-secondary rounded-xl"
                        />
                      </Field>
                      <Field className="gap-4 p-4">
                        <FieldLabel className="pb-4">Message</FieldLabel>
                        <Textarea
                          id="textarea-message"
                          placeholder="Type your message"
                          className="rounded-xl"
                        />
                        <Button className="hover:bg-accent rounded-xl py-6 hover:text-white">
                          send message
                        </Button>
                      </Field>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}
