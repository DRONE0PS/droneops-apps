import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hgmtppatmmxzpyeooyux.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnbXRwcGF0bW14enB5ZW9veXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0Mjk2OTcsImV4cCI6MjA5NjAwNTY5N30.IsVw4QCXCZP_uT_qnbJ4xM0l2xypmGdNUJxUjato1vQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
