import Image from "next/image";

export default function LoveStory() {
  const stories = [
    {
      title: "EPS 1: Awal Bertemu",
      year: "2020",
      image: "/images/story1.jpg",
      description:
        "Kisah kami dimulai dari sebuah pertemuan yang sederhana namun berkesan.",
    },
    {
      title: "EPS 2: Mulai Dekat",
      year: "2021",
      image: "/images/story1.jpg",
      description:
        "Seiring berjalannya waktu, kami semakin mengenal dan memahami satu sama lain.",
    },
    {
      title: "EPS 3: Lamaran",
      year: "2025",
      image: "/images/story1.jpg",
      description:
        "Dengan penuh keyakinan dan cinta, kami memutuskan melangkah ke jenjang yang lebih serius.",
    },
    {
      title: "EPS: 4 Menikah",
      year: "2026",
      image: "/images/story1.jpg",
      description:
        "Perjalanan kami bermuara pada hari bahagia yang akan kami rayakan bersama keluarga dan sahabat tercinta.",
    },
  ];

  return (
    <section
      id="love-story"
      className="py-24 px-6"
    >
      <div className="text-center mb-16">

        <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

        <h2 className="text-4xl md:text-5xl font-black">
          Love Story
        </h2>

        <p className="text-gray-400 mt-4">
          Perjalanan singkat menuju hari bahagia
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {stories.map((story) => (
          <div
            key={story.title}
            className="
              group
              bg-[#141414]
              border
              border-red-900/30
              hover:border-red-600
              rounded-3xl
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
            "
          >

            <div className="relative h-64 overflow-hidden">

              <Image
                src={story.image}
                alt={story.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4">

                <span className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold">
                  {story.year}
                </span>

              </div>

            </div>

            <div className="p-6">

              <h3 className="text-xl font-bold mb-3">
                {story.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {story.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}