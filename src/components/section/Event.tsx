import { weddingData } from "../../data/wedding";

export default function Event() {
  return (
    <section
      id="event"
      className="py-24 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-12">
        Jadwal Acara
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Akad */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            hover:scale-105
            transition
            duration-300
            rounded-2xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Akad Nikah
          </h3>

          <p className="text-gray-300">
            {weddingData.event.akad.date}
          </p>

          <p className="text-red-500 mt-2 font-semibold">
            {weddingData.event.akad.time}
          </p>
        </div>

        {/* Resepsi */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            hover:scale-105
            transition
            duration-300
            rounded-2xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Resepsi
          </h3>

          <p className="text-gray-300">
            {weddingData.event.reception.date}
          </p>

          <p className="text-red-500 mt-2 font-semibold">
            {weddingData.event.reception.time}
          </p>
        </div>

      </div>
    </section>
  );
}