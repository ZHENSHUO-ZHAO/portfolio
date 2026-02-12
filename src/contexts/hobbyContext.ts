import {
  FaCertificate,
  FaChartLine,
  FaCode,
  FaDownload,
  FaDroplet,
  FaEnvelope,
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
  type Image,
  type Header,
  type Heading,
  type HybridDescription,
  type HybridTag,
  type Tag,
  type ContactButtonInfo,
  type CarouselData,
} from "./pageContext";
import { GiNoseSide } from "react-icons/gi";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { cv, email } from "../utils/constants";
import { LuWaves } from "react-icons/lu";
import brewingIcon from "../assets/images/hobby/certificate/brewing_icon.webp";
import roastingIcon from "../assets/images/hobby/certificate/roasting_icon.webp";
import sensorySkillsIcon from "../assets/images/hobby/certificate/sensory_skills_icon.webp";
import { createImageDataBatch } from "../utils/util";

const craftSlides: string[] = Object.values(
  import.meta.glob("../assets/images/hobby/craft/craft_*.webp", {
    eager: true,
    import: "default",
  }),
);
const sceneSlides: string[] = Object.values(
  import.meta.glob("../assets/images/hobby/scene/cs_*.webp", {
    eager: true,
    import: "default",
  }),
);
const actionPhotos: string[] = Object.values(
  import.meta.glob("../assets/images/hobby/action/action_*.webp", {
    eager: true,
    import: "default",
  }),
);

export type HobbyHeader = Header & { interestHeading: string; interest: Tag[] };
export type ExplainSection = {
  heading: Heading;
  desc: HybridDescription;
  items: HybridTag[];
  slides: Image[];
};
export type Certificate = Tag & {
  title: string;
  iconUrl: string;
  skills: string[];
};
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
  gallery: { heading: Heading; photos: CarouselData };
  contact: { heading: Heading; items: ContactButtonInfo[] };
};

