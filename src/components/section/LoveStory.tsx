"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoveStory() {
  const stories = [
    {
      title: "EPS 1: Awal Bertemu",
      year: "2020",
      image: "/images/story1.jpg",
      description:
        "Kisah kami dimulai dari sebuah pertemuan yang sederhana namun berkesan.",
    },
    {
      title: "EPS 2: Mulai Dekat",
      year: "2021",
      image: "/images/story1.jpg",
      description:
        "Seiring berjalannya waktu, kami semakin mengenal dan memahami satu sama lain.",
    },
    {
      title: "EPS 3: Lamaran",
      year: "2025",
      image: "/images/story1.jpg",
      description:
        "Dengan penuh keyakinan dan cinta, kami memutuskan melangkah ke jenjang yang lebih serius.",
    },
    {
      title: "EPS 4: Menikah",
      year: "2026",
      image: "/images/story1.jpg",
      description:
        "Perjalanan kami bermuara pada hari bahagia yang akan kami rayakan bersama keluarga dan sahabat tercinta.",
    },
  ];

  return (
    <section
      id="love-story"
      className="py-24 px-6"
    >
      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center mb-20"
      >
        <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

        <h2 className="text-4xl md:text-5xl font-black">
          Love Story
        </h2>

        <p className="text-gray-400 mt-4">
          Perjalanan singkat menuju hari bahagia
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative max-w-6xl mx-auto">

        {/* Garis Tengah */}

        <div
          className="
            hidden md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-red-600/30
            -translate-x-1/2
          "
        />

        <div className="space-y-16">

          {stories.map((story, index) => {
            const isLeft =
              index % 2 === 0;

            return (
              <motion.div
                key={story.title}
                initial={{
                  opacity: 0,
                  x: isLeft
                    ? -100
                    : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className={`
                  relative
                  flex
                  items-center
                  ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >

                {/* Dot */}

                <div
                  className="
                    hidden md:block
                    absolute
                    left-1/2
                    w-5
                    h-5
                    bg-red-600
                    rounded-full
                    -translate-x-1/2
                    shadow-[0_0_20px_rgba(220,38,38,0.8)]
                  "
                />

                <div
                  className="
                    w-full
                    md:w-[45%]
                    bg-[#141414]
                    border
                    border-red-900/30
                    rounded-3xl
                    overflow-hidden
                    hover:border-red-600
                    transition-all
                    duration-300
                  "
                >

                  <div className="relative h-72 overflow-hidden">

                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-4 left-4">

                      <span
                        className="
                          bg-red-600
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          font-bold
                        "
                      >
                        {story.year}
                      </span>

                    </div>

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold mb-4">
                      {story.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {story.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}