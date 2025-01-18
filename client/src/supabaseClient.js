// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY

console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
console.log('Supabase Key:', process.env.REACT_APP_SUPABASE_KEY);

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL or Key is undefined');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase;
