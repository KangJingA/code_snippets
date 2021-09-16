import express from 'express';

const app = express();
app.use(express.json()); // JSON Parser middleware

const PORT = 3000;

app.get("/", (_req, res) => {
  res.send(`server is listening on port ${PORT}`);
});

app.get("/ping", (_req, res) => {
  res.send("ping");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
