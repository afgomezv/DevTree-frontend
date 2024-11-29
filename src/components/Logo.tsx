import { TreePine } from "lucide-react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <TreePine size={45} color="#65b344" />
      <span className="font-bold text-2xl text-[#65b344]">DevTree</span>
    </div>
  );
};
