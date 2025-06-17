// Server creation and configuration
const http = require("node:http");
const app = require("./src/app");
const { connectToDB } = require("./src/config/db");

// Config .env
require("dotenv").config();

// Server creation
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on("listening", () => {
    console.log(`Server listening on port ${PORT}`);
    connectToDB();
});

server.on("error", (error) => {
    console.log(error);
});
