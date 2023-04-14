const SkillBar = ({ skillName, skillLevel }: any) => {
  return (
    <div className="flex flex-col my-2">
      <span className="text-lg font-bold">{skillName}</span>
      <div className="bg-gray-300 rounded-full h-2 my-2">
        <div
          className="bg-green-500 rounded-full h-2"
          style={{ width: skillLevel + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
