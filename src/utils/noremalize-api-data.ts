import type { ApiProjectType, ProjectType } from "@/types";

export default function normalizeApiData(projects: ApiProjectType[]) {
  const normalized: ProjectType[] = projects
    .map((project) => ({
      ...project,
      context: project.context?.trim(),
      contribution: project.contribution?.trim(),
      skills: project.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    }))
    .reverse();

  return normalized;
}
