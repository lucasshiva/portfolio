import { dev } from "$app/environment";
import { CACHE_TTL_MINUTES } from "$env/static/private";
import type { Project } from "$lib/types";

let cachedProjects: Project[] | null = null;
let expiresAt = 0;
const TTL = 60 * 1000 * Number(CACHE_TTL_MINUTES);

export function getCachedProjects(): Project[] | null {
  if (dev || Date.now() > expiresAt) return null;
  return cachedProjects;
}

export function setCachedProjects(projects: Project[]): void {
  if (dev) return;
  cachedProjects = projects;
  expiresAt = Date.now() + TTL;
}
