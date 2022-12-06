const app = require("./src/server");
const db = require("./src/models");
require("colors");
const RunSeeder = require("./src/seed");

db.sequelize
  .sync({ force: true })
  .then(() => {
    RunSeeder();
    console.log("Drop and recreate db success.".bgYellow);
    console.log("Mysql Connected.".bgYellow);
  })
  .catch((error) =>
    console.log(`Mysql connection failed: ${error.message}`.bgRed)
  );

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server ready on port : ${[port]}`.bgGreen);
});
