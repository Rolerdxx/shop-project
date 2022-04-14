const PORT = process.env.PORT || 5000;

const http = require("http");

const app = require("./app.js");

const { LoadPlanets } = require("./models/planets.model");

const server = http.createServer(app);

async function LoadServer() {
  await LoadPlanets();

  server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
}

LoadServer();
