// query_data.js

// A) Aggregationen (50%)

// 1. Zwei $match-Anweisungen separat geschaltet
db.players.aggregate([
  { $match: { position: "Pitcher" } },
  { $match: { team: team1 } },
]);

// 2. $match, $project, $sort
db.players.aggregate([
  { $match: { team: team1 } },
  { $project: { name: 1, position: 1, _id: 0 } },
  { $sort: { name: 1 } },
]);

// 3. $sum (Gesamte Spieler pro Team zählen)
db.players.aggregate([
  {
    $group: {
      _id: "$team",
      totalSpieler: { $sum: 1 },
    },
  },
]);

// 4. $group (Spieler nach Position gruppieren)
db.players.aggregate([
  {
    $group: {
      _id: "$position",
      anzahl: { $sum: 1 },
    },
  },
]);

// B) Join-Aggregation (30%)

// 1. $lookup von Team zu Coach
db.teams.aggregate([
  {
    $lookup: {
      from: "coaches",
      localField: "coach",
      foreignField: "_id",
      as: "coachDetails",
    },
  },
]);

// 2. $lookup mit $unwind, $match, $project
db.teams.aggregate([
  {
    $lookup: {
      from: "coaches",
      localField: "coach",
      foreignField: "_id",
      as: "coachDetails",
    },
  },
  { $unwind: "$coachDetails" },
  { $match: { "coachDetails.license": "A" } },
  {
    $project: {
      teamName: "$name",
      coachName: "$coachDetails.name",
      license: "$coachDetails.license",
    },
  },
]);

// C) Unter-Dokumente / Arrays (20%)

// 1. Nur Unterdokumente (players im Spiel)
db.games.find({}, { players: 1, _id: 0 });

// 2. Nach Feld im Unterdokument filtern (Spiele mit bestimmten Spieler)
db.games.find({ players: player1 }, { date: 1, result: 1, players: 1 });

// 3. $unwind auf players
db.games.aggregate([
  { $unwind: "$players" },
  {
    $project: {
      gameDate: "$date",
      result: "$result",
      playerId: "$players",
    },
  },
]);
