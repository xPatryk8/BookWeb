const express = require("express");

const app = express();
const PORT = 3000;

// Enable CORS for all origins

// Route: /books?subject=action
app.get("/books", async (req, res) => {
	const subject = req.query.subject || "action";
	const url = `https://openlibrary.org/search.json?subject=${encodeURIComponent(subject)}`;

	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Status: ${response.status}`);

		const data = await response.json();
		res.json(data); // Return OpenLibrary API result
	} catch (error) {
		console.error("Fetch error:", error.message);
		res.status(500).json({ error: "Failed to fetch books" });
	}
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
