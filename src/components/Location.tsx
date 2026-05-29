export default function Location() {
  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Lokasi Acara
      </h2>

      <p className="text-gray-300 max-w-xl mx-auto">
        Jl. Anggrek No. 16 RT 03/06,
        Kel. Bojong Menteng,
        Kec. Rawalumbu,
        Kota Bekasi
      </p>

      <a
        href="https://maps.app.goo.gl/MkJ5hhTCtRsoioDq6"
        target="_blank"
        className="inline-block mt-8 bg-red-600 px-6 py-3 rounded-lg font-bold"
      >
        Lihat Lokasi
      </a>

    </section>
  );
}