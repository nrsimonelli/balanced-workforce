import { createClient } from '@supabase/supabase-js'
import { VITE_SUPABASE_KEY, VITE_SUPABASE_URL } from './constants'
import { Database } from './database.types'

export const supabase = createClient<Database>(
  VITE_SUPABASE_URL ?? '',
  VITE_SUPABASE_KEY ?? ''
)
