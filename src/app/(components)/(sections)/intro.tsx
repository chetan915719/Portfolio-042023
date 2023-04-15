import Image from "next/image";
import profilePic from "../../img/profilePic.webp";
import { FaGithub, FaLinkedin, FaXing} from "react-icons/fa";

export default function Introduction() {
  return (
    <section id="intro" className="h-screen">
      <div className="flex flex-wrap justify-between mx-auto h-screen items-center">
        <div className="w-full order-2 lg:w-1/2 lg:order-1">
          <p className="mb-1 font-mono text-4xl md:text-6xl">Hi, I&apos;m</p>{" "}
          <br className="block md:hidden" />
          <p
            id="name"
            className="text-4xl h-20 pt-2 overflow-x-hidden whitespace-nowrap"
          >
            Chetan Tiwari 👋.
          </p>
          <p
            id="title"
            className="text-2xl h-18 overflow-x-hidden whitespace-nowrap"
          >
            Full Stack Developer | Data Engineer | Traveller
          </p>
          <div className="flex my-10">
            <a
              href="https://github.com/chetan915719"
              className="mx-3"
              aria-label="Github"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-tiwari-5055233/"
              className="mx-3"
              aria-label="Linkedin"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.xing.com/profile/Chetan_Tiwari2"
              className="mx-3"
              aria-label="Xing"
            >
              <FaXing size={32} />
            </a>
          </div>
        </div>
        <div className="h-50 w-full  order-1 lg:w-1/2 lg:order-2 flex justify-center">
          <Image
            src={profilePic}
            alt="profilePic"
            priority
            placeholder="blur"
            height={300}
            className="dp"
          />
        </div>
      </div>
    </section>
  );
}
