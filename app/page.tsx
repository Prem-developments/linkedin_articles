'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArticleCard } from '@/components/ArticleCard';
import type { Article } from '@/lib/types';
import { fetchArticles } from '@/lib/supabase';

export default function DashboardPage() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchArticles()
      .then((rows) => {
        if (mounted) setArticles(rows);
      })
      .catch((err) => {
        console.error(err);
        if (mounted) setError(String(err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const filteredArticles = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return articles;

    const lower = trimmed.toLowerCase();
    return articles.filter((article) => article.title.toLowerCase().includes(lower));
  }, [query, articles]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Content Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Browse source articles and quickly spin up derivative content ideas.
            </p>
          </div>

          <div className="w-full max-w-xs">
            <label htmlFor="article-search" className="mb-1 block text-xs font-medium text-slate-600">
              Search articles
            </label>
            <div className="relative">
              <input
                id="article-search"
                type="search"
                placeholder="Search by title..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
        </header>

        <section className="mt-8">
          {loading ? (
            <p className="text-sm text-slate-500">Loading articles…</p>
          ) : error ? (
            <p className="text-sm text-red-500">Error loading articles: {error}</p>
          ) : filteredArticles.length === 0 ? (
            <p className="text-sm text-slate-500">No articles match your search. Try a different title or clear the filter.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

