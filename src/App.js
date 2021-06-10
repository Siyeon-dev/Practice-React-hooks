import React, { useState } from "react";

const useInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	// 다른 func에서 이벤트를 처리할 수 있다.
	const onChange = (event) => {
		console.log(event.target);
	};

	return { value, onChange };
};

const App = () => {
	const name = useInput("Mr. ");

	return (
		<div>
			<h1>Hello</h1>
			<input placeholder='Name' {...name} />
		</div>
	);
};

export default App;
