const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.use("/auth", require("./routes/auth"));


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
