import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-7xl flex-col sm:px-6 lg:px-14">
        <div className="flex items-center justify-center gap-12 px-12 text-center">
          <div>
            <FiGithub />
            <a
              href="https://alx-project-nexus-pionus-safaris.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            />
          </div>
          <div>
            <FaLinkedin />
            <a
              href="https://alx-project-nexus-pionus-safaris.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            />
          </div>
          <div>
            <BsTwitterX />
            <a
              href="https://alx-project-nexus-pionus-safaris.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
