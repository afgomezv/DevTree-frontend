import { ChangeEvent } from "react";
import { Input, Switch } from "@nextui-org/react";
import { DevTreeLink } from "../types";

type DevTreeInputProps = {
  item: DevTreeLink;
  handleUrlChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnableLink: (socialNetwork: string) => void;
};

export default function DevTreeInput({
  item,
  handleUrlChange,
  handleEnableLink,
}: DevTreeInputProps) {
  return (
    <div className="bg-white shadow-sm p-5 flex items-center rounded-2xl gap-3">
      <div
        className="w-12 h-12 bg-cover"
        style={{ backgroundImage: `url('/social/icon_${item.name}.svg')` }}
      ></div>
      <Input
        type="text"
        variant="bordered"
        className="flex-1"
        value={item.url}
        onChange={handleUrlChange}
        name={item.name}
      />
      <Switch
        isSelected={item.enabled}
        onValueChange={() => handleEnableLink(item.name)}
      />
    </div>
  );
}
