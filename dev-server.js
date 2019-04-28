const app = require('./src/server');
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Dev-Server started on port ${PORT}`);
});
