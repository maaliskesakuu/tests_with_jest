'use strict';

// This demo shows the order in which tests are run
// This actually tests nothing
// but only prints out to the console what is run

beforeAll(() => {
	console.log('beforeAll', 'init before all tests'.toUpperCase());
});

afterAll(() => {
	console.log('afterAll', 'cleaning after all tests'.toUpperCase());
});

test('This is not in test suit', () => {
	console.log('Test', 'just some test');
});

describe('This is a test suite 1', () => {
	beforeEach(() => {
		console.log('beforeEach', 'init test in suite 1 before every test');
	});

	afterEach(() => {
		console.log('after each', 'cleaning after every test in suite 1');
	});

	test('run test A of the first suite', () => {
		console.log('Test A');
	});

	test('run test B of the first suite', () => {
		console.log('Test B');
	});

	test('run test C of the first suite', () => {
		console.log('Test C');
	});
});

describe('This is another suite (suite 2)', () => {
	beforeAll(() => {
		console.log('beforeAll2', 'init before all tests in suite 2');
	});

	afterAll(() => {
		console.log('afterAll2', 'cleaning after all tests in suite 2');
	});

	describe('This is the first "subsuite"', () => {
		test('Test D of the first subsuite of suite 2', () => {
			console.log('Test D');
		});

		test('Test E of the first subsuite of suite 2', () => {
			console.log('Test E');
		});
	});
	describe('This is the second subsuite of suite 2', () => {
		beforeEach(() => {
			console.log('beforeEach', 'init test in subsuite 2 of suite 2');
		});

		test('test F of the second subsuite of suite 2', () => {
			console.log('Test F');
		});

		test('Test G of the second subsuite of suite 2', () => {
			console.log('Test G');
		});
	});
});

describe('This tests for an exception', () => {
	function testFunction() {
		throw Error('This is an exception');
	}

	test('test if a function throws an exception', () => {
		expect(() => testFunction()).toThrow('This is an exception');
	});
});

describe('This tests an asynchronous function', () => {
	test('Test promise resolve', () => {
		expect(Promise.resolve('resolved')).resolves.toBe('resolved');
	});

	test('Test promise reject', () => {
		expect(Promise.reject('rejected')).rejects.toBe('rejected');
	});
});

describe('Test with an array of test values', () => {
	const testValues = [
		['first', 'second', 'firstsecond'],
		['je', 'st', 'jest'],
	];

	const concat = (part1, part2) => part1 + part2;

	test.each(testValues)('%s and %s = %s', (a, b, expected) => {
		expect(concat(a, b)).toBe(expected);
	});

	// can be done individually instead of test.each

	test('first and second = firstsecond', () => {
		expect(concat('first', 'second')).toBe('firstsecond');
	});

	test('je and st = jest', () => {
		expect(concat('je', 'st')).toBe('jest');
	});

	// different ways to do the same as test.each

	test(`${testValues[0][0]} and ${testValues[0][1]}=${testValues[0][2]}`, ()=> {
		expect(concat(testValues[0][0], testValues[0][1])).toBe(testValues[0][2])
	});

	for(let value of testValues) {
		test(`${value[0]} and ${value[1]}=${value[2]}`, ()=> {
			expect(concat(value[0], value[1])).toBe(value[2])
		})
	}
});
