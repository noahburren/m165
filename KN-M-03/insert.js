let team1 = ObjectId();
let team2 = ObjectId();
let player1 = ObjectId();
let player2 = ObjectId();
let player3 = ObjectId();
let coach1 = ObjectId();
let coach2 = ObjectId();
let game1 = ObjectId();
let game2 = ObjectId();

db.createCollection("teams");
db.createCollection("players");
db.createCollection("coaches");
db.createCollection("games");

db.teams.insertMany([
  {
    _id: team1,
    name: "Red Sox",
    league: "A",
    coach: coach1,
    players: [player1, player2],
  },
  {
    _id: team2,
    name: "Blue Jays",
    league: "B",
    coach: coach2,
    players: [player3],
  },
]);

db.players.insertMany([
  {
    _id: player1,
    name: "John Doe",
    position: "Pitcher",
    team: team1,
  },
  {
    _id: player2,
    name: "Jane Smith",
    position: "Catcher",
    team: team1,
  },
  {
    _id: player3,
    name: "Mike Johnson",
    position: "Shortstop",
    team: team2,
  },
]);

db.coaches.insertOne({
  _id: coach1,
  name: "Coach Adams",
  license: "A",
});

db.coaches.insertOne({
  _id: coach2,
  name: "Coach Brown",
  license: "B",
});

db.games.insertMany([
  {
    _id: game1,
    date: new Date("2024-03-15"),
    opponent: "Blue Jays",
    result: "5-3",
    players: [player1, player2],
  },
  {
    _id: game2,
    date: new Date("2024-03-20"),
    opponent: "Red Sox",
    result: "2-6",
    players: [player3],
  },
]);
