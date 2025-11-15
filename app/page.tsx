import { QuoteCard } from '@/components/QuoteCard';
import { quotes } from '@/lib/quotes';

const timeline = [
  {
    title: 'Shek. II hixhri',
    description:
      'Abdullah ibn Mubārək (118-181 h.) ishte dijetar, muhaddith dhe mudzahid që la pas një trashëgimi të pasur të zuhdit dhe sinqeritetit.'
  },
  {
    title: 'Kitāb az-Zuhd',
    description:
      'Përmes veprës së tij të njohur, ai dokumentoi histori që zbusin zemrat dhe i ftojnë besimtarët në lot prej frikës së Allahut.'
  },
  {
    title: 'Letra për Fudajlin',
    description:
      'Në poezinë “O adhurues i Haramejnit”, ai kujtoi se lotët dhe gjaku në shtegun e Allahut janë më të çmuar se zbukurimi i jashtëm.'
  }
];

export default function Page() {
  return (
    <main>
      <header className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Fjalë të shkollës së zuhdit</p>
        <h1 className="font-display text-4xl text-slate-100 sm:text-5xl">
          Lotët në traditën e Abdullah ibn Mubārëkut
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Koleksion thëniesh, transmetimesh dhe vargjesh që theksojnë fuqinë e lotit në pastrimin e zemrës,
          siç i përcolli Abdullah ibn Mubārëk. Tekstet vijojnë në arabisht dhe përkthim shqip, me burime për
          studim të mëtejshëm.
        </p>
      </header>

      <section className="mt-14 grid gap-8 sm:grid-cols-2">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
        <h2 className="font-display text-2xl text-slate-100">Kujtesë kronologjike</h2>
        <p className="mt-2 text-sm text-slate-400">
          Një përmbledhje e shpejtë e elementeve historike për t’u futur në atmosferën e teksteve.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {timeline.map((item) => (
            <li key={item.title} className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
              <h3 className="font-semibold text-slate-200">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 text-center text-sm text-slate-500">
        Ky material synon të inkurajojë meditimin e butë dhe të kujdesshëm; konsulto gjithmonë burimet
        origjinale arabe për studim të plotë.
      </footer>
    </main>
  );
}
