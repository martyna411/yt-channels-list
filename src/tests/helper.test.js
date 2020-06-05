import { toLocaleString } from "../js/utils/helper.js";

describe("helper.js file tests", () => {
	describe("Tests toLocaleString", () => {
		it("It should return formatted string by locale - test 12 chars string", () => {
			const result = toLocaleString("123456789123");
			expect(result).toEqual("123,456,789,123");
		});

		it("It should return formatted string by locale - test 9 chars string", () => {
			const result = toLocaleString("123456789");
			expect(result).toEqual("123,456,789");
		});

		it("It should return formatted string by locale - test 6 chars string", () => {
			const result = toLocaleString("123456");
			expect(result).toEqual("123,456");
		});

		it("It should return formatted string by locale - test 3 chars string", () => {
			const result = toLocaleString("123");
			expect(result).toEqual("123");
		});

		it("It should return formatted string by locale - test 1 chars string", () => {
			const result = toLocaleString("1");
			expect(result).toEqual("1");
		});

		it("It should return formatted string by locale - test 1 chars string", () => {
			const result = toLocaleString("0");
			expect(result).toEqual("0");
		});

		it("It should return zero for null value", () => {
			const result = toLocaleString(null);
			expect(result).toEqual("0");
		});
	});
});
