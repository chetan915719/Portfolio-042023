import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="about-me" className="pt-24">
      <div className="flex justify-center">
        <div className="flex ">
          <FaQuoteLeft size={25} />{" "}
          <p className="mx-5 text-lg">
            I want to help others make the right decisions by choosing the right
            tech stack and architecture.
          </p>
          <FaQuoteRight size={25} />
        </div>
      </div>
      <div className="my-20 text-lg tracking-widest">
        <p>
          Hello! I am a full-stack developer based in India with a passion for
          technology and a goal to become a solution architect.
        </p>
        <p>
          I started my career in 2020 and have gained experience working with
          Angular, Django, and Node.js. I&apos;ve also worked on projects using
          Azure Cloud and Azure DevOps, which has given me a strong foundation
          in cloud computing.
        </p>
        <p>
          Currently, I&apos;m working as a data engineer using PySpark, which
          has helped me develop my skills in data processing and analysis.
        </p>
        <p>
          My favourite projects are the ones that challenge me and allow me to
          learn something new while creating an impact on society. I believe
          that technology should be used for the betterment of society, and I
          strive to make that a reality.
        </p>
        <p>
          When I&apos;m not working, I love to travel and explore new places.
          Meeting locals and experiencing new cultures is one of my favourite
          things to do.
        </p>
        <p>
          For me, work is a means to live, not the other way around. I believe
          in maintaining a healthy work-life balance to achieve long-term
          success and happiness.
        </p>
        <p>
          If you&apos;re interested in working together or just want to say hi,
          please feel free to connect with me on{" "}
          <a href="https://www.linkedin.com/in/chetan-tiwari-5055233/">
            LinkedIn
          </a>{" "}
          or email me at{" "}
          <a href="mailto:chetantiwari661@gmail.com">
            chetantiwari661@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
