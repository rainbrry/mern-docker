import express from "express";

const app = express();

const port = 8000;

app.get("/", (req, res) => res.send("apps"));

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
