'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { Article } from '@/lib/types';
import { fetchArticleById } from '@/lib/supabase';

type ActionType = 'image' | 'gif' | 'carousel' | null;

export default function ArticleDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const rawId = params.id;
  const articleId = Array.isArray(rawId) ? rawId[0] : rawId;

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<ActionType>(null);

  useEffect(() => {
    if (!articleId) return;
    let mounted = true;
    setLoading(true);
    fetchArticleById(articleId)
      .then((row) => {
        if (mounted) setArticle(row);
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
  }, [articleId]);

  const goBackToDashboard = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">Loading…</div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={goBackToDashboard}
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            ← Back to dashboard
          </button>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-xl font-semibold text-slate-900">Article not found</h1>
            <p className="mt-2 text-sm text-slate-600">We couldn't find an article with this ID. Please return to the dashboard and choose a different article.</p>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </div>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(article.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const actionLabel = selectedAction === 'image' ? 'Image' : selectedAction === 'gif' ? 'GIF' : selectedAction === 'carousel' ? 'Carousel' : null;

  const baseActionClasses = 'inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <button type="button" onClick={goBackToDashboard} className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900">
          ← Back to dashboard
        </button>

        <article className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <header className="border-b border-slate-100 pb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{article.source}</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{article.title}</h1>
            <p className="mt-2 text-sm text-slate-500">Published {formattedDate}</p>
          </header>

          <section className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section className="mt-8 border-t border-slate-100 pt-6">
            <h2 className="text-sm font-semibold tracking-wide text-slate-900">Create Content From This Article</h2>
            <p className="mt-1 text-xs text-slate-500">Choose an action below to simulate creating derivative content. These actions only update local UI state in this mockup.</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={() => setSelectedAction('image')} className={`${baseActionClasses} ${selectedAction === 'image' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'}`}>
                Create Image
              </button>
              <button type="button" onClick={() => setSelectedAction('gif')} className={`${baseActionClasses} ${selectedAction === 'gif' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'}`}>
                Create GIF
              </button>
              <button type="button" onClick={() => setSelectedAction('carousel')} className={`${baseActionClasses} ${selectedAction === 'carousel' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'}`}>
                Create Carousel
              </button>
            </div>

            {actionLabel && (
              <div className="mt-4 rounded-md border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Mock action selected: <span className="font-semibold">{actionLabel}</span>
              </div>
            )}
          </section>
        </article>
      </div>
    </main>
  );
}

