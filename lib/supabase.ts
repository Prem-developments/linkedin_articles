import type { Article } from './types';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  // Keep this silent at runtime for non-built environments, but throw in dev to help debugging
  if (process.env.NODE_ENV === 'development') {
    console.warn('Supabase env vars are not set: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY');
  }
}

const headers = {
  apikey: SUPABASE_KEY || '',
  Authorization: `Bearer ${SUPABASE_KEY || ''}`,
  Accept: 'application/json',
};

export async function fetchArticles(): Promise<Article[]> {
  if (!SUPABASE_URL) return [];
  const url = `${SUPABASE_URL}/rest/v1/articles?select=*&order=created_at.desc`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as Article[];
}

export async function fetchArticleById(id: string): Promise<Article | null> {
  if (!SUPABASE_URL) return null;
  const url = `${SUPABASE_URL}/rest/v1/articles?id=eq.${encodeURIComponent(id)}&select=*`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Failed to fetch article: ${res.status} ${res.statusText}`);
  }
  const items = (await res.json()) as Article[];
  return items[0] ?? null;
}
