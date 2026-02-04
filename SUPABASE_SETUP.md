# Supabase-Setup für gemeinsames Gästebuch

Damit alle Besucher die Kommentare sehen können (nicht nur lokal), brauchst du ein kostenloses Supabase-Projekt.

## 1. Supabase-Projekt anlegen

1. Gehe zu [supabase.com](https://supabase.com) und erstelle einen Account (kostenlos).
2. Klicke auf **New Project**.
3. Wähle einen Namen (z.B. `petern`) und ein Passwort für die DB.
4. Warte, bis das Projekt fertig ist.

## 2. Tabelle erstellen

1. Im Supabase-Dashboard: **SQL Editor** öffnen.
2. Neuen Query erstellen und folgenden SQL-Code einfügen:

```sql
-- Tabelle für Gästebuch-Kommentare
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security: Jeder darf lesen und schreiben (anonym)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON comments
  FOR INSERT WITH CHECK (true);
```

3. **Run** ausführen.

## 3. API-Daten eintragen

1. Im Supabase-Dashboard: **Settings** → **API**.
2. Kopiere:
   - **Project URL** (z.B. `https://xxxx.supabase.co`)
   - **anon public** Key (unter "Project API keys")

3. Öffne die Datei `supabase-config.js` im Projekt.
4. Trage die Werte ein:

```javascript
window.PETERN_SUPABASE_URL = "https://DEIN-PROJEKT.supabase.co";
window.PETERN_SUPABASE_ANON_KEY = "dein-anon-key-hier";
```

## 4. Besucherzähler (optional, global)

Für einen globalen Besucherzähler: SQL Editor → neuer Query → `supabase-visitor-counter.sql` ausführen.
Danach wird der Zähler in Supabase gespeichert (alle Besucher sehen dieselbe Zahl).

## 5. Deploy

Änderungen committen und auf GitHub pushen. Das Gästebuch ist danach für alle Besucher gemeinsam sichtbar.
