import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dgqijchiutiosctqfvzf.supabase.co";
const supabaseKey = "sb_publishable_as_EpclD8lx7KMjZW_ouDQ_OOEnX5d1";

export const supabase = createClient(supabaseUrl, supabaseKey);
