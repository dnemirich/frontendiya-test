import type { Repository, RepositorySummary } from '../model';

export const mapRepo = (repo: Repository): RepositorySummary => {
  return {
    name: repo.name,
    description: repo.description,
    id: repo.id,
    html_url: repo.html_url,
  };
};
