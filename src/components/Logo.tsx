import { LuTreePine as TreePine } from "react-icons/lu";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <TreePine size={55} color="#65b344" />
      <span className="font-bold text-2xl text-[#65b344]">DevTree</span>
    </div>
  );
};
