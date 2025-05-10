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

function getCheckboxesValue() {
	let checkboxes = document.getElementsByName("genre");
	let result = "";
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) result += checkboxes[i].value + "+";
	}
	return result;
}
