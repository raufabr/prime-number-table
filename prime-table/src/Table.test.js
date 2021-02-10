import { Table } from "./Table";
import { render } from "@testing-library/react";

describe("test Table", () => {
	const inputRows = 3;
	const { queryAllByRole } = render(<Table />);

	test("It renders a table", () => {
		expect(queryAllByRole("table")).toHaveLength(1);
	});
	// test("It has the right number of rows", () => {
	// 	expect(queryAllByRole("row")).toHaveLength(inputRows + 1);
	// });
});
