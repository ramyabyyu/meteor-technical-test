const app = require('./src/server');
const db = require('./src/models');
require('colors');

db.sequelize
  .sync()
  .then(() => {
    console.log('Mysql Connected.'.bgGreen);
  })
  .catch((error) =>
    console.log(`Mysql connection failed: ${error.message}`.bgRed)
  );

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server ready on port : ${port}`.bgGreen);
});
