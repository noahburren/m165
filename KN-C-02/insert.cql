-- Spiel 1: Team A spielt gegen Team B
INSERT INTO team_spiele_by_team (
        team_id,
        spiel_id,
        spiel_datum,
        ort,
        gegner_team_id
    )
VALUES (
        985e9a26-a409-41ac-94e7-66e3f876d6bb,
        -- Team A ID
        uuid(),
        '2025-04-11',
        'Yankee Stadium',
        014b151c-1e25-4be9-a8ff-540c2e415382 -- Team B ID
    );
-- Spiel 2: Team A spielt gegen Team C
INSERT INTO team_spiele_by_team (
        team_id,
        spiel_id,
        spiel_datum,
        ort,
        gegner_team_id
    )
VALUES (
        985e9a26-a409-41ac-94e7-66e3f876d6bb,
        -- Team A ID
        uuid(),
        '2025-04-12',
        'Fenway Park',
        014b151c-1e25-4be9-a8ff-540c2e415382 -- Team B ID
    );
-- Spieler für Team A
INSERT INTO spieler_by_team (
        team_id,
        spieler_id,
        name,
        position,
        geburtsdatum
    )
VALUES (
        985e9a26-a409-41ac-94e7-66e3f876d6bb,
        -- Team A ID
        uuid(),
        'Aaron Judge',
        'Outfielder',
        '1992-04-26'
    );
-- Spieler für Team A
INSERT INTO spieler_by_team (
        team_id,
        spieler_id,
        name,
        position,
        geburtsdatum
    )
VALUES (
        985e9a26-a409-41ac-94e7-66e3f876d6bb,
        -- Team A ID
        uuid(),
        'Mookie Betts',
        'Outfielder',
        '1992-10-07'
    );
-- Trainer für Team A
INSERT INTO trainer_by_team (
        team_id,
        trainer_id,
        trainer_name
    )
VALUES (
        985e9a26-a409-41ac-94e7-66e3f876d6bb,
        -- Team A ID
        uuid(),
        'Aaron Boone'
    );
-- Trainer für Team B
INSERT INTO trainer_by_team (
        team_id,
        trainer_id,
        trainer_name
    )
VALUES (
        014b151c-1e25-4be9-a8ff-540c2e415382,
        -- Team B ID
        uuid(),
        'Alex Cora'
    );