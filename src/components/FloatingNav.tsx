"use client";

import { useEffect, useState } from "react";

import {
  House,
  Shirt,
  CalendarDays,
  MessageCircleHeart,
  Gift,
} from "lucide-react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] =
    useState("hero");

  const sections = [
    {
      id: "hero",
      icon: House,
    },
    {
      id: "dresscode",
      icon: Shirt,
    },
    {
      id: "event",
      icon: CalendarDays,
    },
    {
      id: "rsvp",
      icon: MessageCircleHeart,
    },
    {
      id: "gift",
      icon: Gift,
    },
  ];

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(
                entry.target.id
              );
            }
          });
        },
        {
          threshold: 0.4,
        }
      );

    sections.forEach((section) => {
      const element =
        document.getElementById(
          section.id
        );

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
      {sections.map(
        ({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() =>
              scrollTo(id)
            }
            className={`
              transition-all
              duration-300

              ${
                activeSection === id
                  ? `
                    text-red-600
                    scale-125
                    drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]
                  `
                  : `
                    text-white/70
                    hover:text-white
                    hover:scale-110
                  `
              }
            `}
          >
            <Icon size={22} />
          </button>
        )
      )}
    </div>
  );
}