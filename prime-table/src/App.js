import React, { useState } from "react";

function App() {
	const [number, setNumber] = useState("");

	const handleChange = (event) => {
		console.log("handlechange clicked");

		setNumber(event.target.value);
	};

	return (
		<div>
			<span>Prime number</span>
			<span>
				<input
					type="text"
					name="primeNum"
					onChange={handleChange}
					value={number}
				/>
			</span>
			<input type="submit" value="Submit" />
		</div>
	);
}

export default App;
