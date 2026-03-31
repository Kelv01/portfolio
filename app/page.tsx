import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className=" min-h-screen ">
        <main className="flex min-h-screen w-full max-w-7xl mx-auto flex-col items-center justify-between py-32 px-16 sm:items-start">
          <section className="mb-20">
            <div className=" leading-relaxed">
              <p className="text-base md:text-lg lg:text-xl text-primary pb-4 ">
                Hi, my name is
              </p>
              <h1 className="text-6xl font-bold pb-2">Kelvin Nungari.</h1>
              <h2 className="text-6xl text-muted-foreground font-bold pb-12">
                I build things for the web.
              </h2>
              <p className="text-muted-foreground text-pretty pb-4 max-w-xl">
                I'm a Frontend Developer transitioning to Fullstack. I
                specialize in building exceptional digital experiences using
                modern web technologies like React, Next.Js, Typescript, and
                MongoDb.
              </p>
              <div className="flex gap-8 pt-4 flex-wrap">
                <Button className="py-4 px-4 rounded">
                  <span>view projects</span>
                </Button>
                <Button variant="secondary" className="py-4 px-4 rounded">
                  Contact
                </Button>
              </div>
            </div>
          </section>
          <section className="py-28 ">
            <section className="flex min-h-screen w-full max-w-7xl mx-auto  items-center justify-between">
              <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 ">
                <div>
                  <h2 className="font-bold text-4xl pb-12 mb-12">About Me</h2>
                  <div className="space-y-6 text-pretty text-muted-foreground text-sm leading-relaxed">
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
                    <br />
                    <p>
                      Lately, I've been expanding my skill set from frontend
                      technologies like React and Next.js to backend systems
                      using MongoDB and system architecture patterns, aiming to
                      become a well-rounded Fullstack Engineer.
                    </p>
                  </div>
                </div>
                <div className="py-20 ">
                  <div className="flex justify-center items-center lg:justify-end">
                    <Image
                      src="/dellonsmall.jpg"
                      alt="potrait"
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}
