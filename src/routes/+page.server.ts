import { GITHUB_TOKEN } from "$env/static/private";
import { fetchPortfolioRepos } from "$lib/server/github";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const user = "lucasshiva";
  const projects = await fetchPortfolioRepos(user, GITHUB_TOKEN);
  return { projects };
};
