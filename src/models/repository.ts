export interface Repository {
  created_at: Date | string;
  description: string;
  id: number | string;
  language: string;
  name: string;
  stargazers_count: number;
  topics: string[];
  updated_at: Date | string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

export interface RepositoryOptions {
  name: string;
  id: number | string;
}
