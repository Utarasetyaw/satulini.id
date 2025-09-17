import { createClient } from '@supabase/supabase-js'

// Ganti dengan URL dan Anon Key dari proyek Supabase Anda
// Sangat disarankan untuk menggunakan environment variables (.env) untuk keamanan
const supabaseUrl = 'https://qopcuorsqupqgqbjwksm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcGN1b3JzcXVwcWdxYmp3a3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMDkxNTIsImV4cCI6MjA3MzY4NTE1Mn0.pDYV32huzdkiqDwP7ZM6AGXeJSnnIjNQC9MZb3okReo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)