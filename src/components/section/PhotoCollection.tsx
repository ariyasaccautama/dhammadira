"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { X } from "lucide-react";

import { weddingData } from "../../data/wedding";

type Photo = {
  title: string;
  image: string;
  badge: string;
};

export default function PhotoCollection() {
  const [selectedPhoto, setSelectedPhoto] =
    useState<Photo | null>(null);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

            <h2 className="text-4xl md:text-5xl font-black">
              Top 6 Moment Favorit
            </h2>

            <p className="text-gray-400 mt-4">
              Perjalanan singkat menuju hari
              bahagia kami ❤️
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {weddingData.favoriteMoments.map(
              (photo, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedPhoto(
                      photo
                    )
                  }
                  className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
                >

                  {/* Badge */}

                  <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {photo.badge}
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

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* Fullscreen Modal */}

      {selectedPhoto && (
        <div
          onClick={() =>
            setSelectedPhoto(null)
          }
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
        >

          {/* Close Button */}

          <button
            onClick={() =>
              setSelectedPhoto(null)
            }
            className="absolute top-5 right-5 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition"
          >
            <X size={28} />
          </button>

          {/* Content */}

          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="relative max-w-6xl w-full"
          >

            <div className="relative w-full aspect-[3/2] md:aspect-[16/9] rounded-3xl overflow-hidden">

              <Image
                src={
                  selectedPhoto.image
                }
                alt={
                  selectedPhoto.title
                }
                fill
                priority
                className="object-contain bg-black"
              />

            </div>

            <div className="text-center mt-6">

              <h3 className="text-3xl md:text-5xl font-black text-white">
                {
                  selectedPhoto.title
                }
              </h3>

            </div>

          </div>

        </div>
      )}
    </>
  );
}