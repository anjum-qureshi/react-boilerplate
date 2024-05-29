import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	it("Should render snapshot", () => {
		const { container } = render(<App />);
		expect(container).toMatchSnapshot();
	});
});
