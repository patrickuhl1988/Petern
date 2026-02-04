-- Visitor Counter für Petern
-- In Supabase: SQL Editor → New Query → einfügen → Run

CREATE TABLE IF NOT EXISTS visitor_counter (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

INSERT INTO visitor_counter (key, count) VALUES ('visits', 0)
ON CONFLICT (key) DO NOTHING;

CREATE OR REPLACE FUNCTION increment_visitor_count()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE new_count INTEGER;
BEGIN
  UPDATE visitor_counter SET count = count + 1 WHERE key = 'visits'
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

GRANT USAGE ON SCHEMA public TO anon;
GRANT EXECUTE ON FUNCTION increment_visitor_count() TO anon;
