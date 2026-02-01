import type { Image } from "../../contexts/pageContext";

export default function Gallery({ data }: { data: Image[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      {data.map((item, i) => (
        <div
          key={`image-${i}`}
          className="group relative overflow-hidden rounded-xl md:rounded-2xl h-56 md:h-68 lg:h-80 bg-linear-to-br from-amber-200 to-orange-200"
        >
          <img
            className="w-full h-full object-cover group-hover:scale-110 group-active:scale-110 transition duration-500"
            src={item.url}
            alt={item.alt}
          />
          <div className="absolute inset-0 bg-linear-to-t from-coffee-900/80 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition duration-300 flex items-end p-4 md:p-5 lg:p-6">
            <p className="text-white font-semibold text-sm md:text-base lg:text-lg">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
