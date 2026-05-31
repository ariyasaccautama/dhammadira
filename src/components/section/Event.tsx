import { weddingData } from "../../data/wedding";

export default function Event() {
  return (
    <section
      id="event"
      className="py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Jadwal Acara
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* Pemberkatan */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            min-h-[520px]
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

            <p className="text-red-500 font-semibold mb-2">
              PEMBERKATAN
            </p>

            <h3 className="text-3xl font-black mb-4">
              {weddingData.event.akad.location.venue}
            </h3>

            <p className="text-gray-300">
              {weddingData.event.akad.date}
            </p>

            <p className="text-gray-300 mb-4">
              {weddingData.event.akad.time}
            </p>

            <p className="text-gray-400 mb-6">
              {weddingData.event.akad.location.address}
            </p>

            <a
              href={
                weddingData.event.akad.location.maps
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

        {/* Resepsi */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            min-h-[520px]
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

            <p className="text-red-500 font-semibold mb-2">
              RESEPSI
            </p>

            <h3 className="text-3xl font-black mb-4">
              {weddingData.event.reception.location.venue}
            </h3>

            <p className="text-gray-300">
              {weddingData.event.reception.date}
            </p>

            <p className="text-gray-300 mb-4">
              {weddingData.event.reception.time}
            </p>

            <p className="text-gray-400 mb-6">
              {weddingData.event.reception.location.address}
            </p>

            <a
              href={
                weddingData.event.reception.location.maps
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
  );
}