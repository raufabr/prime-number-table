import React, { useState } from "react";

function App() {
	const [number, setNumber] = useState("");

	const handleChange = (event) => {
		console.log("handlechange clicked");

		setNumber(event.target.value);
	};

	const isPrime = (num) => {
		const sqrt = Math.sqrt(num);
		for (let i = 2; i < sqrt; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	};

	//const numbers = [2, 3, 5, 6, 7, 8, 9];
	const findNPrimes = (nth) => {
		//start with the first prime number
		let primes = [2];
		//start with the count
		let count = 1;
		//second prime number
		let num = 3;
		//Start from odd number and increase count by 2
		//if we find prime number then push it to an array and increase count
		while (count <= nth) {
			if (isPrime(num)) {
				primes.push(num);
				count++;
			}
			num += 2;
		}
		console.log(primes);
		return primes;
	};
	return (
		<div>
			<span>Prime number</span>
			<span>
				<input
					type="number"
					name="primeNum"
					onChange={handleChange}
					value={number}
				/>
			</span>
			<input type="submit" value="Submit" />
			<br />
			{findNPrimes(3)}
			<br />
			{findNPrimes(6)}
			<br />
			{findNPrimes(9)}
			<br />
			{findNPrimes(12)}
		</div>
	);
}

export default App;
