import { FaInstagram } from "react-icons/fa";
import { weddingData } from "../../data/wedding";

export default function Couple() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">
        Mempelai
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Groom */}
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
          <h3 className="text-2xl font-bold">
            {weddingData.groom.name}
          </h3>

          <p className="text-gray-400 mt-3 whitespace-pre-line">
            {weddingData.groom.parent}
          </p>

          <a
            href={weddingData.groom.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-red-600
              px-5
              py-3
              rounded-lg
            "
          >
            <FaInstagram />
            Instagram
          </a>
        </div>

        {/* Bride */}
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
          <h3 className="text-2xl font-bold">
            {weddingData.bride.name}
          </h3>

          <p className="text-gray-400 mt-3 whitespace-pre-line">
            {weddingData.bride.parent}
          </p>

          <a
            href={weddingData.bride.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-red-600
              px-5
              py-3
              rounded-lg
            "
          >
            <FaInstagram />
            Instagram
          </a>
        </div>

      </div>
    </section>
  );
}