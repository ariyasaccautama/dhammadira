"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

import { weddingData } from "../../data/wedding";

const WEDDING_DATE = new Date(
  weddingData.event.akad.countdownDate
);

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [isWeddingDay, setIsWeddingDay] =
    useState(false);

  const [windowSize, setWindowSize] =
    useState({
      width: 0,
      height: 0,
    });

  const [timeLeft, setTimeLeft] =
    useState<TimeLeft>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();

      const distance =
        WEDDING_DATE.getTime() - now;

      if (distance <= 0) {
        setIsWeddingDay(true);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isWeddingDay && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={250}
        />
      )}

      <section className="py-24 px-6 text-center">

        {!isWeddingDay && (
          <>
            <h2 className="text-4xl font-bold mb-4">
              Menuju Hari Bahagia
            </h2>

            <p className="text-gray-400 mb-10">
              Sabtu, 8 Agustus 2026
            </p>
          </>
        )}

        {isWeddingDay ? (
          <div className="space-y-4">
            <h4 className="text-5xl font-black text-red-600">
              ❤️ Hari Bahagia ❤️
            </h4>

            <p className="text-xl text-gray-300">
              Selamat kepada
              <br />
              Prasetya Dhamma Permana Putra
              & Prisilia Indira Oktavia
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-4xl font-bold">
                {timeLeft.days}
              </div>

              <div className="text-gray-400">
                Hari
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-4xl font-bold">
                {timeLeft.hours}
              </div>

              <div className="text-gray-400">
                Jam
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-4xl font-bold">
                {timeLeft.minutes}
              </div>

              <div className="text-gray-400">
                Menit
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-4xl font-bold">
                {timeLeft.seconds}
              </div>

              <div className="text-gray-400">
                Detik
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}