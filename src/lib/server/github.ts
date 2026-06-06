import { type Project } from "$lib/types";

/**
 * Checks if portfolio.png or portfolio.jpg exists in the repo root.
 * Returns the raw GitHub URL if found, or null.
 */
async function getImageUrl(
  user: string,
  repository: string,
  token?: string,
): Promise<string | null> {
  const url = `https://api.github.com/repos/${repository}/contents`;

  console.log("Fetching image for", repository);
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": user,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    if (!response.ok) {
      console.error("Couldn't fetch image:", response.statusText);
      return null;
    }

    const contents = await response.json();
    if (!Array.isArray(contents)) {
      console.error("Contents is not an array:", contents);
      return null;
    }

    const imageFile = contents.find(
      (file: any) => file.type === "file" && /^portfolio\.(png|jpg|jpeg)$/i.test(file.name),
    );

    if (imageFile) {
      console.log("Found image for", repository);
      return imageFile.download_url;
    }

    console.error("Image not found for", repository);
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function fetchPortfolioRepos(username: string, token?: string): Promise<Project[]> {
  const query = encodeURIComponent(`user:${username} topic:portfolio`);
  const searchUrl = `https://api.github.com/search/repositories?q=${query}&sort=updated&order=desc`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": username,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const data = await response.json();
    const repos = data.items || [];

    // Fetch custom data concurrently for all returned repositories
    const projects: Project[] = await Promise.all(
      repos.map(async (repo: any) => {
        const project: Project = {
          title: repo.name,
          description: repo.description || "",
          source: repo.html_url,
          url: repo.homepage,
          imageUrl: await getImageUrl(username, repo.full_name, token),
          tags: repo.topics.filter((t: string) => !t.includes("portfolio")),
        };

        return project;
      }),
    );

    return projects;
  } catch (error) {
    console.error("Failed fetching portfolio repos:", error);
    return [];
  }
}
