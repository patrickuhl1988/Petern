-- Tabelle für Gästebuch-Kommentare
-- In Supabase: SQL Editor → New Query → einfügen → Run

CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  text TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security: Jeder darf lesen und schreiben (anonym)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Alte Policies ggf. entfernen (falls Tabelle schon existiert)
DROP POLICY IF EXISTS "Allow public read" ON comments;
DROP POLICY IF EXISTS "Allow public insert" ON comments;

CREATE POLICY "Allow public read" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON comments
  FOR INSERT WITH CHECK (true);
