import { SocialNetwork, UserHandle } from "../types";
import { IoAlertCircleOutline } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

type HandleDataProps = {
  data: UserHandle;
};

export default function HandleData({ data }: HandleDataProps) {
  const links: SocialNetwork[] = JSON.parse(data.links).filter(
    (link: SocialNetwork) => link.enabled
  );
  return (
    <div className="space-y-4 text-white">
      <p className="text-5xl text-center font-black">{data.handle}</p>
      {data.image && <img src={data.image} className="max-w-[250px] mx-auto" />}
      <p className="text-lg text-center font-bold">{data.description}</p>
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="flex flex-col gap-4">
          {links.length ? (
            <>
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Mis Redes Sociales
              </h2>
              <div className="grid gap-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white hover:bg-gray-50 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors duration-300">
                          <img
                            src={`/social/icon_${link.name}.svg`}
                            className="w-6 h-6 object-contain"
                            alt={`Ícono de ${link.name}`}
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {link.name.charAt(0).toUpperCase() +
                            link.name.slice(1)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Visita mi perfil
                        </p>
                      </div>
                      <TbExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                  </a>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <IoAlertCircleOutline className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    No hay enlaces disponibles
                  </h3>
                  <p className="text-gray-500">
                    Este perfil aún no tiene redes sociales vinculadas
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
