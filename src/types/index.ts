export type ApiProjectType = {
  badge?: string;
  name: string;
  image: string;
  skills: string;
  repo: string;
  deploy?: string;
  description: string;
  isMain: string;
};

export type ProjectType = {
  badge?: string;
  name: string;
  image: string;
  skills: string[];
  repo: string;
  deploy?: string;
  description: string;
  isMain: string;
};

export type SkillType = {
  name: string;
  icon: React.ReactNode;
};

export type Pages = {
  label: string;
  url: string;
}[];
