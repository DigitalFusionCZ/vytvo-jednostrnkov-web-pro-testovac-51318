export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/coffee-beans.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 p-8 bg-white/70 rounded-lg shadow-xl max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
            Testovací Kavárna "U Kódu"
          </h1>
          <p className="text-2xl text-neutral-700 font-medium italic">
            "Nejlepší káva pro vaše bugy."
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">O Nás</h2>
          <p className="text-lg leading-relaxed text-neutral-700 mb-6">
            Vítejte v <span className="font-semibold">Testovací Kavárně "U Kódu"</span>, kde se vášeň pro kód snoubí s tou nejlepší kávou. Jsme útočištěm pro programátory, vývojáře a všechny, kdo si rádi vychutnávají kvalitní nápoj v inspirativním prostředí.
          </p>
          <p className="text-lg leading-relaxed text-neutral-700">
            Naší misí je poskytovat nejen vynikající kávu a občerstvení, ale také prostor pro kreativitu, spolupráci a odpočinek od náročného debugování. Přijďte se přesvědčit sami!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-12">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Vynikající Káva</h3>
              <p className="text-neutral-700">Široký výběr kávových specialit připravených z čerstvě pražených zrn.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Pohodlné Pracovní Místo</h3>
              <p className="text-neutral-700">Stabilní Wi-Fi, dostatek zásuvek a klidné koutky pro soustředěnou práci.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Příjemné Občerstvení</h3>
              <p className="text-neutral-700">Sladké i slané pochoutky, ideální kódování.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">Kontaktujte Nás</h2>
          <p className="text-lg leading-relaxed text-neutral-700 mb-8">
            Máte dotazy, návrhy nebo si jen chcete popovídat o kávě a kódu? Neváhejte nás kontaktovat!
          </p>
          <div className="bg-neutral-50 p-6 rounded-lg shadow-md inline-block">
            <p className="text-xl font-semibold text-neutral-800 mb-2">Email:</p>
            <a
              href="mailto:test@kavarna.cz"
              className="text-2xl text-blue-600 hover:underline font-medium"
            >
              test@kavarna.cz
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <p>&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}
