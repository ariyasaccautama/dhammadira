"use client";

import { weddingData } from "../../data/wedding";

export default function Hero() {
  const scrollToLoveStory = () => {
    document
      .getElementById("love-story")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToEvent = () => {
    document
      .getElementById("event")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Netflix Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-4xl px-8 md:px-20">

          <p className="text-red-600 font-bold tracking-[5px] mb-4">
            NITFLIX ORIGINAL
          </p>

          <p className="uppercase text-gray-300 mb-2">
            The Wedding Of
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-none">
            {weddingData.groom.name}
          </h1>

          <div className="text-4xl md:text-6xl font-black my-4">
            &
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-none">
            {weddingData.bride.name}
          </h1>

          <p className="mt-8 text-lg text-gray-300">
            {weddingData.event.akad.date}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={scrollToLoveStory}
              className="
                bg-white
                text-black
                px-6
                py-3
                rounded-md
                font-bold
                hover:scale-105
                transition
              "
            >
              ⏵Putar Kisah Kami
            </button>

            <button
              onClick={scrollToEvent}
              className="
                bg-zinc-700/80
                backdrop-blur
                px-6
                py-3
                rounded-md
                font-bold
                hover:bg-zinc-600
                transition
              "
            >
              ⓘ Detail Acara
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}