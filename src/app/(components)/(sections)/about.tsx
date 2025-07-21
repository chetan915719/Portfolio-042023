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
          Hello! I&#39;m a Data Engineer and full-stack developer based in
          India, with a deep interest in scalable system design and a long-term
          goal of becoming a solution architect.
        </p>
        <p>
          I began my career in 2020, initially working on full-stack development
          using Angular, Django, and Node.js. During this phase, I built several
          enterprise-grade applications and gained hands-on experience with
          Azure Cloud and Azure DevOps, laying a strong foundation in
          cloud-native development.
        </p>
        <p>
          Over time, I transitioned into data engineering and currently work as
          a Module Lead in a large-scale healthcare data engineering project. My
          work primarily involves developing distributed ETL pipelines using
          PySpark, automating workflows with Control-M, and ensuring
          HIPAA-compliant handling of sensitive healthcare data.
        </p>
        <p>
          My professional journey has helped me become proficient in
          technologies like Apache Spark, Hive, HDFS, AWS, Azure, and CI/CD
          pipelines, along with solid skills in designing robust, secure, and
          maintainable data solutions across industries including healthcare and
          banking.
        </p>
        <p>
          I enjoy working on projects that challenge conventional thinking and
          offer opportunities to build impactful systems that make a difference.
          I believe in using technology not just for business optimization, but
          for meaningful, positive change.
        </p>
        <p>
          Outside of work, I love to travel and immerse myself in new cultures.
          Exploring local life and learning from diverse experiences keeps me
          grounded and inspired.
        </p>
        <p>
          For me, work is a means to live a fulfilling life, not the other way
          around. I strongly believe in a healthy work-life balance to foster
          sustainable growth, creativity, and happiness.
        </p>
        <p>
          If you&#39;re interested in collaborating or would just like to
          connect, feel free to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/chetan-tiwari-5055233/"
            target="_blank"
          >
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
