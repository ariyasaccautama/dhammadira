"use client";

import { motion } from "framer-motion";

export default function Dresscode() {
  const colors = [
    {
      name: "Olive",
      hex: "#6F8F3D",
    },
    {
      name: "Sage",
      hex: "#A8C686",
    },
    {
      name: "Taupe",
      hex: "#8B6B4F",
    },
    {
      name: "Brown",
      hex: "#6E3321",
    },
    {
      name: "Beige",
      hex: "#E8C29D",
    },
  ];

  return (
    <section
      id="dresscode"
      className="py-24 px-6"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
        }}
        className="
          max-w-5xl
          mx-auto
          bg-[#141414]
          border
          border-red-900/30
          rounded-3xl
          p-8
          overflow-hidden
          relative
        "
      >
        {/* Netflix Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-red-600/10 blur-3xl rounded-full" />

        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-600/10 blur-3xl rounded-full" />

        <p className="tracking-[6px] text-gray-400 mb-8 uppercase">
          Dresscode
        </p>

        <h2 className="text-4xl font-black mb-4">
          Earth Tone
        </h2>

        <p className="text-gray-400 max-w-3xl mb-14">
          Kami mengundang
          Bapak/Ibu/Saudara/i untuk
          mengenakan pakaian bernuansa
          Earth Tone agar suasana acara
          semakin hangat, harmonis,
          dan indah dalam dokumentasi.
        </p>

        <div className="flex flex-wrap justify-center gap-10">

          {colors.map((color, index) => (
            <motion.div
              key={color.hex}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              animate={{
                y: [0, -12],
              }}
              whileHover={{
                scale: 1.15,
              }}
              className="text-center"
            >

              <motion.div
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType:
                      "reverse",
                    duration:
                      2 +
                      index * 0.3,
                    ease: "easeInOut",
                  },
                }}
                animate={{
                  boxShadow: [
                    `0 0 0px ${color.hex}`,
                    `0 0 30px ${color.hex}`,
                  ],
                }}
                className="
                  w-24
                  h-24
                  rounded-full
                  border-4
                  border-white/20
                "
                style={{
                  backgroundColor:
                    color.hex,
                }}
              />

              <p className="mt-4 font-medium text-gray-300">
                {color.name}
              </p>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}