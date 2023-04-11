import db from "../db/connection.js";
import Team from "../models/Team.js";
import teams from "./teams.json" assert { type: "json" };

const insertData = async () => {
  // Reset Database
  await db.dropDatabase();
  // Insert Teams into the Database
  await Team.insertMany(teams);
  // Close DB connection
  db.close();
};

insertData();