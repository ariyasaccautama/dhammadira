import { FaInstagram } from "react-icons/fa";

export default function Couple() {
  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold mb-12">
        Mempelai
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold">
            Prasetya Dhamma Permana Putra
          </h3>

          <p className="text-gray-400 mt-3">
            Putra Pertama dari
            <br />
            Bapak Tomo, S.Pd, M.Pd<br />& Ibu Rusmiyati, S.Ag, M.Ag
          </p>

          <a
            href="https://www.instagram.com/prasdham/"
            target="_blank"
            className="inline-flex items-center gap-2 mt-6 bg-red-600 px-5 py-3 rounded-lg"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold">
            Prisilia Indira Oktavia
          </h3>

          <p className="text-gray-400 mt-3">
            Putri Tunggal dari
            <br />
            Bapak Drs. Supriyoto Hadi Sardjono, S.E, M.Ec.Dev<br />& Ibu Indrayani Sri Sulistyowati, S.H, M.H
          </p>

          <a
            href="https://www.instagram.com/dirasoebroto/"
            target="_blank"
            className="inline-flex items-center gap-2 mt-6 bg-red-600 px-5 py-3 rounded-lg"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>

      </div>

    </section>
  );
}