import { Repository, RepositoryOptions } from "@/models/repository";

export const removeDuplicates = (
  values: Repository[] | any,
  comparisonValue: keyof Repository
) =>
  values.filter(
    (value: Repository, index: number, valuesArray: Repository[]) =>
      index ===
      valuesArray.findIndex(
        (valueArray) => valueArray[comparisonValue] === value[comparisonValue]
      )
  );
