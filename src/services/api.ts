import Papa from 'papaparse';

import type { ApiProjectType, ProjectType } from '@/types';
import { PROJECTS_URL } from '@/constants/urls';
import normalizeApiData from '@/utils/normalizeApiData';

export const api = {
  projects: {
    list: async () => {
      const res = await fetch(PROJECTS_URL);
      const text = await res.text();
      const data = await new Promise<ProjectType[]>((resolve, reject) => {
        Papa.parse<ApiProjectType>(text, {
          header: true,
          complete: (result) => {
            const normalized = normalizeApiData(result.data);
            resolve(normalized);
          },
          error: reject,
        });
      });

      return data;
    },
  },
  mainProjects: {
    list: async () => {
      const res = await fetch(PROJECTS_URL);
      const text = await res.text();
      const data = await new Promise<ProjectType[]>((resolve, reject) => {
        Papa.parse<ApiProjectType>(text, {
          header: true,
          complete: (result) => {
            result.data = result.data.filter((project) => !!project.isMain);
            const normalized = normalizeApiData(result.data);
            resolve(normalized);
          },
          error: reject,
        });
      });

      return data;
    },
  },
};
