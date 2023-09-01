export type ApiProjectType = {
  name: string;
  image: string;
  skills: string;
  repo: string;
  deploy?: string;
  description: string;
  isMain: string;
};

export type ProjectType = {
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
  imgURL: string;
};

export type Pages = {
  label: string;
  url: string;
}[];
