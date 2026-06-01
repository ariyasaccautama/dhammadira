"use client";

import { weddingData } from "../../data/wedding";
import { Copy, Gift as GiftIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function Gift() {
  const copyToClipboard = (
    text: string,
    label: string
  ) => {
    navigator.clipboard.writeText(text);

    if (label === "Alamat") {
      toast.success(
        "Alamat berhasil disalin 📍"
      );
    } else {
      toast.success(
        `Nomor rekening ${label} disalin 💳`
      );
    }
  };

  return (
    <section className="py-24 px-6">

      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />
      
      <h2 className="text-4xl font-bold text-center mb-3">
        Wedding Gift
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Kehadiran dan doa Anda adalah hadiah terbaik.
        Namun jika berkenan berbagi kebahagiaan,
        Anda dapat mengirimkan hadiah melalui:
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* MANDIRI */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            p-8
            text-white
            border
            border-yellow-500/20
            bg-gradient-to-br
            from-slate-900
            via-blue-950
            to-slate-950
            hover:scale-105
            transition
            duration-300
          "
        >
              <div
                className="
                  absolute
                  top-5
                  right-5
                  bg-white/50
                  backdrop-blur-md
                  px-3
                  py-2
                  rounded-xl
                "
              >
                <img
                  src="/images/bank-mandiri.png"
                  alt="Mandiri"
                  className="h-10 w-auto"
                />
              </div>

          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Bank Account
          </p>

          <h3 className="text-3xl font-black mt-4">
            {weddingData.gift.groom.bank}
          </h3>

          <p className="text-4xl font-black text-yellow-400 mt-6 tracking-wider">
            {weddingData.gift.groom.account}
          </p>

          <p className="text-gray-300 mt-5">
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
              mt-8
              flex
              items-center
              gap-2
              bg-white
              text-black
              hover:bg-gray-200
              px-5
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            <Copy size={18} />
            Salin Rekening
          </button>
        </div>

        {/* BCA */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            p-8
            text-white
            border
            border-blue-500/20
            bg-gradient-to-br
            from-blue-950
            via-blue-800
            to-slate-950
            hover:scale-105
            transition
            duration-300
          "
        >
              <div
                className="
                  absolute
                  top-5
                  right-5
                  bg-white/50
                  backdrop-blur-md
                  px-3
                  py-2
                  rounded-xl
                "
              >
                <img
                  src="/images/bank-bca.png"
                  alt="BCA"
                  className="h-10 w-auto"
                />
              </div>

          <p className="text-sm text-blue-200 uppercase tracking-widest">
            Bank Account
          </p>

          <h3 className="text-3xl font-black mt-4">
            {weddingData.gift.bride.bank}
          </h3>

          <p className="text-4xl font-black mt-6 tracking-wider">
            {weddingData.gift.bride.account}
          </p>

          <p className="text-blue-100 mt-5">
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
              mt-8
              flex
              items-center
              gap-2
              bg-white
              text-black
              hover:bg-gray-200
              px-5
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            <Copy size={18} />
            Salin Rekening
          </button>
        </div>

      </div>

      {/* KADO FISIK */}

      <div className="max-w-6xl mx-auto mt-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            p-8
            border
            border-red-900/30
            bg-gradient-to-r
            from-red-950/50
            via-zinc-900
            to-red-950/50
          "
        >

          <div className="absolute right-8 top-8 text-7xl opacity-10">
            🎁
          </div>

          <div className="absolute left-8 bottom-6 text-5xl opacity-10">
            💝
          </div>

          <div className="flex items-center gap-3 mb-6">
            <GiftIcon size={28} />
            <h3 className="text-3xl font-black">
              Kirim Kado
            </h3>
          </div>

          <p className="text-lg text-gray-300 mb-2">
            📦 Penerima:
          </p>

          <p className="font-semibold text-xl mb-4">
            {weddingData.giftAddress.recipient}
          </p>

          <p className="text-gray-400 leading-relaxed max-w-3xl mb-8">
            {weddingData.giftAddress.address}
          </p>

          <button
            onClick={() =>
              copyToClipboard(
                weddingData.giftAddress.address,
                "Alamat"
              )
            }
            className="
              flex
              items-center
              gap-2
              bg-red-600
              hover:bg-red-700
              px-6
              py-3
              rounded-xl
              font-bold
              transition
            "
          >
            <Copy size={18} />
            Salin Alamat
          </button>

        </div>
      </div>
    </section>
  );
}