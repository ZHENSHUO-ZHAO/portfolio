import type { HybridText, TextChunk } from "../../contexts/pageContext";

export default function HybridStatement({ data }: { data: HybridText }) {
  return (
    <>
      {data.map((chunk, i) =>
        chunk.icon && chunk.text ? (
          <TextAndIcon key={`text-chunk-${i}`} chunk={chunk} />
        ) : chunk.icon ? (
          <Icon key={`text-chunk-${i}`} chunk={chunk} />
        ) : (
          <Text key={`text-chunk-${i}`} chunk={chunk} />
        ),
      )}
    </>
  );
}

function Icon({ chunk }: { chunk: TextChunk }) {
  return (
    <>
      {chunk.icon && (
        <chunk.icon className={`${chunk.style || ""} inline-block`} />
      )}
    </>
  );
}

function Text({ chunk }: { chunk: TextChunk }) {
  return <span className={chunk.style || ""}>{chunk.text}</span>;
}

function TextAndIcon({ chunk }: { chunk: TextChunk }) {
  const texts: string[] = chunk.text.split("/");
  return (
    <span
      className={`inline-flex items-baseline whitespace-nowrap ${chunk.style || ""}`}
    >
      {texts.map((t, i) => {
        if (t === "#") {
          const Icon = chunk.icon!;
          return <Icon key={`text-and-icon${i}`} className="inline-block" />;
        } else {
          return t;
        }
      })}
    </span>
  );
}
