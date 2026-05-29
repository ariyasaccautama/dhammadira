"use client";

export default function Gift() {

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin");
  };

  return (
    <section className="py-24 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Wedding Gift
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            Bank Mandiri
          </h3>

          <p className="mt-4">
            Prasetya Dhamma Permana Putra
          </p>

          <p className="text-2xl mt-2">
            8888888888
          </p>

          <button
            onClick={() => copyText("8888888888")}
            className="mt-4 bg-red-600 px-5 py-2 rounded"
          >
            Copy Rekening
          </button>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="text-xl font-bold">
            BCA
          </h3>

          <p className="mt-4">
            Dira
          </p>

          <p className="text-2xl mt-2">
            999999999
          </p>

          <button
            onClick={() => copyText("999999999")}
            className="mt-4 bg-red-600 px-5 py-2 rounded"
          >
            Copy Rekening
          </button>
        </div>

      </div>

    </section>
  );
}