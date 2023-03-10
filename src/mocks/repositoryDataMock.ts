import { Repository, RepositoryOptions } from "@/models/repository";

export const repositoyOptionsMock: RepositoryOptions[] = [
  {
    name: "alpha",
    id: 1,
  },
  {
    name: "alpha-beta",
    id: 2,
  },
  {
    name: "alpha-beta-gama",
    id: 3,
  },
];

export const repositoryMock: Repository = {
  created_at: "2013-10-02T18:44:34Z",
  description: "",
  id: 1,
  language: "js",
  name: "name",
  stargazers_count: 20,
  topics: ["ai"],
  updated_at: "2013-10-02T18:44:34Z",
  owner: {
    login: "login",
    avatar_url: "",
  },
  html_url: "",
};
