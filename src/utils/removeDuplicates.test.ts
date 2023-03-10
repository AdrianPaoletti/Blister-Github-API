import { removeDuplicates } from "./removeDuplicates";

describe("Given a removeDuplicates function", () => {
  describe("When is called", () => {
    test("Then it should return an array without the duplicated values", () => {
      const duplicatedArray = [
        { name: "alpha", id: 1 },
        { name: "alpha", id: 2 },
        { name: "beta", id: 3 },
      ];
      const expectedResult = duplicatedArray.filter((value) => value.id !== 2);

      const result = removeDuplicates(duplicatedArray, "name");

      expect(result).toEqual(expectedResult);
    });
  });
});
