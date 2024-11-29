import { ChangeEvent } from "react";

import { Select, SelectItem } from "@nextui-org/react";
import { HiBookmarkSquare, HiUser } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { key: "/admin", label: "Links", href: "/admin", icon: HiBookmarkSquare },
  {
    key: "/admin/profile",
    label: "Mi Perfil",
    href: "/admin/profile",
    icon: HiUser,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationTabs() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <div className="mb-5">
      <div className="sm:hidden">
        <Select
          id="tabs"
          variant="bordered"
          label="Seleccione una opción"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          onChange={handleChange}
        >
          {tabs.map((tab) => (
            <SelectItem value={tab.href} key={tab.key}>
              {tab.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.key}
                to={tab.href}
                className={classNames(
                  location.pathname === tab.href
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "group inline-flex items-center border-b-2 py-4 px-1 text-xl"
                )}
              >
                <tab.icon
                  className={classNames(
                    location.pathname === tab.href
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "-ml-0.5 mr-2 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
