"use client";

import {
  House,
  Shirt,
  CalendarDays,
  MessageCircleHeart,
  Gift,
} from "lucide-react";

export default function FloatingNav() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-[9998]

        flex
        items-center
        gap-5

        px-6
        py-3

        rounded-full

        bg-white/10
        backdrop-blur-xl

        border
        border-white/10

        shadow-xl
      "
    >
      <button
        onClick={() =>
          scrollTo("hero")
        }
        className="
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
      >
        <House size={22} />
      </button>

      <button
        onClick={() =>
          scrollTo("dresscode")
        }
        className="
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
      >
        <Shirt size={22} />
      </button>

      <button
        onClick={() =>
          scrollTo("event")
        }
        className="
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
      >
        <CalendarDays size={22} />
      </button>

      <button
        onClick={() =>
          scrollTo("rsvp")
        }
        className="
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
      >
        <MessageCircleHeart size={22} />
      </button>

      <button
        onClick={() =>
          scrollTo("gift")
        }
        className="
          text-white/70
          hover:text-white
          hover:scale-110
          transition-all
        "
      >
        <Gift size={22} />
      </button>
    </div>
  );
}