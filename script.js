let show = false;

function showCheckboxes() {
	let checkboxes = document.getElementById("checkBoxes");

	if (show) {
		checkboxes.style.display = "block";
		show = false;
	} else {
		checkboxes.style.display = "none";
		show = true;
	}
}

function getData() {
	let checkboxes = document.getElementsByName("genre");
	let result = "";

	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			result += checkboxes[i].value + "+";
		}
	}

	console.log(result);
	return result;
}

async function fetchBooks(url, parse) {
	console.log("URL:" + url);

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		return await json;
	} catch (error) {
		console.error(error.message);
	}
}

async function jsonData() {
	let json = await fetchBooks("https://openlibrary.org/search.json?subject=" + getData());
	let pages = Math.ceil(json.numFound / 100);
	let random_page = Math.floor(Math.random() * pages);
	let titles = [];
	let authors = [];
	let id = [];

	json = await fetchBooks("https://openlibrary.org/search.json?subject=" + getData() + "&page=" + random_page);

	for (let i = 0; i <= 4; i++) {
		let random = Math.ceil(Math.random() * 100);
		console.log(random);
		if (json.docs[random].cover_i == undefined) id[i] = "https://actar.com/wp-content/uploads/2015/12/nocover.jpg";
		else id[i] = "https://covers.openlibrary.org/b/id/" + json.docs[random].cover_i + "-M.jpg";
		titles[i] = json.docs[random].title;
		authors[i] = json.docs[random].author_name;
	}

	return [titles, authors, id];
}

async function showBooks() {
	window.onload = function () {
		let results = getElementById("results");
	};
	results.innerHTML = "";

	let data = await jsonData();

	let book = document.createElement("section");
	book.className = "books";

	for (let i = 0; i < 4; i++) {
		book = document.createElement("section");
		book.className = "books";
		book.id = data[0][i];
		book.innerHTML = `
		<section class="book">
			<div class="cover">
				<img class="book_cover" src="${data[2][i]}" alt="${data[0][i]}" />
			</div>
			<div class="book_info">
				<h2 class="book_title">${data[0][i]}</h2>
				<p class="author_name">${data[1][i]}</p>
				<p class="descripttion">Lorem ipsorem ipsum dolororem lor sit amet</p>
				<p class="more_info">
					<a href="" target="_blank">
						More Info
					</a>
				</p>
			</div>
		</section>`;
		results.appendChild(book);
	}
}
