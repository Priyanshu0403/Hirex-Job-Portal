//this file is to be created to setup supabase client with auth token
//given in the documentation of Supabase 
//this will let you make api calls to supabase for the backend services
//but here we also used clerk for authentication
//so there are some modifications to be done to include clerk auth token 

//token flow 
// Clerk → React Component → useFetch() → API Functions → Supabase Client → RLS

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(supabaseUrl, supabaseKey, {
    global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
  });
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default supabaseClient;
