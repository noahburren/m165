USE mykeyspace;
-- 1. Tabelle: Alle Spiele eines Teams anzeigen
CREATE TABLE team_spiele_by_team (
    team_id UUID,
    spiel_id UUID,
    spiel_datum DATE,
    ort TEXT,
    gegner_team_id UUID,
    PRIMARY KEY (team_id, spiel_datum, spiel_id)
) WITH CLUSTERING
ORDER BY (spiel_datum ASC, spiel_id ASC);
-- 2. Tabelle: Alle Spieler eines Teams anzeigen
CREATE TABLE spieler_by_team (
    team_id UUID,
    spieler_id UUID,
    name TEXT,
    position TEXT,
    geburtsdatum DATE,
    PRIMARY KEY (team_id, spieler_id)
);
-- 3. Tabelle: Trainer eines Teams anzeigen
CREATE TABLE trainer_by_team (
    team_id UUID,
    trainer_id UUID,
    trainer_name TEXT,
    PRIMARY KEY (team_id)
);