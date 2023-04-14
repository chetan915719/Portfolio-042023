import Image from "next/image";
import test from "../img/test.png";
import { FaGithub, FaLinkedin, FaXing} from "react-icons/fa";

export default function Introduction() {
  return (
    <section id="intro" className="pt-24">
      <div className="flex justify-around mx-auto">
        <div className="mx-10">
          <p className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
            Hi, I&apos;m
          </p>{" "}
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
            <a href="https://github.com/chetan915719" className="mx-3">
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/chetan-tiwari-5055233/"
              className="mx-3"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://www.xing.com/profile/Chetan_Tiwari2"
              className="mx-3"
            >
              <FaXing size={32} />
            </a>
          </div>
        </div>
        <div className="mx-10 h-50">
          <Image
            src={test}
            alt="test"
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
