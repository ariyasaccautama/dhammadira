"use client";

export default function Closing() {
  const scrollToDresscode = () => {
    document
      .getElementById("dresscode")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/featuredmovie.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-6xl font-black mb-8">
          Sampai Jumpa di Hari Bahagia Kami ✨
        </h2>

        <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Terima kasih telah menjadi bagian dari
          cerita cinta kami.
          <br />
          Dengan penuh rasa syukur, kami
          menantikan kehadiranmu di hari yang
          sangat berarti ini.
        </p>

        <blockquote
          className="
            mt-10
            text-gray-400
            italic
            text-lg
          "
        >
          “Sabbe sattā bhavantu sukhitattā.”
          <br />
          — Semoga semua makhluk berbahagia.
        </blockquote>

        {/* Reminder Dresscode */}
        <div
          className="
            mt-14
            bg-white/5
            backdrop-blur
            border
            border-white/10
            rounded-3xl
            p-8
            max-w-2xl
            mx-auto
          "
        >
          <div className="text-5xl mb-4">
            👔👗
          </div>

          <h3 className="text-2xl font-bold mb-3">
            Jangan Lupa Dresscode Ya!
          </h3>

          <p className="text-gray-300 mb-6">
            Kami mengundang seluruh tamu untuk
            mengenakan warna earth-tone agar
            suasana acara semakin hangat,
            harmonis, dan indah dalam dokumentasi.
          </p>

          <button
            onClick={scrollToDresscode}
            className="
              bg-red-600
              hover:bg-red-700
              px-6
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            🎨 Lihat Dresscode
          </button>
        </div>

      </div>
    </section>
  );
}