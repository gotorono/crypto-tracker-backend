var app = require('express')();
var http = require('http').Server(app);

const crypto = require("./routes/crypto");

var cors = require('cors');

const hostname = 'localhost';
const port = 8001;

app.use(cors())

app.use("/api", crypto);

app.get("/", (req, res) => {
  res.status(200).send("Up")
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});