import "./Table.css";
export const Table = (props) => {
	return (
		<table>
			<thead>
				<tr>
					<th></th>
					<th>2</th>
					<th>3</th>
					<th>5</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>2</th>
					<td>4</td>
					<td>6</td>
					<td>10</td>
				</tr>
				<tr>
					<th>3</th>
					<td>6</td>
					<td>9</td>
					<td>15</td>
				</tr>
				<tr>
					<th>5</th>
					<td>10</td>
					<td>15</td>
					<td>25</td>
				</tr>
			</tbody>
		</table>
	);
};
