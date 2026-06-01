"use client";

import Image from "next/image";

import { weddingData } from "../../data/wedding";

export default function PhotoCollection() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

          <h2 className="text-4xl md:text-5xl font-black">
            Top 6 Moment Favorit
          </h2>

          <p className="text-gray-400 mt-4">
            Perjalanan singkat menuju hari bahagia kami ❤️
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {weddingData.favoriteMoments.map(
            (photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
              >

                {/* Badge */}

                <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {photo.badge}
                </div>

                {/* Ranking */}

                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                  #{6 - index}
                </div>

                {/* Image */}

                <div className="relative aspect-[2/3]">

                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Title */}

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <h3 className="text-white font-bold text-xl drop-shadow-lg">
                    {photo.title}
                  </h3>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}