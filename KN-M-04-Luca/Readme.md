# A) Aggregationen (50%)

## 1. Zwei $match-Anweisungen separat geschaltet
![](A1.png)
**Beschreibung:** Erst nach Position, dann nach Namen gefiltert.

## 2. $match, $project, $sort
![](A2.png)
**Beschreibung**: Nur Name + Position gezeigt, absteigend sortiert.

## 3. $sum (Gesamte Spieler pro Team zählen)
![](A3.png)
**Beschreibung**: Zählt wie viele Spieler pro Team.

## 4. $group (Spieler nach Position gruppieren)
![](A4.png)
**Beschreibung**: Gruppiert Spieler nach Position und zählt wieviele es hat.


# B) Join-Aggregation (30%)

## 1. $lookup von Team zu Coach
![](B1.png)
**Beschreibung**: Holt Coach-Infos zum Team über $lookup.

## 2. $lookup mit $unwind, $match, $project
![](B2.png)
**Beschreibung**: Nur Teams mit Coach Lizenz A aus, zeigt Name von Team + Coach.

# C) Unter-Dokumente / Arrays (20%)

## 1. Nur Unterdokumente (players im Spiel)
![](C1.png)
**Beschreibung**: Zeigt nur das players-Feld aus jedem Spiel.

## 2. Nach Feld im Unterdokument filtern (Spiele mit bestimmten Spieler)
![](C2.png)
**Beschreibung**: Findet Spiele, wo ein Spieler "67e6a35e1105c92aa8480a71 " ID hat.

## 3. $unwind auf players
![](C3.png)
**Beschreibung**: Macht aus jedem Spieler im Array ein einzelnes Dokument.

