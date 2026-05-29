"use client";

import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Couple from "../components/Couple";
import Event from "../components/Event";
import Location from "../components/Location";
import Gift from "../components/Gift";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function HomeContent() {
  const searchParams = useSearchParams();

  const guestName =
    searchParams.get("to") || "Tamu Undangan";

  const [opened, setOpened] = useState(false);

  // COVER UNDANGAN
  if (!opened) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

        <h1 className="text-red-600 text-6xl font-black tracking-widest mb-10">
          NITFLIX
        </h1>

        <p className="uppercase text-gray-400 mb-4">
          The Wedding Of
        </p>

        <h2 className="text-center text-4xl font-bold">
          Prasetya Dhamma Permana Putra
        </h2>

        <h2 className="text-center text-4xl font-bold my-2">
          &
        </h2>

        <h2 className="text-center text-4xl font-bold mb-10">
          Dira
        </h2>

        <p className="text-gray-400">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>

        <h3 className="text-2xl font-semibold mt-2 mb-8 text-center">
          {guestName}
        </h3>

        <button
          onClick={() => setOpened(true)}
          className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-bold transition"
        >
          BUKA UNDANGAN
        </button>

        <p className="text-gray-500 text-sm mt-8 text-center max-w-md">
          Mohon maaf apabila terdapat kesalahan
          penulisan nama maupun gelar.
        </p>

      </main>
    );
  }

  // HALAMAN UTAMA
  return (
    <main className="bg-black text-white">

      <Hero />

      <Countdown />

      <Couple />

      <Event />

      <Location />

      <Gift />

    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}