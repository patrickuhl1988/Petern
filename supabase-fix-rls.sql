-- Supabase Gästebuch: RLS und Rechte prüfen/fixen
-- Im SQL Editor ausführen, falls das Gästebuch nicht funktioniert

-- Rechte für anonyme Zugriffe
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT, INSERT ON comments TO anon;

-- RLS aktivieren
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Bestehende Policies ggf. neu anlegen
DROP POLICY IF EXISTS "Allow public read" ON comments;
DROP POLICY IF EXISTS "Allow public insert" ON comments;

CREATE POLICY "Allow public read" ON comments
  FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public insert" ON comments
  FOR INSERT TO anon WITH CHECK (true);
