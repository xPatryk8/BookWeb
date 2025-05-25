import { useState } from "react";
import "./App.css";

function Genres() {
	const genres = [
		{ key: 0, name: "Adventure" },
		{ key: 1, name: "Detective" },
		{ key: 2, name: "Dystopian" },
		{ key: 3, name: "Fantasy" },
		{ key: 4, name: "Historical Fiction" },
		{ key: 5, name: "History" },
		{ key: 6, name: "Horror" },
		{ key: 7, name: "Mystery" },
		{ key: 8, name: "Poetry" },
		{ key: 9, name: "Psychology" },
		{ key: 10, name: "Romance" },
		{ key: 11, name: "Sci-Fi" },
		{ key: 12, name: "Young Adult" },
	];

	const [searchItem, setSearchItem] = useState("");
	const [filteredGenres, setFilteredGenres] = useState(genres);

	// TODO: fix searching
	const handleInput = (searchValue: string) => {
		setSearchItem(searchValue);
		if (searchItem !== " ") {
			const filtered = genres.filter((item) => {
				return Object.values(item).join("").toLowerCase().includes(searchItem.toLowerCase());
			});
			setFilteredGenres(filtered);
		} else {
			setFilteredGenres(genres);
		}
	};

	return (
		<>
			<input type="text" value={searchItem} onChange={(e) => handleInput(e.target.value)} name="searchGenre" id="SearchGenre" placeholder="Search genre..." />
			<div id="genreList">
				{filteredGenres.map((gen) => (
					<label key={gen.key}>
						<input type="checkbox" name={gen.name} id={gen.name} />
						{gen.name}
					</label>
				))}
			</div>
		</>
	);
}

function Languages() {
	const languages = [
		{ key: 0, name: "English" },
		{ key: 1, name: "French" },
		{ key: 2, name: "German" },
		{ key: 3, name: "Italian" },
		{ key: 4, name: "Polish" },
		{ key: 5, name: "Russian" },
		{ key: 6, name: "Spanish" },
	];

	return (
		<>
			<h4>Languages</h4>
			<div id="languageList">
				{languages.map((lang) => (
					<label key={lang.key}>
						<input type="radio" name="language" id={lang.name} /> {lang.name}
					</label>
				))}
			</div>
		</>
	);
}

function Results() {
	return (
		<section id="results" className="results">
			LOL
		</section>
	);
}

function App() {
	return (
		<>
			<header>
				<h1>Random Book Generator</h1>
			</header>
			<main>
				<nav>
					<Genres></Genres>
					<Languages></Languages>
				</nav>
				<div id="books">
					<Results></Results>
				</div>
			</main>

			{/* <>
				
				<main>
					<form>
						<div className="multipleSelection">
							<div className="selectBox">
								<select>
									<option>Select options</option>
									<option value="test">yitufvytui</option>
								</select>
								<div className="overSelect" />
							</div>
							<div id="checkBoxes">
								<label htmlFor="action">
									<input type="checkbox" name="genre" defaultValue="action" id="action" />
									Action
								</label>
								<br />
								<label htmlFor="horror">
									<input type="checkbox" name="genre" defaultValue="horror" id="horror" />
									Horror
								</label>
								<br />
								<label htmlFor="romance">
									<input type="checkbox" name="genre" defaultValue="romance" id="romance" />
									Romance
								</label>
								<br />
								<label htmlFor="biography">
									<input type="checkbox" name="genre" defaultValue="biography" id="biography" />
									Biography
								</label>
								<br />
								<label htmlFor="adventure">
									<input type="checkbox" name="genre" defaultValue="adventure" id="adventure" />
									Adventure
								</label>
								<br />
							</div>
						</div>
						<input type="text" name="author" id="author" placeholder="Author Name" />
						<input type="button" id="generate" defaultValue="Generate Book" />
					</form>
					<section id="results" className="results" />
				</main>
			</> */}
		</>
	);
}

export default App;
