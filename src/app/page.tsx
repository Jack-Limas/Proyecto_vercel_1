import { JSX, SVGProps } from "react";

export default function NewsCardsDashboard() {
  const categories = [
    { name: "Global", icon: GlobeIcon },
    { name: "Business", icon: BriefcaseIcon },
    { name: "Entertainment", icon: ClapperboardIcon },
    { name: "Sports", icon: MedalIcon, active: true },
    { name: "Health", icon: HeartIcon },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Overall layout: main + sidebar */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT MAIN AREA */}
          <section className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-6">
            {/* HERO */}
            <article className="col-span-12 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <figure className="col-span-12 md:col-span-4">
                  <img
                    src="https://images.unsplash.com/photo-1614743559948-d158e36ecb4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA=="
                    alt="Lamp"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </figure>
                <header className="col-span-12 md:col-span-8">
                  <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
                    Green plants are going to Extinct about 500 times faster
                    than they should, Study finds
                  </h1>
                  <p className="mt-3 text-sm text-slate-500">
                    If you are the sort of person who just can not keep a plant
                    alive, you are not alone according to a new study published
                    June 10 in the journal Nature.
                  </p>
                  <footer className="mt-4 flex items-center gap-3 text-sm">
                    <img
                      src="https://img.freepik.com/foto-gratis/retrato-hombre-rubio-guapo-positivo-barba-bigote-pie-manos-cruzadas-camisa-blanca-leve-sonrisa-expresion-confianza_176420-17129.jpg?semt=ais_incoming&w=740&q=80"
                      alt="Alexander"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">Alexander Parkinson</span>
                    <span className="text-slate-400">•</span>
                    <time className="text-slate-500">Jun 20, 2019</time>
                    <button className="ml-auto text-slate-500 hover:text-slate-800 transition">
                      <BookmarkIcon className="w-5 h-5" />
                    </button>
                  </footer>
                </header>
              </div>
            </article>

            {/* Coffee | Search | Short Film */}
            <article className="col-span-12 sm:col-span-4">
              <figure className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <img
                  src="https://payz.com/wp-content/uploads/2023/04/Coffee-scaled.jpg"
                  alt="Coffee"
                  className="w-full h-56 object-cover"
                />
                <figcaption className="p-4">
                  <h2 className="font-semibold leading-snug text-base">
                    How to make the perfect morning coffee, according to the
                    Science
                  </h2>
                  <footer className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                    <img
                      src="https://media.istockphoto.com/id/1064924442/es/foto/joven-morena-de-segura-en-camisa-blanca-elegante-sonriente-retrato-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=TcdUWS4Vhbrcug19t2JuUCwcM_PXViowszxcEamn9hM="
                      alt="Tara Gibson"
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>Tara Gibson</span>
                    <span className="text-slate-400">•</span>
                    <time>Jul 13, 2019</time>
                  </footer>
                </figcaption>
              </figure>
            </article>

            <section className="col-span-12 sm:col-span-5">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                <label className="relative block">
                  <input
                    className="w-full rounded-xl border border-slate-200 pl-12 pr-28 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Search for articles"
                    aria-label="Search for articles"
                  />
                  <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">
                    Search
                  </button>
                </label>
                <nav className="mt-4 flex flex-wrap gap-2 text-sm">
                  {["Politics", "Science", "Movies", "Technology"].map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-600"
                    >
                      #{c}
                    </span>
                  ))}
                </nav>
              </div>
            </section>

            <article className="col-span-12 sm:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-3 flex items-center gap-3">
                <img
                  src="https://www.shutterstock.com/image-photo/modern-building-canary-wharf-london-260nw-2587658455.jpg"
                  alt="Building"
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold leading-snug text-sm">
                    An Inspiring Short Film
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">80,989 views</p>
                </div>
              </div>
            </article>

            {/* Profile + Stats (subido arriba) */}
            <article className="col-span-12 sm:col-span-6 bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex items-center gap-6">
              <img
                src="https://i.pinimg.com/200x/e9/32/91/e93291c42fb2a9fe730f859a7ff38109.jpg"
                alt="Alex Morrison"
                className="w-24 h-24 rounded-2xl object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">Alex Morrison</h2>
                <p className="text-sm text-gray-500">Senior Journalist</p>
                <div className="flex gap-6 mt-2 text-sm">
                  <span>
                    Articles <strong>34</strong>
                  </span>
                  <span>
                    Followers <strong>980</strong>
                  </span>
                  <span>
                    Rating <strong>8.9</strong>
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="px-4 py-1 bg-gray-200 rounded-lg">
                    Chat
                  </button>
                  <button className="px-4 py-1 bg-blue-600 text-white rounded-lg">
                    Follow
                  </button>
                </div>
              </div>
            </article>

            {/* Arrows + Tags (subido arriba) */}
            <section className="col-span-12 sm:col-span-6 flex flex-col gap-4">
              <div className="flex items-center justify-end gap-3">
                <button className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 grid place-content-center hover:scale-105 transition">
                  <ChevronLeftIcon className="w-7 h-7" />
                </button>
                <button className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 grid place-content-center hover:scale-105 transition">
                  <ChevronRightIcon className="w-7 h-7" />
                </button>
              </div>
              <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-sm">
                    Donald Trump
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-sm">
                    Politics
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-sm">
                    USA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-sm">
                    2020
                  </span>
                </div>
              </div>
            </section>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4">
              <nav className="space-y-2">
                {categories.map(({ name, icon: Icon, active }) => (
                  <button
                    key={name}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition text-left ${
                      active
                        ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* --- ICONS (manuales, sin instalar nada) --- */
function BaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </BaseIcon>
  );
}
function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </BaseIcon>
  );
}
function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <polyline points="15 18 9 12 15 6" />
    </BaseIcon>
  );
}
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <polyline points="9 18 15 12 9 6" />
    </BaseIcon>
  );
}
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20" />
    </BaseIcon>
  );
}
function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </BaseIcon>
  );
}
function ClapperboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M2 7l5-5 4 5 5-5 4 5" />
    </BaseIcon>
  );
}
function MedalIcon(props: React.SVGProps<SVGSVGElement >) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 12l-2 8l6-3l6 3l-2-8" />
    </BaseIcon>
  );
}
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M20.8 6.6a5.5 5.5 0 00-7.8 0L12 7.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 22l7.8-6.6l1-1a5.5 5.5 0 000-7.8z" />
    </BaseIcon>
  );
}
