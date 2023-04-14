import SkillBar from "../(shared)/skill-bar";
import SectionHeading from "../(shared)/section-heading";

export default function Skills() {
  return (
    <section id="skills" className="pt-24">
      <div className="flex justify-center flex-col items-center">
        <SectionHeading name={"Skills"} />
        <div className="flex flex-wrap my-4 justify-center">
          <p className="mx-2">1 - Basic</p>
          <p className="mx-2">2 - Novice</p>
          <p className="mx-2">3 - Intermediate</p>
          <p className="mx-2">4 - Advanced</p>
          <p className="mx-2">5 - Expert</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-center text-xl font-bold">Cloud Service</h2>
          <SkillBar skillName={"Azure Cloud - 4"} skillLevel={80} />
          <SkillBar skillName={"AWS Cloud - 4"} skillLevel={80} />
          <SkillBar skillName={"Azure DevOps - CI/CD - 4"} skillLevel={80} />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-center text-xl">Web Development</h2>
          <SkillBar skillName={"Django - 5"} skillLevel={90} />
          <SkillBar skillName={"Django RFW - 5"} skillLevel={100} />
          <SkillBar skillName={"Angular - 5"} skillLevel={90} />
          <SkillBar skillName={"NodeJS - 4"} skillLevel={70} />
          <SkillBar skillName={"NextJS - 3"} skillLevel={50} />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
          <h2 className="text-center text-xl">Data Engineering</h2>
          <SkillBar skillName={"AWS Glue - 4"} skillLevel={70} />
          <SkillBar skillName={"PySpark - 4"} skillLevel={80} />
          <SkillBar skillName={"AirFlow - 3"} skillLevel={60} />
        </div>
      </div>
    </section>
  );
}
