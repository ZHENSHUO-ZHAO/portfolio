import { FaImage } from "react-icons/fa6";
import type { Image } from "../../contexts/pageContext";
import { useState } from "react";

export default function ImageSlide({ data }: { data: Image }) {
  const [loadedUrl, setLoadedUrl] = useState<string | null>(null);
  const isLoading = loadedUrl !== data.url;

  return (
    <div className="relative size-full rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-linear-to-br from-slate-200 to-slate-400 dark:from-slate-600 dark:to-slate-800 overflow-clip">
      <img
        className="relative size-full object-cover"
        src={data.url}
        alt={data.alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoadedUrl(data.url)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-radial from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700">
          <FaImage className="text-6xl block mx-auto align-middle h-full text-slate-400 animate-pulse" />
        </div>
      )}
    </div>
  );
}
