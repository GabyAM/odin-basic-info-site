const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	fs.readFile("./index.html", (err, data) => {
		if (err) {
			res.status(404).send("404 not found");
		}
		res.type("text/html").send(data);
	});
});

app.get("/about", (req, res) => {
	fs.readFile("./about.html", (err, data) => {
		if (err) {
			res.status(404).send("404 not found");
		}
		res.type("text/html").send(data);
	});
});

app.get("/contact-me", (req, res) => {
	fs.readFile("./contact-me.html", (err, data) => {
		if (err) {
			res.status(404).send("404 not found");
		}
		res.type("text/html").send(data);
	});
});

app.use((req, res) => {
	fs.readFile("./404.html", (err, data) => {
		if (err) {
			res.status(404).send("404 not found");
		}
		res.type("text/html").send(data);
	});
});

app.listen(8080);
