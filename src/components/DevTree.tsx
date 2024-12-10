import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { NavbarAccount } from "./NavBarAccount";
import NavigationTabs from "./NavigationTabs";
import { SocialNetwork, User } from "../types";
import DevTreeLink from "./DevTreeLink";

type DevTreeProps = {
  data: User;
};

export default function DevTree({ data }: DevTreeProps) {
  const [enabledLinks, setEnabledLinks] = useState<SocialNetwork[]>(
    JSON.parse(data.links).filter((item: SocialNetwork) => item.enabled)
  );

  useEffect(() => {
    setEnabledLinks(
      JSON.parse(data.links).filter((item: SocialNetwork) => item.enabled)
    );
  }, [data]);

  return (
    <>
      <NavbarAccount />
      <div className="bg-gray-100  min-h-screen py-10">
        <main className="mx-auto max-w-5xl p-10 md:p-0">
          <NavigationTabs />

          <div className="flex justify-end">
            <Link
              className="font-bold text-right text-slate-800 text-2xl"
              to={""}
              target="_blank"
              rel="noreferrer noopener"
            >
              Visitar Mi Perfil: /{data.handle}
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="flex-1 ">
              <Outlet />
            </div>
            <div className="w-full md:w-96 bg-slate-800 px-5 py-10 space-y-6">
              <p className="text-center text-3xl text-white">{data.handle}</p>
              {data.image && (
                <img
                  src={data.image}
                  alt="image perfil"
                  className="mx-auto max-w-[250px]"
                />
              )}
              <p className="text-center text-lg font-black text-white">
                {data.description}
              </p>
              <div className="mt-20 flex flex-col gap-5">
                {enabledLinks.map((link) => (
                  <DevTreeLink key={link.name} link={link} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Toaster className="mt-20" richColors position="top-right" />
    </>
  );
}
