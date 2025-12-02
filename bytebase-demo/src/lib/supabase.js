import { createClient } from '@supabase/supabase-js';

// 1. 这里填入你刚才发给我的 URL
const supabaseUrl = 'https://xhwldhqsayrqoglthpqn.supabase.co';

// 2. 这里填入你的 Key (注意：真实的 Key 通常是很长的一串字符，以 eyJ 开头)
// 如果你的 Key 真的只是 123456，就填 123456。
// 如果你复制漏了，请重新去 Supabase 网站复制那个长长的 anon public key。
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhod2xkaHFzYXlycW9nbHRocHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1ODgxMTcsImV4cCI6MjA4MDE2NDExN30.qcgNuQnGQZ78sCgEWN2JtJZrv8xyxk8gFxwyvCC9y5o';

export const supabase = createClient(supabaseUrl, supabaseKey);