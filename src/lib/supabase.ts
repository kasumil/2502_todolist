// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

// Supabase URL과 API 키를 환경변수로 설정
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabase 클라이언트 초기화
export const supabase = createClient(supabaseUrl, supabaseKey);
