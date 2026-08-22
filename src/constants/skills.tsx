import {
  CSSIcon,
  ExpressIcon,
  HtmlIcon,
  MongoIcon,
  MySqlIcon,
  NextJsIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "@/components/icons";
import type { SkillType } from "@/types";

export const frontSkills: SkillType[] = [
  {
    icon: <HtmlIcon size={30} />,
    name: "HTML5",
  },
  {
    icon: <CSSIcon size={30} />,
    name: "CSS3",
  },
  {
    icon: <TypeScriptIcon size={30} />,
    name: "TypeScript",
  },
  {
    icon: <ReactIcon size={30} />,
    name: "React",
  },
  {
    icon: <NextJsIcon size={30} />,
    name: "NextJs",
  },

  {
    icon: <TailwindIcon size={30} />,
    name: "Tailwind CSS",
  },
];

export const backSkills: SkillType[] = [
  {
    icon: <NodeIcon size={30} />,
    name: "Node",
  },
  {
    icon: <ExpressIcon size={30} />,
    name: "Express.js",
  },
  {
    icon: <MySqlIcon size={30} />,
    name: "MySQL",
  },
  {
    icon: <PostgresIcon size={30} />,
    name: "PostgreSQL",
  },
  {
    icon: <MongoIcon size={30} />,
    name: "MongoDB",
  },
];
