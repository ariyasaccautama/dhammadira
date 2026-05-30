"use client";

import { weddingData } from "../../data/wedding";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

export default function Gift() {
  const copyToClipboard = (
    text: string,
    bank: string
  ) => {
    navigator.clipboard.writeText(text);

    toast.success(
      `Nomor rekening ${bank} berhasil disalin`
    );
  };

  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Wedding Gift
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* Rekening Pria */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            hover:scale-105
            transition
            duration-300
            rounded-2xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            {weddingData.gift.groom.bank}
          </h3>

          <p className="text-3xl font-black text-red-500">
            {weddingData.gift.groom.account}
          </p>

          <p className="text-gray-400 mt-4">
            {weddingData.gift.groom.holder}
          </p>

          <button
            onClick={() =>
              copyToClipboard(
                weddingData.gift.groom.account,
                weddingData.gift.groom.bank
              )
            }
            className="
              mt-6
              flex
              items-center
              gap-2
              bg-red-600
              hover:bg-red-700
              px-5
              py-3
              rounded-lg
              font-bold
              transition
            "
          >
            <Copy size={18} />
            Copy Rekening
          </button>
        </div>

        {/* Rekening Wanita */}
        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            hover:border-red-600
            hover:scale-105
            transition
            duration-300
            rounded-2xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            {weddingData.gift.bride.bank}
          </h3>

          <p className="text-3xl font-black text-red-500">
            {weddingData.gift.bride.account}
          </p>

          <p className="text-gray-400 mt-4">
            {weddingData.gift.bride.holder}
          </p>

          <button
            onClick={() =>
              copyToClipboard(
                weddingData.gift.bride.account,
                weddingData.gift.bride.bank
              )
            }
            className="
              mt-6
              flex
              items-center
              gap-2
              bg-red-600
              hover:bg-red-700
              px-5
              py-3
              rounded-lg
              font-bold
              transition
            "
          >
            <Copy size={18} />
            Copy Rekening
          </button>
        </div>

      </div>

      {/* Kirim Kado */}
      <div className="max-w-5xl mx-auto mt-10">

        <div
          className="
            bg-[#141414]
            border
            border-red-900/30
            rounded-2xl
            p-8
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Kirim Kado
          </h3>

          <p className="text-gray-300">
            {weddingData.location.address}
          </p>
        </div>

      </div>
    </section>
  );
}