"use client";

import { weddingData } from "../data/wedding";

type Props = {
  guestName: string;
  onOpen: () => void;
};

export default function Cover({
  guestName,
  onOpen,
}: Props) {
  return (
    <main className="relative h-screen overflow-hidden">

      {/* Background Photo */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Netflix Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

      {/* Content */}

      <div
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-white
          text-center
        "
      >

        <h1
          className="
            text-red-600
            text-5xl
            md:text-7xl
            font-black
            tracking-[8px]
            mb-8
            drop-shadow-2xl
          "
        >
          NITFLIX
        </h1>

        <p className="uppercase text-gray-300 mb-4 tracking-[4px] text-sm">
          The Wedding Of
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-black
            leading-tight
          "
        >
          {weddingData.groom.name}
        </h2>

        <div className="text-4xl md:text-5xl font-black my-3">
          &
        </div>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-black
            leading-tight
            mb-10
          "
        >
          {weddingData.bride.name}
        </h2>

        <div
          className="
            bg-black/40
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            px-8
            py-5
            mb-8
            max-w-lg
            w-full
          "
        >

          <p className="text-gray-400 text-sm mb-2">
            Kepada Yth.
          </p>

          <h3
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-white
            "
          >
            {guestName}
          </h3>

        </div>

        <button
          onClick={onOpen}
          className="
            bg-red-600
            hover:bg-red-700
            hover:scale-105
            px-10
            py-4
            rounded-xl
            font-bold
            text-lg
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(229,9,20,0.5)]
          "
        >
          🎬 BUKA UNDANGAN
        </button>

        <p
          className="
            text-gray-400
            text-xs
            md:text-sm
            mt-8
            max-w-md
          "
        >
          Mohon maaf apabila terdapat kesalahan
          penulisan nama maupun gelar.
        </p>

      </div>

    </main>
  );
}