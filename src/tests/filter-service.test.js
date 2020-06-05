import { filter } from '../js/services/filter-service.js';

describe('filter-service.js file tests', () => {
	const channelsMock = [
		{ title: 'Fun Fun Function' },
		{ title: 'Google Chrome Developers' },
		{ title: 'meet.js' },
	];

	describe('Tests filter function', () => {
		it("Filters elements by string: null", () => {
			const searchString = null;
			const received = filter(searchString, channelsMock);

			expect(received).toEqual(channelsMock);
		});

		it("Filters elements by string: 'abc'", () => {
			const searchString = 'abc';
			const received = filter(searchString, channelsMock);

			expect(received).toEqual([]);
		});

		it("Filters elements by string: 'fun'", () => {
			const expected = [{ title: 'Fun Fun Function' }];
			const searchString = 'fun';
			const received = filter(searchString, channelsMock);

			expect(received).toEqual(expected);
		});

		it("Filters elements by string: 'CHROME'", () => {
			const expected = [{ title: 'Google Chrome Developers' }];
			const searchString = 'CHROME';
			const received = filter(searchString, channelsMock);

			expect(received).toEqual(expected);
		});
	});
});
