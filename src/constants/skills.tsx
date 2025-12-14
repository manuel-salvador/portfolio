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
    name: "HTML5",
    icon: <HtmlIcon size={30} />,
  },
  {
    name: "CSS3",
    icon: <CSSIcon size={30} />,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon size={30} />,
  },
  {
    name: "React",
    icon: <ReactIcon size={30} />,
  },
  {
    name: "NextJs",
    icon: <NextJsIcon size={30} />,
  },

  {
    name: "Tailwind CSS",
    icon: <TailwindIcon size={30} />,
  },
];

export const backSkills: SkillType[] = [
  {
    name: "Node",
    icon: <NodeIcon size={30} />,
  },
  {
    name: "Express.js",
    icon: <ExpressIcon size={30} />,
  },
  {
    name: "MySQL",
    icon: <MySqlIcon size={30} />,
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon size={30} />,
  },
  {
    name: "MongoDB",
    icon: <MongoIcon size={30} />,
  },
];
