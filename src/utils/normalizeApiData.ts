import type { ApiProjectType, ProjectType } from '@/types';

export default function normalizeApiData(projects: ApiProjectType[]) {
  const normalized: ProjectType[] = projects
    .map((project) => ({
      ...project,
      skills: project.skills.split(',').map((skill) => skill.trim()),
    }))
    .reverse();

  return normalized;
}
