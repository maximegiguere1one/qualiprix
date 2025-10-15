-- Create table for lead guide tracking
CREATE TABLE IF NOT EXISTS public.lead_guides (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  guide_sent BOOLEAN NOT NULL DEFAULT FALSE,
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.lead_guides ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for lead capture)
CREATE POLICY "Anyone can submit email for guide"
ON public.lead_guides
FOR INSERT
WITH CHECK (true);

-- Create policy for service role to read all
CREATE POLICY "Service role can read all leads"
ON public.lead_guides
FOR SELECT
USING (auth.role() = 'service_role');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lead_guides_email ON public.lead_guides(email);
CREATE INDEX IF NOT EXISTS idx_lead_guides_created ON public.lead_guides(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_guides_sent ON public.lead_guides(guide_sent) WHERE guide_sent = false;

-- Add comment
COMMENT ON TABLE public.lead_guides IS 'Stores email leads who requested the 10 errors guide';