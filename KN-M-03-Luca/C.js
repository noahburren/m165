print("Spiele nach dem 15. März 2024:");
printjson(
    db.games.find({ date: { $gt: new Date("2024-03-15T00:00:00Z") } }).toArray()
);

print("Spieler mit Position 'Pitcher' oder 'Shortstop':");
printjson(
    db.players.find({
        $or: [
            { position: "Pitcher" },
            { position: "Shortstop" }
        ]
    }).toArray()
);

print("Coaches mit Namen, die 'Coach' enthalten:");
printjson(
    db.coaches.find({ name: { $regex: "Coach", $options: "i" } }).toArray()
);

print("Teams in Liga 'A' mit 'Coach Adams' als Trainer:");
printjson(
    db.teams.find({ $and: [ { league: "A" }, { coach: coach1 } ] }).toArray()
);

öprintjson(
    db.teams.find({}, { _id: 1, name: 1, league: 1 }).toArray()
);

print("Spieler ohne _id:");
printjson(
    db.players.find({}, { _id: 0, name: 1, position: 1 }).toArray()
);
