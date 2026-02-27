'use client';

import { useRouter } from 'next/navigation';
import type { Article } from '@/lib/types';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/article/${article.id}`);
  };

  const formattedDate = new Date(article.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div
      onClick={handleNavigate}
      className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md cursor-pointer"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {article.source}
          </p>
          <p className="text-xs text-slate-400">{formattedDate}</p>
        </div>
        <h3 className="text-base font-semibold text-slate-900 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-3">
          {article.summary}
        </p>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            handleNavigate();
          }}
          className="inline-flex items-center rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Open Article
        </button>
      </div>
    </div>
  );
}

