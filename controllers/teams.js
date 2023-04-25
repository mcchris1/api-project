import Team from "../models/Team.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const team = await Team.findOne(req.name);
    res.json(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateTeam = async (req, res) => {
  const { name } = req.params;
  const team = await Team.findOneAndUpdate(name, req.body);
  res.status(200).json(team);
};

export const deleteTeam = async (req, res) => {
  try {
    const { name } = req.params;
    const deleted = await Team.findOneAndDelete(name);

    if (deleted) {
      return res.status(200).send("Team Deleted!");
    }

    throw new Error("Team not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
