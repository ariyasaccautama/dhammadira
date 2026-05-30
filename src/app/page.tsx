"use client";

import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Couple from "../components/Couple";
import Event from "../components/Event";
import Location from "../components/Location";
import Gift from "../components/Gift";
import LoveStory from "../components/LoveStory";
import NitflixIntro from "../components/NitflixIntro";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function HomeContent() {
  const searchParams = useSearchParams();

  const guestName =
    searchParams.get("to") || "Tamu Undangan";

  const [opened, setOpened] = useState(false);
  const [playingIntro, setPlayingIntro] =
    useState(false);

  const playIntroSound = () => {
    const audio = new Audio(
      "/audio/ta-dum.mp3"
    );

    audio.volume = 0.8;

    audio.play().catch(() => {
      console.log("Audio autoplay blocked");
    });
  };

  const handleOpenInvitation = () => {
    playIntroSound();

    setPlayingIntro(true);

    setTimeout(() => {
      setOpened(true);
      setPlayingIntro(false);
    }, 3200);
  };

  // INTRO NITFLIX
  if (playingIntro) {
    return <NitflixIntro />;
  }

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
          Prisilia Indira Oktavia
        </h2>

        <p className="text-gray-400">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>

        <h3 className="text-2xl font-semibold mt-2 mb-8 text-center">
          {guestName}
        </h3>

        <button
          onClick={handleOpenInvitation}
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

      <LoveStory />

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