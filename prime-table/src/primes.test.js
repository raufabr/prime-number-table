import { isPrime, findNPrimes } from "./primes";

describe("Test whether isPrime works with prime nums", () => {
	test("2 is prime", () => {
		expect(isPrime(2)).toBe(true);
	});
	test("21 isn't prime", () => {
		expect(isPrime(21)).toBe(false);
	});
	test("-1004 isn't prime", () => {
		expect(isPrime(-1004)).toBe(false);
	});
	test("7919 is prime", () => {
		expect(isPrime(7919)).toBe(true);
	});
	test("String is prime", () => {
		expect(isPrime("String")).toBe(false);
	});
});

describe("Test that findNPrimes returns the right elements in array", () => {
	test("Finds the first 5 elements of an array", () => {
		expect(findNPrimes(5)).toEqual([2, 3, 5, 7, 11]);
	});
	test("Negative number returns null", () => {
		expect(findNPrimes(-1)).toEqual(null);
	});
});
