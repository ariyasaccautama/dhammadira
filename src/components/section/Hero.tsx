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

  const weddingDate = new Date(
    weddingData.event.countdownDate
  );

  const isWeddingDay =
    new Date() >= weddingDate;

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/60
          to-black/40
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          min-h-[100svh]
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            max-w-6xl
            px-8
            md:px-20
          "
        >

          <p
            className="
              text-red-600
              font-bold
              tracking-[5px]
              mb-4
              text-sm
            "
          >
            NITFLIX ORIGINAL
          </p>

          <p className="uppercase text-gray-300 mb-2">
            The Wedding Of
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-none
            "
          >
            {weddingData.groom.name}
          </h1>

          <div
            className="
              text-3xl
              md:text-5xl
              font-black
              my-4
            "
          >
            &
          </div>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-none
            "
          >
            {weddingData.bride.name}
          </h1>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              mt-6
            "
          >
            <span
              className={`
                px-6
                py-2
                rounded-full
                font-bold
                text-white
                ${
                  isWeddingDay
                    ? "bg-green-600"
                    : "bg-red-600"
                }
              `}
            >
              {isWeddingDay
                ? "Today!"
                : "Coming Soon"}
            </span>

            <span className="text-gray-300 text-base md:text-lg">
              • {weddingData.event.akad.date}
            </span>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >
            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #Wedding
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #DhammaDira
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #GetMarried
            </span>

            <span className="bg-zinc-700 text-gray-200 px-5 py-2 rounded-full font-semibold">
              #Documenter
            </span>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-4
              mt-10
            "
          >
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
              ⏵ Kisah Kami
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