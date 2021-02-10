const isPrime = (num) => {
	if (num <= 0) {
		return false;
	}
	const sqrt = Math.sqrt(num);
	for (let i = 2; i <= sqrt; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

const findNPrimes = (nth) => {
	//start with the first prime number
	let primes = [2];
	if (nth <= 1) {
		return primes;
	}
	//start with the count
	let count = 1;
	//second prime number
	let num = 3;
	//Start from odd number and increase count by 2
	//if we find prime number then push it to an array and increase count
	while (count < nth) {
		if (isPrime(num)) {
			primes.push(num);
			count++;
		}
		num += 2;
	}
	return primes;
};

export { isPrime, findNPrimes };
