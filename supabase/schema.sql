-- Users table (Extends Supabase Auth)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tools Usage log
CREATE TABLE public.tools_usage (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id),
  tool_name TEXT NOT NULL,
  input_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics tracking
CREATE TABLE public.analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id),
  tool_name TEXT,
  ip_address TEXT,
  device_type TEXT,
  country TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Files metadata
CREATE TABLE public.files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.users(id),
  tool_name TEXT,
  file_url TEXT,
  file_type TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;

-- Admin can see all, users see their own
CREATE POLICY "Users can view own usage" ON public.tools_usage FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all usage" ON public.tools_usage FOR ALL USING (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');
