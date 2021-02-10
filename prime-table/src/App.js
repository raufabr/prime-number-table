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

	const numbers = [2, 3, 5, 6, 7, 8, 9];

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
			{console.log(numbers.map((num) => isPrime(num)))}
		</div>
	);
}

export default App;
