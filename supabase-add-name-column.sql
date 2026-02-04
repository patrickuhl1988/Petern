-- Name-Spalte für Gästebuch ergänzen
-- In Supabase: SQL Editor → New Query → einfügen → Run

ALTER TABLE comments ADD COLUMN IF NOT EXISTS name TEXT;
