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

	return result;
}

async function getBooks() {
	let url = "https://openlibrary.org/search.json?subject=" + getData();

	try {
		const response = await fetch(url, {
			method: "GET",
		});
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error.message);
	}
}

function showBooks() {
	console.log(getBooks());
}
