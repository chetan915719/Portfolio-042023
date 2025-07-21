import SectionHeading from "../(shared)/section-heading";
import { v4 as uuidv4 } from "uuid";
import WorkExperienceCard from "../(shared)/card";
import Deloitte_Logo from "../../img/Deloitte_Logo.png";
import Celebal_Logo from "../../img/celebal_logo.png";

const experienceData = [
  {
    title: "Analyst",
    company: "Deloitte USI",
    date: "Jun 2022 - Present",
    type: "Full Time",
    img: Deloitte_Logo,
  },
  {
    title: "Full Stack Developer",
    company: "Celebal Technologies Pvt. Ltd.",
    date: "May 2021 - Jun 2022",
    type: "Full Time",
    img: Celebal_Logo,
  },
  {
    title: "Intern",
    company: "Celebal Technologies Pvt. Ltd.",
    date: "May 2020 - Apr 2021",
    type: "Internship",
    img: Celebal_Logo,
  },
];

export default function Work() {
  return (
    <section id="work" className="pt-24">
      <div className="flex justify-center flex-col items-center">
        <SectionHeading name={"Work Experience"} />
      </div>
      <div className="flex flex-wrap justify-between pt-10">
        {experienceData.map((data, index) => (
          <div key={uuidv4()} className="w-full lg:w-1/2 xl:w-1/3 p-4 h-60">
            <WorkExperienceCard
              title={data.title}
              companyName={data.company}
              date={data.date}
              type={data.type}
              img={data.img}
            ></WorkExperienceCard>
          </div>
        ))}
      </div>
    </section>
  );
}
