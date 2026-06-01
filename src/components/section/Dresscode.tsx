export default function Dresscode() {
  const colors = [
    {
      name: "Olive",
      hex: "#6F8F3D",
    },
    {
      name: "Sage",
      hex: "#A8C686",
    },
    {
      name: "Taupe",
      hex: "#8B6B4F",
    },
    {
      name: "Brown",
      hex: "#6E3321",
    },
    {
      name: "Beige",
      hex: "#E8C29D",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div
        className="
          max-w-5xl
          mx-auto
          bg-[#141414]
          border
          border-red-900/30
          rounded-3xl
          p-8
        "
      >
        <p className="tracking-[6px] text-gray-400 mb-8 uppercase">
          Dresscode
        </p>

        <h2 className="text-4xl font-bold mb-8">
          Earth Tone
        </h2>

        <div className="flex flex-wrap gap-5 mb-8">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="text-center"
            >
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  border-4
                  border-red-600
                  shadow-lg
                "
                style={{
                  backgroundColor:
                    color.hex,
                }}
              />

              <p className="mt-3 text-sm text-gray-300">
                {color.name}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-400">
          Kami mengundang Bapak/Ibu/Saudara/i untuk mengenakan
          pakaian dengan nuansa Earth
          Tone agar suasana acara
          semakin hangat dan selaras.
        </p>
      </div>
    </section>
  );
}