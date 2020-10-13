import formatBytes from "./formatBytes";

// assertEquals(formatBytes(900), "900MB");
// assertEquals(formatBytes(1900), "1GB 900MB");
// assertEquals(formatBytes(568200), "568GB 200MB");
// assertEquals(formatBytes(1234567), "1TB 234GB 567MB");

// function assertEquals(result, expectedResult) {
//     if (result !== expectedResult) {
//         throw new Error(
//             `This test is failing: Expected "${expectedResult}", got "${result}"`,
//         );
//     }
// }

// console.log("ALL OK");

describe("formatBytes", () => {
    it("formats in MBs", () => {
        const result = formatBytes(900);
        expect(result).toEqual("900MB");
    });
    it("formats in GBs", () => {
        const result = formatBytes(1000);
        expect(result).toEqual("1GB");
    });
    it("formats in TB", () => {
        const result = formatBytes(1000000);
        expect(result).toEqual("1TB");
    });
    it("formats in all of the previous", () => {
        const result = formatBytes(123456789);
        expect(result).toEqual("123TB 456GB 789MB");
    });
});