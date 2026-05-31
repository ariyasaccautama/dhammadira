import Image from "next/image";
import { weddingData } from "../../data/wedding";

export default function FeaturedMovie() {
  const isWeddingDay =
    new Date() >=
    new Date(
      weddingData.event.countdownDate
    );

  return (
    <section className="py-24 px-6">
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* Poster */}
        <div>
          <Image
            src={weddingData.movie.image}
            alt={weddingData.movie.title}
            width={800}
            height={1200}
            className="
              w-full
              rounded-3xl
              object-cover
              shadow-2xl
            "
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="
              text-red-500
              tracking-[4px]
              uppercase
              font-semibold
              mb-4
            "
          >
            Nitflix Original
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              mb-6
            "
          >
            {weddingData.movie.title}
          </h2>

          <div
            className="
              flex
              flex-wrap
              gap-4
              items-center
              mb-6
            "
          >
            <span className="text-green-400 font-bold">
              100% Match
            </span>

            <span
              className="
                bg-white
                text-black
                px-2
                py-1
                rounded
                text-sm
                font-bold
              "
            >
              SU
            </span>

            <span>2026</span>

            <span>∞</span>
          </div>

          <div
            className="
              inline-block
              bg-red-600
              text-white
              px-5
              py-2
              rounded-full
              font-bold
              mb-8
            "
          >
            {isWeddingDay
              ? "Now Streaming"
              : weddingData.movie.releaseDate}
          </div>

          <p
            className="
              text-gray-300
              text-lg
              leading-relaxed
              mb-10
            "
          >
            {weddingData.movie.description}
          </p>

          <blockquote
            className="
              italic
              text-gray-500
              border-l-4
              border-red-600
              pl-4
            "
          >
            &ldquo;
            {weddingData.movie.quote}
            &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}