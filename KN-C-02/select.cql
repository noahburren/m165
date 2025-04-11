-- Alle Spiele von Team A anzeigen (team_id: 985e9a26-a409-41ac-94e7-66e3f876d6bb)
SELECT *
FROM team_spiele_by_team
WHERE team_id = 985e9a26-a409-41ac-94e7-66e3f876d6bb;
-- Alle Spieler von Team A anzeigen (team_id: 985e9a26-a409-41ac-94e7-66e3f876d6bb)
SELECT *
FROM spieler_by_team
WHERE team_id = 985e9a26-a409-41ac-94e7-66e3f876d6bb;
-- Trainer von Team B anzeigen (team_id: 014b151c-1e25-4be9-a8ff-540c2e415382)
SELECT *
FROM trainer_by_team
WHERE team_id = 014b151c-1e25-4be9-a8ff-540c2e415382;