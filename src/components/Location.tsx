export default function Location() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Lokasi Acara
      </h2>

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 rounded-2xl p-6">

          <h3 className="text-2xl font-bold mb-4">
            Omah Kebon Bekasi
          </h3>

          <p className="text-gray-300 mb-6">
            Omah Kebon Bekasi
          </p>

          <div className="overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.955882207236!2d106.98236897316806!3d-6.269532661372033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dc0c2ea3dbd%3A0x705bfac29d0981a7!2sOmah%20Kebon%20Bekasi!5e0!3m2!1sen!2sid!4v1780121349545!5m2!1sen!2sid"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/place/Omah+Kebon+Bekasi/@-6.2695327,106.982369,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698dc0c2ea3dbd:0x705bfac29d0981a7!8m2!3d-6.269538!4d106.9849439!16s%2Fg%2F11g6xb9fbg?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold transition"
            >
              📍 Buka Google Maps
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}