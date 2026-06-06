import { GITHUB_TOKEN, GITHUB_USERNAME } from "$env/static/private";
import { getCachedProjects, setCachedProjects } from "$lib/server/cache";
import { fetchPortfolioRepos } from "$lib/server/github";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const cached = getCachedProjects();
  if (cached) return { projects: cached };

  const projects = await fetchPortfolioRepos(GITHUB_USERNAME, GITHUB_TOKEN);
  setCachedProjects(projects);
  return { projects };
};
