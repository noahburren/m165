db.teams.updateOne({ _id: team1 }, { $set: { league: "A1" } });

db.players.updateMany(
  { $or: [{ position: "Pitcher" }, { position: "Shortstop" }] },
  { $set: { status: "Active" } }
);

db.coaches.replaceOne(
  { name: "Coach Adams" },
  { name: "Coach Adams", license: "A", experience: 10 }
);
