import { Repository, RepositoryOptions } from "@/models/repository";

export const sortAlphabetically = (repository: Repository[] | any[]) =>
  repository.sort((a, b) => a.name.localeCompare(b.name));
