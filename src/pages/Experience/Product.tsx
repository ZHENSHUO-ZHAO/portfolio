import React from "react";
import { FaGlobe } from "react-icons/fa6";
import type { CardColor } from "../../contexts/pageContext";

export default function Product({
  products,
  markets,
  color,
}: {
  products: string[];
  markets?: string[];
  color: CardColor;
}) {
  return (
    <div className={`relative ${color.bg} rounded-lg p-3 md:p-4 mb-3 md:mb-4`}>
      <p
        className={`text-xs font-bold ${color.tags && color.tags[1].text} uppercase mb-1 md:mb-2`}
      >
        products
      </p>
      <p
        className={`mb-1 md:mb-3 text-xs md:text-sm ${color.tags && color.tags[0].text} font-medium`}
      >
        {products.map((p, i, arr) => (
          <React.Fragment key={p}>
            <span>{p}</span>
            {i !== arr.length - 1 && <span className="mx-1.5">•</span>}
          </React.Fragment>
        ))}
      </p>
      {markets && (
        <p
          className={`text-xs ${color.tags && color.tags[0].icon} inline-flex gap-1 items-start`}
        >
          <FaGlobe className="mt-1" />
          Markets: {markets.join(", ")}
        </p>
      )}
    </div>
  );
}
