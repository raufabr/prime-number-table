import { isPrime } from "./primes";

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
