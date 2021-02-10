import React, { useState } from "react";
import { Table } from "./Table";
function App() {
	const [input, setInput] = useState("");
	//const [primeNums, setPrimeNums] = useState([]);

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return (
		<div>
			<span>Prime number</span>
			<span>
				<input
					type="number"
					name="primeNum"
					onChange={handleChange}
					value={input}
				/>
			</span>
			{input > 2 && <Table input={input} />}
		</div>
	);
}

export default App;
