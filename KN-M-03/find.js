db.teams.find({ name: /Red/ });

db.players.find({ position: "Pitcher", team: team1 });

db.coaches.find({}, { _id: 1, name: 1 });

db.games.find({ date: { $gte: new Date("2024-03-15") } });

db.players.find({ $or: [{ position: "Pitcher" }, { position: "Shortstop" }] });

db.games.find({}, { _id: 0, date: 1, result: 1 });
