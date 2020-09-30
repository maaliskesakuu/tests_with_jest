'use strict';

const functions = require('../sumFunction');

describe('Test if functions are defined', () => {
	test('function sum is defined', () => {
		expect(functions.sum).toBeDefined();
	});

	test('function subtract is defined', () => {
		expect(functions.subtract).toBeDefined();
	});

	test('function divide is defined', () => {
		expect(functions.divide).toBeDefined();
	});
});

describe('Test sum with integer testcases', () => {
	const testCases = [
		[1, 1, 2],
		[2, 3, 5],
		[-2, -4, -6],
		[-2, 4, 2],
		[2, -4, -2],
		[0, 0, 0],
		[0, 3, 3],
		[3, 0, 3],
		[0, -3, -3],
		[-3, 0, -3],
	];

	test.each(testCases)('sum(%s, %s) = %s', (a, b, expected) => {
		expect(functions.sum(a, b)).toBe(expected);
	});
});

describe('Test sum with floating point testcases', () => {
	const testCases = [
		[10, 11.5, 21.5],
		[2.5, 3, 5.5],
		[-2.5, 3, 0.5],
		[3, -2.5, 0.5],
		[-3, 2.5, -0.5],
		[-3, -2.5, -5.5],
		[-2.5, -2.5, -5],
		[2.5, 2.5, 5],
		[-2.5, 2.5, 0],
		[2.4, -2.5, -0.1],
	];

	test.each(testCases)('sum(%s, %s) = %s', (a, b, expected) => {
		expect(functions.sum(a, b)).toBeCloseTo(expected);
	});
});

describe('missing parameters', () => {
	const testCases = [
		[null, 'parameter missing'],
		[1, 'parameter missing'],
		['a', 'parameter missing'],
		['', 'parameter missing'],
	];

	test.each(testCases)(
		'sum(%s) throws exception: %s',
		(testValue, expected) => {
			expect(() => functions.sum(testValue)).toThrow(expected);
		}
	);
});

describe('parameters are not numbers', () => {
	const testCases = [
		['a', 2, 'only numbers allowed'],
		[1, 'a', 'only numbers allowed'],
		['a', 'b', 'only numbers allowed'],
		['', '', 'only numbers allowed'],
		['      ', '  ', 'only numbers allowed'],
		[null, 1, 'parameter missing'],
		[undefined, 1, 'parameter missing'],
	];

	test.each(testCases)(
		'sum(%s, %s) throws an exception %s',
		(a, b, expected) => {
			expect(() => functions.sum(a, b)).toThrow(expected);
		}
	);
});

describe('Test subtract with integer testcases', () => {
	const testCases = [
		[1, 1, 0],
		[2, 3, -1],
		[-2, -4, 2],
		[-2, 4, -6],
		[2, -4, 6],
		[0, 0, 0],
		[0, 3, -3],
		[3, 0, 3],
		[0, -3, 3],
		[-3, 0, -3],
	];

	test.each(testCases)('subtract(%s, %s) = %s', (a, b, expected) => {
		expect(functions.subtract(a, b)).toBe(expected);
	});
});

describe('Test subtract with floating point testcases', () => {
	const testCases = [
		[10, 11.5, -1.5],
		[2.5, 3, -0.5],
		[-2.5, 3, -5.5],
		[3, -2.5, 5.5],
		[-3, 2.5, -5.5],
		[-3, -2.5, -0.5],
		[-2.5, -2.5, 0],
		[-2.5, 2.5, -5],
		[2.4, -2.5, 4.9],
	];

	test.each(testCases)('subtract(%s, %s) = %s', (a, b, expected) => {
		expect(functions.subtract(a, b)).toBeCloseTo(expected);
	});
});

describe('missing parameters in subtract', () => {
	const testCases = [
		[null, 'parameter missing'],
		[1, 'parameter missing'],
		['a', 'parameter missing'],
		['', 'parameter missing'],
	];

	test.each(testCases)(
		'subtract(%s) throws exception: %s',
		(testValue, expected) => {
			expect(() => functions.subtract(testValue)).toThrow(expected);
		}
	);
});

describe('parameters are not numbers in subtract', () => {
	const testCases = [
		['a', 2, 'only numbers allowed'],
		[1, 'a', 'only numbers allowed'],
		['a', 'b', 'only numbers allowed'],
		['', '', 'only numbers allowed'],
		['      ', '  ', 'only numbers allowed'],
		[null, 1, 'parameter missing'],
		[undefined, 1, 'parameter missing'],
	];

	test.each(testCases)(
		'subtract(%s, %s) throws an exception %s',
		(a, b, expected) => {
			expect(() => functions.subtract(a, b)).toThrow(expected);
		}
	);
});

describe('Test divide with testcases', () => {
	const testCases = [
		[1, 2, 0.5],
		[4, 2, 2],
		[-4, 2, -2],
		[4, -2, -2],
		[-4, -2, 2],
		[3, 3, 1],
		[2.4, 3.5, 0.69],
		[2.5, 3, 0.83],
		[1, 1, 1],
		[2, 3, 0.67],
		[-2, -4, 0.5],
		[-2, 4, -0.5],
		[2, -4, -0.5],
		[0, 3, 0],
		[0, -3, 0],
		[10, 11.5, 0.87],
		[2.5, 3, 0.83],
		[-2.5, 3, -0.83],
		[3, -2.5, -1.2],
		[-3, 2.5, -1.2],
		[-3, -2.5, 1.2],
		[-2.5, -2.5, 1],
		[-2.5, 2.5, -1],
		[2.4, -2.5, -0.96],
	];

	test.each(testCases)('divide(%s, %s) = %s', (a, b, expected) => {
		expect(functions.divide(a, b)).toBeCloseTo(expected);
	});
});

describe('Test divide with special testcases', () => {
	const testCases = [
		[0, 0, Number.NaN],
		[0, 0, NaN],
		[2, 0, Number.POSITIVE_INFINITY],
		[2, 0, Infinity],
		[-2, 0, Number.NEGATIVE_INFINITY],
		[Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
		[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
		[Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NaN],
		[Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN],
	];

	test.each(testCases)('divide(%s, %s) = %s', (a, b, expected) => {
		expect(functions.divide(a, b)).toBe(expected);
	});
});

describe('missing parameters in divide', () => {
	const testCases = [
		[null, 'parameter missing'],
		[1, 'parameter missing'],
		['a', 'parameter missing'],
		['', 'parameter missing'],
	];

	test.each(testCases)(
		'divide(%s) throws exception: %s',
		(testValue, expected) => {
			expect(() => functions.divide(testValue)).toThrow(expected);
		}
	);
});

describe('parameters are not numbers in divide', () => {
	const testCases = [
		['a', 2, 'only numbers allowed'],
		[1, 'a', 'only numbers allowed'],
		['a', 'b', 'only numbers allowed'],
		['', '', 'only numbers allowed'],
		['      ', '  ', 'only numbers allowed'],
		[null, 1, 'parameter missing'],
		[undefined, 1, 'parameter missing'],
	];

	test.each(testCases)(
		'divide(%s, %s) throws an exception %s',
		(a, b, expected) => {
			expect(() => functions.divide(a, b)).toThrow(expected);
		}
	);
});
