import "./Table.css";
import ReactHtmlParser from "react-html-parser";
import { findNPrimes } from "./primes";
export const Table = ({ input }) => {
	const generateTable = (primeNums) => {
		let output = "";
		for (let i = 0; i <= primeNums.length - 1; i++) {
			output += "<tr>" + "<th>" + primeNums[i] + "</th>";
			for (let j = 0; j <= primeNums.length - 1; j++) {
				output += "<td>" + primeNums[i] * primeNums[j] + "</td>";
			}
			output += "</tr>";
		}

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
