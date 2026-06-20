-- Create consultas table to store contact form submissions
CREATE TABLE IF NOT EXISTS consultas (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rubro VARCHAR(255),
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_consultas_created_at ON consultas(created_at DESC);
