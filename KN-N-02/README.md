# A) Daten hinzufügen (20%)

```
CREATE
    (team1:Team {team_id: 1, name: "New York Yankees", city: "New York"}),
    (team2:Team {team_id: 2, name: "Los Angeles Dodgers", city: "Los Angeles"}),

    (player1:Spieler {spieler_id: 101, name: "Aaron Judge", position: "Outfielder", geburtsdatum: "1992-04-26"}),
    (player2:Spieler {spieler_id: 102, name: "Mookie Betts", position: "Outfielder", geburtsdatum: "1992-10-07"}),

    (trainer1:Trainer {trainer_id: 201, name: "Aaron Boone", geburtsdatum: "1973-03-09"}),
    (trainer2:Trainer {trainer_id: 202, name: "Dave Roberts", geburtsdatum: "1972-05-31"}),

    (game1:Spiel {spiel_id: 301, datum: "2024-05-15", ort: "Yankee Stadium"}),
    (game2:Spiel {spiel_id: 302, datum: "2024-06-10", ort: "Dodger Stadium"}),

    (player1)-[:GEHOERT_ZU]->(team1),
    (player2)-[:GEHOERT_ZU]->(team2),

    (trainer1)-[:TRAINIERT]->(team1),
    (trainer2)-[:TRAINIERT]->(team2),

    (team1)-[:SPIELT_IN]->(game1),
    (team2)-[:SPIELT_IN]->(game2);
```

---

# B) Daten abfragen (20%)


## Alle Knoten und Beziehungen auslesen
```
MATCH (n) OPTIONAL MATCH (n)-[r]->(m) RETURN n, r, m;
```
**Erklärung:** Die `OPTIONAL MATCH`-Klausel stellt sicher, dass auch Knoten ohne Beziehungen angezeigt werden.

## Spieler eines bestimmten Teams abrufen
```
MATCH (s:Spieler)-[:GEHOERT_ZU]->(t:Team)
WHERE t.name = "New York Yankees"
RETURN s.name, s.position, t.name;
```

## Spiele an einem bestimmten Ort abrufen
```
MATCH (sp:Spiel)
WHERE sp.ort = "Yankee Stadium"
RETURN sp.spiel_id, sp.datum, sp.ort;
```

## Trainer und ihre Teams anzeigen, auch wenn kein Trainer existiert
```
MATCH (t:Team)
OPTIONAL MATCH (t)<-[:TRAINIERT]-(tr:Trainer)
RETURN t.name AS Team, tr.name AS Trainer;
```

## Spieler mit Geburtsjahr vor 1995 anzeigen
```
MATCH (s:Spieler)-[:GEHOERT_ZU]->(t:Team)
WHERE date(s.geburtsdatum) < date("1995-01-01")
RETURN s.name, s.geburtsdatum, t.name;
```

---

# C) Daten löschen (20%)

## Spieler ohne DETACH DELETE löschen (führt zu Fehlern, falls Beziehungen bestehen)
```
MATCH (s:Spieler {spieler_id: 101})
DELETE s;
```

## Spieler mit DETACH DELETE löschen (empfohlen)
```
MATCH (s:Spieler {spieler_id: 101})
DETACH DELETE s;
```

---

# D) Daten verändern (20%)

## Team-Namen aktualisieren
```
MATCH (t:Team {name: "New York Yankees"})
SET t.name = "New York Legends"
RETURN t;
```

## Spieler-Position aktualisieren und neue Eigenschaft hinzufügen
```
MATCH (s:Spieler {name: "Aaron Judge"})
SET s.position = "First Baseman", s.nationalität = "USA"
RETURN s;
```

## Trainer eines Teams ersetzen
```
MATCH (t:Team {name: "New York Legends"})<-[:TRAINIERT]-(oldTrainer:Trainer)
MATCH (newTrainer:Trainer {name: "Joe Smith"})
DELETE oldTrainer
CREATE (newTrainer)-[:TRAINIERT]->(t)
RETURN t, newTrainer;
```
---
# E Zusätzliche Klauseln (20%)
## Merge
### Erklärung
``MERGE`` stellt sicher, dass ein Knoten oder eine Beziehung nur dann erstellt wird, wenn sie noch nicht existiert. Falls der Knoten oder die Beziehung bereits vorhanden ist, wird nichts geändert.
### ANwendungsfall
Angenommen, wir möchten sicherstellen, dass das Team „Boston Red Sox“ nur einmal in der Datenbank existiert, egal ob das Skript mehrmals ausgeführt wird.
### Beispiel 1

```
MERGE (t:Team {name: "Boston Red Sox", city: "Boston"})
RETURN t;
```
Falls „Boston Red Sox“ bereits existiert, passiert nichts. Falls nicht, wird es erstellt.

### Beispiel 2
```
MATCH (p:Spieler {name: "Mookie Betts"}), (t:Team {name: "Boston Red Sox"})
MERGE (p)-[:GEHOERT_ZU]->(t);
```
Falls Mookie Betts bereits mit dem Team verknüpft ist, wird keine doppelte Beziehung erstellt.

---

## Foreach
### Erklärung
``FOREACH`` wird verwendet, um Operationen für jede einzelne Komponente einer Liste auszuführen. Das ist nützlich, wenn du mehrere Knoten oder Beziehungen in einem Schritt ändern möchtest.
### Anwendungsfall
Wir wollen eine Liste von Spielern auf einmal zu einem Team hinzufügen.

### Beispiel 1

```
MATCH (t:Team {name: "New York Yankees"})  
WITH t, ["Derek Jeter", "Alex Rodriguez", "Mariano Rivera"] AS spielerListe  
FOREACH (spielerName IN spielerListe |  
    MERGE (s:Spieler {name: spielerName})  
    MERGE (s)-[:GEHOERT_ZU]->(t)  
);
```
- Wir definieren eine Liste mit Spielernamen.

- Für jeden Namen in der Liste:

    - Falls der Spieler nicht existiert, wird er erstellt.

    - Falls die Beziehung nicht existiert, wird sie hinzugefügt.

- So können wir mehrere Spieler mit einer einzigen Abfrage zu einem Team hinzufügen.
