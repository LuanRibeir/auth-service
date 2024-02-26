// Set up mongoose connection.
const mongoose = require("mongoose");
// Set up .env
require("dotenv").config();

// Credencials.
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const mongoDB = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.iokvjns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB Connect
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
