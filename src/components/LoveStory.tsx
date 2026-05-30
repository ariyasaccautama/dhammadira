export default function LoveStory() {
  const stories = [
    {
      title: "Awal Bertemu",
      year: "2020",
      description:
        "Isi cerita awal bertemu di sini...",
    },
    {
      title: "Mulai Dekat",
      year: "2021",
      description:
        "Isi cerita mulai dekat di sini...",
    },
    {
      title: "Lamaran",
      year: "2025",
      description:
        "Isi cerita lamaran di sini...",
    },
    {
      title: "Menikah",
      year: "2026",
      description:
        "Perjalanan menuju hari bahagia.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Love Story
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {stories.map((story) => (
          <div
            key={story.title}
            className="bg-zinc-900 rounded-xl p-5 hover:scale-105 transition"
          >
            <div className="h-40 bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
              FOTO
            </div>

            <p className="text-red-500 text-sm">
              {story.year}
            </p>

            <h3 className="font-bold text-xl mt-2">
              {story.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}