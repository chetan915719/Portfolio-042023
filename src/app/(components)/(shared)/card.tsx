import Image from "next/image";

const WorkExperienceCard = ({ title, companyName, date, type, img }: any) => {
  return (
    <div className="md:flex shadow-2xl">
      <div className="w-full p-4 md:p-5 bg-gray-800 text-white">
        <div className="text-lg font-semibold uppercase mb-1">{title}</div>
        <div className="text-sm italic">{companyName}</div>
        <div className="flex justify-between items-center mt-3">
          <div className="text-sm">{date}</div>
          <div className="px-2 py-1 bg-indigo-500 text-white rounded-full text-sm">
            {type}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 flex items-center justify-center bg-gray-200">
        <Image src={img} alt="Company Logo" width={200} className="max-h-12" />
      </div>
    </div>
  );
};

export default WorkExperienceCard;
