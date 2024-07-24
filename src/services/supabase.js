import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bxxhimlkdoajdykppczl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4eGhpbWxrZG9hamR5a3BwY3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MzQ0MDcsImV4cCI6MjAzNTMxMDQwN30.3dIzLOQTBOE3KRtj_FPymNFr37NdaioKN4aaNuRLJ7E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
