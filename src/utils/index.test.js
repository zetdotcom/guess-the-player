import { getRandomPlayers } from './index';

describe('TEST UTILS', () => {
	test('getRandomPlayers should return n players', () => {
		const arr = [1, 2, 3, 4, 5, 6];
		const arrObj = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];

		expect(getRandomPlayers(arr, 2)).toHaveLength(2);
		expect(getRandomPlayers(arrObj, 2)).toHaveLength(2);
		expect(getRandomPlayers(arr, 5)).toHaveLength(5);
		expect(getRandomPlayers(arrObj, 5)).toHaveLength(5);
	});
});
