import mirror from "./mirror";

describe("mirror", () => {
    it("mirror array", () => {
        const result = mirror([1, 2, 3]);
        expect(result).toEqual([1, 2, 3, 2, 1]);
    });
    it("mirror array", () => {
        const result = mirror([1, 2, 3, 4, 5, 6, 7]);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1]);
    });
});