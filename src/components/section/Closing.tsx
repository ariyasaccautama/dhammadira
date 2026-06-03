"use client";

import { FaInstagram } from "react-icons/fa";

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
            "url('/images/footer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

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
            Jangan Lupa Dresscode Ya! 😊
          </h3>

          <p className="text-gray-400 mb-6">
            Yuk tampil selaras dan ikut
            meramaikan momen spesial kami.
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

        {/* Footer */}

        <div className="mt-24">

          <div
            className="
              w-24
              h-px
              bg-red-600/40
              mx-auto
              mb-8
            "
          />

          <p className="text-gray-500 text-sm">
            Design & Developed with
            <span className="text-red-500">
              {" "}❤️{" "}
            </span>
            by
          </p>

          <a
            href="https://instagram.com/ariyamelulu"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-4

              text-gray-200
              hover:text-red-500

              transition-all
              duration-300

              hover:scale-105
            "
          >
            <FaInstagram size={20} />

            <span className="font-medium">
              Instagram
            </span>
          </a>

          <p className="text-xs text-gray-500 mt-8">
            © 2026 Dhamma & Dira Wedding Invitation
          </p>

        </div>

      </div>
    </section>
  );
}