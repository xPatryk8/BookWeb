import { useState } from "react";
import "./App.css";

function Genres() {
	const genres: string[] = ["Adventure", "Detective", "Dystopian", "Fantasy", "Historical Fiction", "History", "Horror", "Mystery", "Poetry", "Psychology", "Romance", "Sci-Fi", "Young Adult"];

	const [searchItem, setSearchItem] = useState<string>("");
	const [selected, setSelected] = useState<string[]>([]);

	const handleCheckbox = (genre: string) => {
		const updated = selected.includes(genre) ? selected.filter((g) => g !== genre) : [...selected, genre];

		setSelected(updated);
	};

	const filteredGenres = genres.filter((g) => g.toLowerCase().includes(searchItem.toLowerCase()));

	return (
		<>
			<input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} placeholder="Search genre..." />
			<div id="genreList">
				{filteredGenres.map((genre) => (
					<label key={genre}>
						<input type="checkbox" checked={selected.includes(genre)} onChange={() => handleCheckbox(genre)} />
						{genre}
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

function Year() {
	return (
		<div id="years">
			<h4>Years</h4>
			<div id="choose_year">
				<label>
					Min year
					<input type="number" name="min_year" id="min_year" min="10" max="2025" />
				</label>
				<label>
					Max year
					<input type="number" name="max_year" id="max_year" min="10" max="2025" />
				</label>
			</div>
		</div>
	);
}

function Books() {
	return (
		<>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best bon the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best book in the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best book in the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best book in the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best book in the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
			<div className="book">
				<img
					className="bookCover"
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F99designs-blog.imgix.net%2Fblog%2Fwp-content%2Fuploads%2F2017%2F07%2Fattachment_78895234.png%3Fauto%3Dformat%26q%3D60%26fit%3Dmax%26w%3D930&f=1&nofb=1&ipt=93434eb76101024364318287caa6bd76d421ae09ab44492ce7444bc92bbfed17"
					alt=""
				/>

				<div className="bookInfo">
					<h2 className="title">The Best Title</h2>
					<p className="author">The Best Author</p>
					<p className="description">This is the best book in the world oh o iujafb ase fihub aslhjfdb</p>
					<a className="moreInfo" href="" target="_blank">
						More Info
					</a>
				</div>
			</div>
		</>
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
					<Year></Year>
				</nav>
				<section id="booksList">
					<Books></Books>
				</section>
			</main>
		</>
	);
}

export default App;
