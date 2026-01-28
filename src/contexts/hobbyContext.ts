import {
  FaCertificate,
  FaChartLine,
  FaCode,
  FaDownload,
  FaDroplet,
  FaEnvelope,
  FaEye,
  FaEyeDropper,
  FaFire,
  FaFireFlameCurved,
  FaFlask,
  FaFlaskVial,
  FaGears,
  FaHeart,
  FaLightbulb,
  FaLocationDot,
  FaMicroscope,
  FaMugHot,
  FaPalette,
  FaRepeat,
  FaRotate,
  FaScaleBalanced,
  FaSeedling,
  FaStore,
  FaUsers,
} from "react-icons/fa6";
import createPageContext, {
  type ContextPageBase,
  type GalleryItem,
  type Header,
  type Heading,
  type HybridDescription,
  type HybridTag,
  type Tag,
} from "./pageContext";
import { GiNoseSide } from "react-icons/gi";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import dummyImage from "../assets/images/hobby/dummy.webp";
import { BsChatRightQuoteFill } from "react-icons/bs";

export type HobbyHeader = Header & { interestHeading: string; interest: Tag[] };
export type ExplainSection = {
  heading: Heading;
  desc: HybridDescription;
  items: HybridTag[];
};
export type Certificate = Tag & { skills: string[] };
export type Connection = Heading & { detail: string };
export type Comparison = {
  heading: Heading;
  items: (Heading & { metrics: string[] })[];
  summary: HybridTag;
};

export type HobbyContent = ContextPageBase & {
  header: HobbyHeader;
  craft: ExplainSection;
  certification: { heading: Heading; items: Certificate[] };
  connection: { heading: Heading; items: Connection[] };
  exploration: ExplainSection;
  comparison: Comparison;
  gallery: { heading: Heading; items: GalleryItem[] };
  contact: { heading: Heading; items: Heading[] };
};

