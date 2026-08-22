import Papa from "papaparse";

import { PROJECTS_URL } from "@/constants/urls";
import type { ApiProjectType, ProjectType } from "@/types";
import normalizeApiData from "@/utils/noremalize-api-data";

export const api = {
  mainProjects: {
    list: async () => {
      const res = await fetch(PROJECTS_URL);
      const text = await res.text();
      const data = await new Promise<ProjectType[]>((resolve, reject) => {
        Papa.parse<ApiProjectType>(text, {
          complete: (result) => {
            result.data = result.data.filter((project) => !!project.isMain);
            const normalized = normalizeApiData(result.data);
            resolve(normalized);
          },
          error: reject,
          header: true,
        });
      });

      return data;
    },
  },
  projects: {
    list: async () => {
      const res = await fetch(PROJECTS_URL);
      const text = await res.text();
      const data = await new Promise<ProjectType[]>((resolve, reject) => {
        Papa.parse<ApiProjectType>(text, {
          complete: (result) => {
            const normalized = normalizeApiData(result.data);
            resolve(normalized);
          },
          error: reject,
          header: true,
        });
      });

      return data;
    },
  },
};