export const hobbyContent = {
  pageId: "Hobby",
  header: {
    tag: { icon: FaMugHot, text: "Beyond Work" },
    title: "My Passion for Specialty Coffee",
    hybridTitle: [
      { text: "My Passion for " },
      {
        text: "Specialty ",
        style: "text-coffee-600 dark:text-amber-400",
      },
      {
        text: "C{{icon}}ffee",
        icon: PiCoffeeBeanFill,
        style:
          "text-coffee-600 dark:text-amber-400 [&>svg]:text-xl [&>svg]:md:text-4xl",
      },
    ],
    statement: [
      [
        { text: "Coffee is a craft that blends " },
        {
          text: "science",
          style: "font-bold text-coffee-600 dark:text-amber-400",
        },
        {
          text: ", ",
        },
        {
          text: "sensory awareness",
          style: "font-bold text-coffee-600 dark:text-amber-400",
        },
        {
          text: ", and ",
        },
        {
          text: "iterative refinement",
          style: "font-bold text-coffee-600 dark:text-amber-400",
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
          style: "text-coffee-600 dark:text-amber-400 font-semibold",
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
    slides: createImageDataBatch(craftSlides, [
      "Raw coffee beans being inspected to assess quality before roasting.",
      "Reference samples showing roasted coffee bean colors across different roast levels, ranging from light yellow and cinnamon to dark chocolate.",
      "Santoker coffee roaster featuring a hybrid direct-flame and semi-hot-air system designed for even heat distribution in a compact machine.",
      "Freshly roasted coffee beans being stirred on a steel cooling tray to release heat and rest after roasting.",
      "Lighttells CM-100 coffee roast degree analyzer used to measure coffee roast levels using infrared technology.",
      "AgraTronix Portable Coffee Moisture Tester (Model 08150), a digital device used to measure moisture levels in coffee beans.",
      "Basket containing 250 grams of lightly roasted Costa Rica Finca El Mango coffee beans with a cinnamon-colored roast.",
      "Basket containing 250 grams of medium-roasted Costa Rica Finca El Mango Black Honey processed coffee beans.",
      "Coffee roasting profile log documenting temperature and time data as beans progress from green to roasted.",
      "Le Nez du Café sensory kit displaying aroma vials and an aroma reference list used for coffee aroma training.",
      "Custom coffee tasting evaluation sheet with numbered scales and checkboxes used to record sensory observations.",
    ]),
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
        title: "Brewing",
        iconUrl: brewingIcon,
        skills: ["Extraction theory", "Grind optimization", "Brew consistency"],
      },
      {
        icon: FaFireFlameCurved,
        text: "Roasting",
        title: "Roasting",
        iconUrl: roastingIcon,
        skills: [
          "Roast profiling",
          "Maillard reaction and caramelization control",
          "Curve analysis",
        ],
      },
      {
        icon: LuWaves,
        text: "Sensory Skills",
        title: "Sensory Skills",
        iconUrl: sensorySkillsIcon,
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
          style: "text-coffee-600 dark:text-amber-400 font-semibold",
        },
        { text: ", " },
        {
          text: "focus",
          style: "text-coffee-600 dark:text-amber-400 font-semibold",
        },
        { text: ", and a " },
        {
          text: "hands-on craft",
          style: "text-coffee-600 dark:text-amber-400 font-semibold",
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
    slides: createImageDataBatch(sceneSlides, [
      "Pour-over coffee served with a classic Australian breakfast on a table at Fourth Chapter Café in Prahran, Victoria.",
      "Hand-drip coffee made with washed Ethiopian beans served at Lunar by Hikari in Brunswick, Victoria.",
      "Single espresso shot served as a complimentary coffee by Vittoria Coffee.",
      "Entrance signage of the Melbourne International Coffee Exhibition 2023.",
      "Coffee flavor wheel illustrating standardized terms used to describe coffee characteristics and sensory profiles.",
      "Control panel of a ROEST coffee roasting machine displaying real-time roasting data and a countdown timer for the next event.",
      "Tablet mounted on a ROEST coffee roaster running RoastTime software for monitoring and controlling the roasting process.",
      "Professional coffee cupping session with multiple cups arranged for evaluating aroma and flavor.",
      "Espresso served in a small white cup branded 'My Little Coffee' placed on a document describing the SCA Coffee Skills program.",
      "Bags of specialty coffee beans from Market Lane Coffee displayed together.",
      "Two-hundred-gram package of Rwanda Musasa coffee beans from Danes Coffee Roasters with flavor notes listed on the label.",
      "Selection of whole-bean coffee bags from Australian roaster Jasper Coffee.",
      "Bags of single-origin specialty coffee beans from Adore Coffee featuring Ethiopian and Kenyan origins.",
      "Detailed coffee bean information sheet from LiLo Coffee Roasters listing origins, processing methods, flavor notes, and prices.",
      "Single-origin coffee information cards from LiLo Coffee Roasters displayed together.",
    ]),
  },
  comparison: {
    heading: {
      title: "Coffee ↔",
      hybridTitle: [
        { text: "Coffee " },
        {
          text: "{{icon}}",
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
      desc: "A glimpse into the craft and gears",
    },
    photos: {
      aspectRatio: 1.333,
      images: createImageDataBatch(
        actionPhotos,
        [
          "Lighttells CM-100 portable coffee roast analyzer measuring the roast level of coffee beans, with the display showing a score of 66.5.",
          "Gold-colored stainless steel coffee measuring scoop with a wooden handle weighing dark roasted coffee beans on a digital scale.",
          "Coffee blooming during the pour-over brewing process in a Kalita coffee dripper.",
          "Pour-over coffee brewing in progress, with hot water being poured over ground coffee on an upper-floor location overlooking Victoria Harbour in Hong Kong.",
          "Hiroia Jimmy smart coffee scale measuring water during the pour-over brewing process.",
          "Pour-over single-origin coffee served in a 'CAFE DE KONA' glass server alongside a small ceramic cup.",
          "Kalita Enamel Pelican pour-over kettle with a precision spout shown next to a compact white camping kettle.",
          "Fellow Stagg EKG electric kettle featuring variable temperature control between 57°C and 100°C.",
          "Weber Workshops Key Grinder featuring large 83-millimeter conical burrs and a magnetic tumbler resting on a hardwood base.",
          "Internal view of the Weber Workshops Key Grinder showing its large 83-millimeter conical burrs.",
          "Knob manual coffee grinder with an axle-free design and 47-millimeter conical burrs for improved grind consistency.",
          "Internal mechanism of the Knob manual coffee grinder with engraved text highlighting its axle-free design.",
          "Origami Dripper size S in matte blue, a ceramic pour-over coffee dripper from Japan.",
          "CAFE DE KONA Hasami ceramic coffee dripper in lake blue.",
          "Chemex Funnex single-serve pour-over coffee brewer made from double-walled borosilicate glass.",
          "Porcelain pour-over coffee filter cone, shown as either a Kadou M1 or a vintage Melitta-style dripper with a white glazed finish.",
        ],
        [
          "Roast Level Measuring",
          "Coffee Weighing",
          "Blooming Process",
          "Brewing in Progress",
          "Hiroia Jimmy Smart Coffee Scale",
          "Single-origin Pour-over",
          "Kalita Enamel Pelican Kettle",
          "Fellow Stagg EKG Electric Kettle",
          "Weber Workshops Key Grinder",
          "83mm Conical Burrs",
          "Knob Axle-free Coffee Grinder",
          "First Axle-free Design",
          "Origami Ceramic Coffee Dripper",
          "Hasami Coffee Dripper",
          "Chemex Funnex Coffee Brewer",
          "Kadou M1 Coffee Dripper",
        ],
      ),
    },
  },
  contact: {
    heading: {
      tag: { icon: FaMugHot, text: "Let's connect" },
      title: "Coffee & Code",
      desc: "Whether you want to discuss software engineering, game development, or specialty coffee — I'd love to hear from you",
    },
    items: [
      {
        heading: { tag: { icon: FaEnvelope }, title: "Get in Touch", desc: "" },
        contact: { href: email },
      },
      {
        heading: { tag: { icon: FaDownload }, title: "View Resume", desc: "" },
        contact: { href: cv, download: true },
      },
    ],
  },
} satisfies HobbyContent;

export const [HobbyPageContext, useHobbyPageContext] =
  createPageContext(hobbyContent);
