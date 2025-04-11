-- Löschen eines bestimmten Spiels von Team A (team_id: 985e9a26-a409-41ac-94e7-66e3f876d6bb)
DELETE FROM team_spiele_by_team
WHERE team_id = 985e9a26-a409-41ac-94e7-66e3f876d6bb
    AND spiel_datum = '2025-04-11';
-- Löschen eines Spielers aus Team A (team_id: 985e9a26-a409-41ac-94e7-66e3f876d6bb)
DELETE FROM spieler_by_team
WHERE team_id = 985e9a26-a409-41ac-94e7-66e3f876d6bb
    AND spieler_id = 234e5678-f90b-23d4-b567-528725570111;
-- Beispiel Spieler-ID
-- Löschen eines Trainers von Team A (team_id: 985e9a26-a409-41ac-94e7-66e3f876d6bb)
DELETE FROM trainer_by_team
WHERE team_id = 985e9a26-a409-41ac-94e7-66e3f876d6bb;
-- Alle Daten aus den Tabellen löschen (vorsichtig sein mit TRUNCATE, da es alles löscht!)
TRUNCATE team_spiele_by_team;
TRUNCATE spieler_by_team;
TRUNCATE trainer_by_team;