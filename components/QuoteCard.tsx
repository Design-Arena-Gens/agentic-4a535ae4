import type { Quote } from '@/lib/quotes';

export function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/40">
      {quote.arabic ? (
        <p className="font-display text-2xl leading-normal text-slate-100" dir="rtl" lang="ar">
          {quote.arabic}
        </p>
      ) : null}
      <p className="mt-4 text-lg leading-relaxed text-slate-200">{quote.albanian}</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
        <span>{quote.context}</span>
        <span className="font-semibold text-slate-300">{quote.source}</span>
      </div>
      {quote.tags.length ? (
        <ul className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
          {quote.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-slate-700 px-3 py-1">
              #{tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
