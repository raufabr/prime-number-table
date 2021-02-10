import React, { useState } from "react";
import { Table } from "./Table";
function App() {
	const [input, setInput] = useState(1);

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
					min="1"
					onChange={handleChange}
					value={input}
				/>
			</span>
			{input >= 1 && <Table input={input} />}
		</div>
	);
}

export default App;
