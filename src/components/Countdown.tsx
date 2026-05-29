"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-08-08T10:00:00+07:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance =
        weddingDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);

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
          (distance % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold mb-4">
        Menuju Hari Bahagia
      </h2>

      <p className="text-gray-400 mb-10">
        Sabtu, 8 Agustus 2026
      </p>

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

    </section>
  );
}