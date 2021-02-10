import "./Table.css";
import ReactHtmlParser from "react-html-parser";

export const Table = ({ input }) => {
	const isPrime = (num) => {
		const sqrt = Math.sqrt(num);
		for (let i = 2; i < sqrt; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	};

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
		return primes;
	};
	const generateTable = (primeNums) => {
		let output = "";
		for (let i = 0; i <= primeNums.length - 1; i++) {
			output += "<tr>" + "<th>" + primeNums[i] + "</th>";
			for (let j = 0; j <= primeNums.length - 1; j++) {
				output += "<td>" + primeNums[i] * primeNums[j] + "</td>";
			}
			output += "</tr>";
		}
		let test = [];
		console.log(output);
		return ReactHtmlParser(output);
	};

	return (
		<table>
			<thead>
				<tr>
					<th />
					{findNPrimes(input).map((num) => (
						<th>{num}</th>
					))}
				</tr>
			</thead>
			<tbody>{generateTable(findNPrimes(input))}</tbody>
		</table>
	);
};