export const hobbyContent = {
  pageTitle: "Beyond Work",
  header: {
    tag: { icon: FaMugHot, text: "Beyond Work" },
    title: "My Passion for Specialty Coffee",
    hybridTitle: [
      { text: "My Passion for " },
      {
        text: "Specialty ",
        style: "text-coffee-600",
      },
      {
        text: "C/#/ffee",
        icon: PiCoffeeBeanFill,
        style: "text-coffee-600 [&>svg]:text-xl [&>svg]:md:text-4xl",
      },
    ],
    statement: [
      [
        { text: "Coffee is a craft that blends " },
        {
          text: "science",
          style: "font-bold text-coffee-600",
        },
        {
          text: ", ",
        },
        {
          text: "sensory awareness",
          style: "font-bold text-coffee-600",
        },
        {
          text: ", and ",
        },
        {
          text: "iterative refinement",
          style: "font-bold text-coffee-600",
        },
        {
          text: " - qualities that also shape how I think as an engineer.",
        },
      ],
    ],
    interestHeading: "I enjoy experimenting with:",
    interest: [
      { icon: FaFlask, text: "extraction chemistry" },
      { icon: FaFire, text: "roast development" },
      { icon: GiNoseSide, text: "sensory profiling" },
      { icon: FaGears, text: "workflow optimization" },
    ],
  },
  craft: {
    heading: {
      tag: { icon: FaHeart, text: "The Craft" },
      title: "Where Science Meets Art",
    },
    desc: [
      [
        {
          text: "What draws me to specialty coffee is the same thing that attracts me to engineering: ",
        },
        {
          text: "the balance between precision and creativity",
          style: "text-coffee-600 font-semibold",
        },
        { text: "." },
      ],
      "Every cup is a result of countless variables - grind size, water temperature, extraction time, bean origin, roast profile. Small adjustments create dramatically different results.",
      "It's problem-solving in its purest form: observe, adjust, iterate, refine.",
    ],
    items: [
      {
        icon: FaMicroscope,
        text: [
          { text: "Scientific approach", style: "font-semibold" },
          { text: " to extraction and flavor development" },
        ],
      },
      {
        icon: FaPalette,
        text: [
          { text: "Creative expression", style: "font-semibold" },
          { text: " through roast profiles and brewing methods" },
        ],
      },
      {
        icon: FaRepeat,
        text: [
          { text: "Continuous improvement", style: "font-semibold" },
          { text: " mindset in every brew" },
        ],
      },
    ],
  },
  certification: {
    heading: {
      tag: { icon: FaCertificate, text: "Professional Training" },
      title: "Specialty Coffee Association Certifications",
      desc: "Formal training in the science and craft of specialty coffee",
    },
    items: [
      {
        icon: FaDroplet,
        text: "Brewing",
        skills: ["Extraction theory", "Grind optimization", "Brew consistency"],
      },
      {
        icon: FaFireFlameCurved,
        text: "Roasting",
        skills: [
          "Roast profiling",
          "Maillard reaction and caramelization control",
          "Curve analysis",
        ],
      },
      {
        icon: FaEye,
        text: "Sensory Skills",
        skills: [
          "Flavour identification",
          "Cupping protocols",
          "Triangulation",
        ],
      },
    ],
  },
  connection: {
    heading: {
      tag: { icon: FaLightbulb, text: "The Connection" },
      title: "Why It Matters",
      desc: "The skills I develop through coffee translate directly into how I approach software engineering",
    },
    items: [
      {
        tag: { icon: FaRotate },
        title: "Repeatable processes",
        desc: "Brewing and roasting require consistency - just like release pipelines and testing.",
        detail:
          "Every brew follows documented steps. Every roast uses tracked parameters. Repeatability builds trust.",
      },
      {
        tag: { icon: FaChartLine },
        title: "Data-driven refinement",
        desc: "Adjusting grind size, flow rate, or roast curves mirrors debugging and performance tuning.",
        detail:
          "Measure, analyze, adjust, repeat. Small changes lead to measurable improvements.",
      },
      {
        tag: { icon: FaEyeDropper },
        title: "Sensory awareness & observation",
        desc: "Coffee sharpens attention to small details — useful in UX, game feel, and gameplay balancing.",
        detail:
          "Noticing subtle differences in taste helps me notice subtle issues in user experience.",
      },
      {
        tag: { icon: FaFlaskVial },
        title: "Iteration & experimentation",
        desc: "Trying new origins and techniques resembles prototyping features or exploring architectures.",
        detail:
          "Experimentation is how you discover what works. Curiosity drives innovation.",
      },
      {
        tag: { icon: FaScaleBalanced },
        title: "Balance & craft",
        desc: "Both coffee and software require balancing creativity with structure.",
        detail:
          "Great coffee isn't just science. Great software isn't just code. Both need vision, discipline, and care.",
      },
    ],
  },
  exploration: {
    heading: {
      tag: { icon: FaLocationDot, text: "Melbourne, Australia" },
      title: "Exploring Melbourne's Coffee Scene",
    },
    desc: [
      "I enjoy visiting local roasters, testing new beans and methods, and hosting tasting sessions with friends. ",
      [
        {
          text: "Specialty coffee gives me ",
        },
        {
          text: "balance",
          style: "text-coffee-600 font-semibold",
        },
        { text: ", " },
        {
          text: "focus",
          style: "text-coffee-600 font-semibold",
        },
        { text: ", and a " },
        {
          text: "hands-on craft",
          style: "text-coffee-600 font-semibold",
        },
        {
          text: " to enjoy outside of engineering. It's a space where science and creativity meet — and I carry that mindset with me into the work I do in software and game development.",
        },
      ],
      "It's a space where science and creativity meet - and I carry that mindset with me into the work I do in software and game development.",
    ],
    items: [
      {
        icon: FaStore,
        text: [{ text: "Visiting specialty roasters and cafés" }],
      },
      {
        icon: FaUsers,
        text: [{ text: "Hosting cupping sessions with friends" }],
      },
      {
        icon: FaSeedling,
        text: [
          {
            text: "Experimenting with different origins and processing methods",
          },
        ],
      },
    ],
  },
  comparison: {
    heading: {
      title: "Coffee ↔",
      hybridTitle: [
        { text: "Coffee " },
        {
          text: "/#/",
          icon: MdCompareArrows,
          style: "align-middle",
        },
        { text: " Engineering" },
      ],
      desc: "The parallels between brewing and building software",
    },
    items: [
      {
        tag: { icon: FaMugHot },
        title: "Coffee",
        metrics: [
          "Optimize extraction variables",
          "Document roast profiles",
          "Refine through tasting",
          "Balance acidity and sweetness",
        ],
      },
      {
        tag: { icon: FaCode },
        title: "Engineering",
        metrics: [
          "Optimize performance metrics",
          "Document architecture decisions",
          "Refine through user feedback",
          "Balance features and stability",
        ],
      },
    ],
    summary: {
      icon: BsChatRightQuoteFill,
      text: [
        { text: "Both disciplines reward " },
        { text: "curiosity", style: "font-bold text-white" },
        { text: ", " },
        { text: "precision", style: "font-bold text-white" },
        { text: ", and a " },
        { text: "willingness to iterate", style: "font-bold text-white" },
        { text: " until you get it right." },
      ],
    },
  },
  gallery: {
    heading: {
      title: "Coffee in Action",
      desc: "A glimpse into the craft",
    },
    items: [
      { url: dummyImage, alt: "A dummy image", text: "Dummy" },
      { url: dummyImage, alt: "A dummy image", text: "Dummy" },
      { url: dummyImage, alt: "A dummy image", text: "Dummy" },
    ],
  },
  contact: {
    heading: {
      tag: { icon: FaMugHot, text: "Let's connect" },
      title: "Coffee & Code",
      desc: "Whether you want to discuss software engineering, game development, or specialty coffee — I'd love to hear from you",
    },
    items: [
      {
        tag: { icon: FaEnvelope },
        title: "Get in Touch",
        desc: "",
      },
      {
        tag: { icon: FaDownload },
        title: "View Resume",
        desc: "",
      },
    ],
  },
} satisfies HobbyContent;

export const [HobbyPageContext, useHobbyPageContext] =
  createPageContext(hobbyContent);
