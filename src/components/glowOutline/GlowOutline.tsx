export default function GlowOutline({
  gradient,
  rounded,
}: {
  gradient: string;
  rounded?: string;
}) {
  //   const gradient =
  //     "conic-gradient(in oklch, red 90deg, orange 95deg, transparent 200deg, transparent 250deg, red 360deg)";
  //   const rounded = "rounded-3xl";
  return (
    <>
      <div className="absolute -inset-1 pointer-events-none blur-xs">
        <Outline gradient={gradient} rounded={rounded} thickness="p-1" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <Outline gradient={gradient} rounded={rounded} thickness="p-px" />
      </div>
    </>
  );
}

// The thickness is created by padding.
function Outline({
  gradient,
  rounded,
  thickness,
}: {
  gradient: string;
  rounded?: string;
  thickness: string;
}) {
  const mask =
    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)";

  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className={`size-full ${rounded || ""} ${thickness}`}
        style={{
          background: `${gradient}`,
          WebkitMask: `${mask}`,
          WebkitMaskComposite: "xor",
          mask: `${mask}`,
          maskComposite: "exclude",
        }}
      />
    </div>
  );
}
