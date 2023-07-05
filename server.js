const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const { myDataSource } = require("./app-data-source.js");

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const port = process.env.PORT || 2043;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
