-- Visitor Counter für Petern (einfach: jede Visite = eine Zeile)
-- In Supabase: SQL Editor → New Query → einfügen → Run

CREATE TABLE IF NOT EXISTS visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE visits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert visits" ON visits;
DROP POLICY IF EXISTS "Allow public read visits" ON visits;

CREATE POLICY "Allow public insert visits" ON visits FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public read visits" ON visits FOR SELECT TO anon USING (true);
