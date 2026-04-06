import { motion } from "motion/react";
import type { Certificate } from "../../contexts/educationContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getMultipleRowAnimation } from "../../hooks/responsiveFadeInHook";

export default function Certification({ data }: { data: Certificate[] }) {
  return (
    <ol className="relative space-y-8 md:space-y-12 max-w-2xl mx-auto">
      {data.map((d) => (
        <motion.li
          {...getMultipleRowAnimation()}
          key={d.title}
          className="relative size-full flex gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 active:bg-white/10 transition duration-300"
        >
          <img className="flex-none size-27" src={d.logo} />
          <div className="flex flex-col">
            <h3 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2">
              {d.title}
            </h3>
            <p className="text-slate-100 font-semibold text-sm md:text-base">
              {d.issuer}
            </p>
            <p className="text-slate-500 text-sm">{d.issueDate}</p>
            {d.credentialLink && (
              <a
                href={d.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-sm px-2 py-1 flex gap-2 bg-slate-500 text-white hover:text-slate-900 hover:bg-slate-200 transition-colors duration-300 mt-1 md:mt-2"
              >
                Show Credential <FaExternalLinkAlt className="self-center" />
              </a>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
