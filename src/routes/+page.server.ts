import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";
import { fetchPortfolioRepos } from "$lib/server/github";
import { error } from "@sveltejs/kit";

import type { Project } from "$lib/types";

import type { PageServerLoad } from "./$types";

type Payload = {
  projects: Project[];
  fetchedAt: Date;
};

let cached: Payload | null = null;
let expiresAt = 0;
const TTL = 60 * 1000 * Number(env.CACHE_TTL_MINUTES ?? 5);

export const load: PageServerLoad = async (): Promise<Payload> => {
  if (!env.GITHUB_TOKEN || !env.GITHUB_USERNAME) {
    console.error("❌ CRITICAL: GITHUB_TOKEN or GITHUB_USERNAME is missing from the environment!");
    throw error(500, "Server configuration error: Missing API tokens.");
  }

  if (!dev) {
    const hasExpired = Date.now() > expiresAt;
    if (cached !== null && !hasExpired) {
      console.log("Returning cached projects:", cached);
      return cached;
    }
  }

  const projects = await fetchPortfolioRepos(env.GITHUB_USERNAME, env.GITHUB_TOKEN);
  const payload = {
    projects,
    fetchedAt: new Date(),
  };
  console.log(`Fetched data: ${payload}`);
  cached = payload;
  expiresAt = Date.now() + TTL;
  return payload;
};
