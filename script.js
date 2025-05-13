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

async function getBooks() {
	/* 	const subjectData = getData();
	if (subjectData) {
		// Check if subjectData is not empty
		console.log("ok");
	} else {
		console.log("Please select at least one genre.");
	} */

	let url = "https://openlibrary.org/search.json?subject=" + getData();
	console.log("URL:" + url);

	try {
		const response = await fetch(url, {
			method: "GET",
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		console.log(json);
		return json;
	} catch (error) {
		console.error(error.message);
	}
}

function showBooks() {
	window.onload = function () {
		let results = getElementById("results");
	};
	let book = document.createElement("section");
	book.className = "books";
	book.innerHTML = `<section class="book">
	<div class="cover">
		<img class="book_cover" src="design.png" alt="" />
	</div>
	<div class="book_info">
		<h2 class="book_title">Book Title</h2>
		<p class="author_name">Author Name</p>
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
