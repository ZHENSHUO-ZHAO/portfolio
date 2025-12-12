import createPageContext from "./pageContext";

export const hobbyContent = {
  title: "Hobby Page",
  sections: [
    {
      title: "My Passion for Specialty Coffee",
      desc: "Coffee is a craft that blends science, sensory awareness, and iterative refinement — qualities that also shape how I think as an engineer. I enjoy experimenting with:",
      interests: [
        "extraction chemistry",
        "roast development",
        "sensory profiling",
        "workflow optimization",
      ],
    },
    {
      title: "Specialty Coffee Association Certifications",
      certificates: [
        {
          name: "Brewing",
          desc: "Extraction theory, grind optimization, brew consistency",
        },
        {
          name: "Roasting",
          desc: "Roast profiling, Maillard/caramelization control, curve analysis",
        },
        {
          name: "Sensory Skills",
          desc: "Flavour identification, cupping protocols, triangulation",
        },
      ],
    },
    {
      title: "Why It Matters",
      reasons: [
        {
          name: "Repeatable processes",
          desc: "Brewing and roasting require consistency — just like release pipelines and testing.",
        },
        {
          name: "Data-driven refinement",
          desc: "Adjusting grind size, flow rate, or roast curves mirrors debugging and performance tuning.",
        },
        {
          name: "Sensory awareness & observation",
          desc: "Coffee sharpens attention to small details — useful in UX, game feel, and gameplay balancing.",
        },
        {
          name: "Iteration & experimentation",
          desc: "Trying new origins and techniques resembles prototyping features or exploring architectures.",
        },
        {
          name: "Balance & craft",
          desc: "Both coffee and software require balancing creativity with structure.",
        },
      ],
    },
    {
      title: "Exploring Melbourne's Coffee Scene",
      desc: "I enjoy visiting local roasters, testing new beans and methods, and hosting tasting sessions with friends. Specialty coffee gives me balance, focus, and a hands-on craft to enjoy outside of engineering. It's a space where science and creativity meet — and I carry that mindset with me into the work I do in software and game development.",
    },
  ],
};

export const [HobbyPageContext, useHobbyPageContext] =
  createPageContext(hobbyContent);
