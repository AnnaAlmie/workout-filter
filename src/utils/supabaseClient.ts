import { createClient, PostgrestResponse, PostgrestError } from '@supabase/supabase-js';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

type TData = {
    id: string,
    author: string,
    title: string,
    url: string,
    type: number[],
    level: number

}
export type {
    PostgrestResponse,
    PostgrestError,
    TData
}