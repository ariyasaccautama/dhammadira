import { weddingData } from "../../data/wedding";
import FadeIn from "../FadeIn";
import CinematicReveal from "../CinematicReveal";


export default function Event() {
  return (
  <FadeIn>
  <CinematicReveal>
    <section
      id="event"
      className="py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Lokasi & Jadwal Acara
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* PEMBERKATAN */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            min-h-[560px]
            border
            border-red-900/30
            hover:border-red-600
            transition
            duration-300
          "
        >
          <img
            src="/images/pemberkatan.png"
            alt="Pemberkatan"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/70
              to-black/20
            "
          />

          <div className="relative z-10 p-8 h-full flex flex-col justify-end">

            <p className="text-red-500 font-semibold mb-2 tracking-widest">
              PEMBERKATAN
            </p>

            <h3 className="text-3xl font-black mb-6">
              {weddingData.event.akad.location.venue}
            </h3>

            {/* Kalender */}
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  bg-red-600
                  rounded-2xl
                  overflow-hidden
                  text-center
                  w-24
                  shadow-xl
                "
              >
                <div className="bg-red-700 py-2 text-sm font-bold">
                  AUG
                </div>

                <div className="py-4">
                  <div className="text-4xl font-black">
                    08
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold">
                  Sabtu
                </p>

                <p className="text-gray-300">
                  8 Agustus 2026
                </p>

                <div
                  className="
                    inline-block
                    mt-2
                    bg-white/10
                    backdrop-blur
                    px-4
                    py-2
                    rounded-lg
                    font-semibold
                  "
                >
                  🕐 {weddingData.event.akad.time}
                </div>
              </div>

            </div>

            <p className="text-gray-400 mb-6">
              {weddingData.event.akad.location.address}
            </p>

            <a
              href={
                weddingData.event.akad.location
                  .maps
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-fit
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-lg
                font-bold
                transition
              "
            >
              📍 Lihat Lokasi
            </a>

          </div>
        </div>

        {/* RESEPSI */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            min-h-[560px]
            border
            border-red-900/30
            hover:border-red-600
            transition
            duration-300
          "
        >
          <img
            src="/images/resepsi.png"
            alt="Resepsi"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/70
              to-black/20
            "
          />

          <div className="relative z-10 p-8 h-full flex flex-col justify-end">

            <p className="text-red-500 font-semibold mb-2 tracking-widest">
              RESEPSI
            </p>

            <h3 className="text-3xl font-black mb-6">
              {weddingData.event.reception.location.venue}
            </h3>

            {/* Kalender */}
            <div className="flex items-center gap-4 mb-5">

              <div
                className="
                  bg-red-600
                  rounded-2xl
                  overflow-hidden
                  text-center
                  w-24
                  shadow-xl
                "
              >
                <div className="bg-red-700 py-2 text-sm font-bold">
                  AUG
                </div>

                <div className="py-4">
                  <div className="text-4xl font-black">
                    08
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl font-bold">
                  Sabtu
                </p>

                <p className="text-gray-300">
                  8 Agustus 2026
                </p>

                <div
                  className="
                    inline-block
                    mt-2
                    bg-white/10
                    backdrop-blur
                    px-4
                    py-2
                    rounded-lg
                    font-semibold
                  "
                >
                  🕐 {weddingData.event.reception.time}
                </div>
              </div>

            </div>

            <p className="text-gray-400 mb-6">
              {weddingData.event.reception.location.address}
            </p>

            <a
              href={
                weddingData.event.reception
                  .location.maps
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-fit
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-lg
                font-bold
                transition
              "
            >
              📍 Lihat Lokasi
            </a>

          </div>
        </div>

      </div>
    </section>
  </CinematicReveal>
  </FadeIn>
  );
}