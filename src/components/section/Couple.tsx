import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

import { weddingData } from "../../data/wedding";

export default function Couple() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black">
            Mempelai
          </h2>

          <p className="text-gray-400 mt-4">
            Dengan penuh rasa syukur dan bahagia
          </p>

        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 items-center">

          {/* Groom */}

          <div
            className="
              bg-[#141414]
              border
              border-red-900/30
              rounded-3xl
              p-8
              text-center
              hover:border-red-600
              transition-all
              duration-300
            "
          >

            <div className="relative w-48 h-48 mx-auto mb-8">

              <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl" />

              <Image
                src="/images/groom.png"
                alt="Groom"
                fill
                className="
                  object-cover
                  rounded-full
                  border-4
                  border-red-600
                  relative
                "
              />

            </div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs mb-3">
              Groom
            </p>

            <h3 className="text-2xl md:text-3xl font-bold">
              {weddingData.groom.name}
            </h3>

            <p className="text-gray-400 mt-4 whitespace-pre-line leading-relaxed">
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
                mt-8
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <FaInstagram />
              Instagram
            </a>

          </div>

          {/* Heart */}

          <div className="flex justify-center">

            <div
              className="
                text-5xl
                md:text-7xl
                text-red-600
                animate-pulse
                select-none
              "
            >
              ❤️
            </div>

          </div>

          {/* Bride */}

          <div
            className="
              bg-[#141414]
              border
              border-red-900/30
              rounded-3xl
              p-8
              text-center
              hover:border-red-600
              transition-all
              duration-300
            "
          >

            <div className="relative w-48 h-48 mx-auto mb-8">

              <div className="absolute inset-0 rounded-full bg-red-600/20 blur-2xl" />

              <Image
                src="/images/bridge.png"
                alt="Bride"
                fill
                className="
                  object-cover
                  rounded-full
                  border-4
                  border-red-600
                  relative
                "
              />

            </div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs mb-3">
              Bride
            </p>

            <h3 className="text-2xl md:text-3xl font-bold">
              {weddingData.bride.name}
            </h3>

            <p className="text-gray-400 mt-4 whitespace-pre-line leading-relaxed">
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
                mt-8
                bg-red-600
                hover:bg-red-700
                px-6
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <FaInstagram />
              Instagram
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}