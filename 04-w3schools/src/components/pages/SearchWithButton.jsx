import { useState, useTransition } from "react";

function SearchResultsList({ query }) {
	const items = [];
	if (query) {
		for (let i = 0; i < 500; i++) {
			items.push(
				<li key={i}>
					Result for {query} - {i}
				</li>
			);
		}
	}
	return <ul>{items}</ul>;
}

function SearchWithButton() {
	const [input, setInput] = useState("");
	const [query, setQuery] = useState("");

	const [isPending, startTransition] = useTransition();

	const handleSearch = () => {
		startTransition(() => {
			setQuery(input);
		});
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	return (
		<div>
			<input type="text" value={input} onChange={handleChange} placeholder="Type to search..." />

			<button onClick={handleSearch} type="button">
				Pesquisar
			</button>

			{isPending && <p>Carregando resultados...</p>}

			<SearchResultsList query={query} />
		</div>
	);
}

export default SearchWithButton;
