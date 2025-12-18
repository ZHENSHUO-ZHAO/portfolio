import createPageContext, {
  type ContextPageBase,
  type DescriptiveItem,
} from "./pageContext";

export type HobbyContent = ContextPageBase & {
  header: DescriptiveItem & { interests: string[] };
  qualifications: { title: string; certificates: DescriptiveItem[] };
  benefits: { title: string; reasons: DescriptiveItem[] };
  daily: DescriptiveItem;
};

export const hobbyContent = {
  pageTitle: "Hobby Page",
  header: {
    title: "My Passion for Specialty Coffee",
    desc: "Coffee is a craft that blends science, sensory awareness, and iterative refinement — qualities that also shape how I think as an engineer. I enjoy experimenting with:",
    interests: [
      "extraction chemistry",
      "roast development",
      "sensory profiling",
      "workflow optimization",
    ],
  },
  qualifications: {
    title: "Specialty Coffee Association Certifications",
    certificates: [
      {
        title: "Brewing",
        desc: "Extraction theory, grind optimization, brew consistency",
      },
      {
        title: "Roasting",
        desc: "Roast profiling, Maillard reaction and caramelization control, curve analysis",
      },
      {
        title: "Sensory Skills",
        desc: "Flavour identification, cupping protocols, triangulation",
      },
    ],
  },
  benefits: {
    title: "Why It Matters",
    reasons: [
      {
        title: "Repeatable processes",
        desc: "Brewing and roasting require consistency — just like release pipelines and testing.",
      },
      {
        title: "Data-driven refinement",
        desc: "Adjusting grind size, flow rate, or roast curves mirrors debugging and performance tuning.",
      },
      {
        title: "Sensory awareness & observation",
        desc: "Coffee sharpens attention to small details — useful in UX, game feel, and gameplay balancing.",
      },
      {
        title: "Iteration & experimentation",
        desc: "Trying new origins and techniques resembles prototyping features or exploring architectures.",
      },
      {
        title: "Balance & craft",
        desc: "Both coffee and software require balancing creativity with structure.",
      },
    ],
  },
  daily: {
    title: "Exploring Melbourne's Coffee Scene",
    desc: "I enjoy visiting local roasters, testing new beans and methods, and hosting tasting sessions with friends. Specialty coffee gives me balance, focus, and a hands-on craft to enjoy outside of engineering. It's a space where science and creativity meet — and I carry that mindset with me into the work I do in software and game development.",
  },
} satisfies HobbyContent;

export const [HobbyPageContext, useHobbyPageContext] =
  createPageContext(hobbyContent);
