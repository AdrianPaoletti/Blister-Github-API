import { sortAlphabetically } from "./sortAlphabetically";

describe("Given a sortAlphabetically function", () => {
  describe("When is called", () => {
    test("Then it should return the array sorted", () => {
      const unsortedArray = [
        { name: "gama", id: 3 },
        { name: "alpha", id: 1 },
        { name: "beta", id: 2 },
      ];
      const expectedResult = [
        { name: "alpha", id: 1 },
        { name: "beta", id: 2 },
        { name: "gama", id: 3 },
      ];

      const result = sortAlphabetically(unsortedArray);

      expect(result).toEqual(expectedResult);
    });
  });
});
