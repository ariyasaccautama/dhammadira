"use client";

type Props = {
  guestName: string;
  onOpen: () => void;
};

export default function Cover({
  guestName,
  onOpen,
}: Props) {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-6">

      <h1 className="text-red-600 text-6xl font-black tracking-widest mb-10">
        NITFLIX
      </h1>

      <p className="uppercase text-gray-400 mb-4">
        The Wedding Of
      </p>

      <h2 className="text-center text-3xl font-bold">
        Prasetya Dhamma Permana Putra
      </h2>

      <h2 className="text-center text-3xl font-bold my-2">
        &
      </h2>

      <h2 className="text-center text-3xl font-bold mb-8">
        Prisilia Indira Oktavia
      </h2>

      <p className="text-gray-400">
        Kepada Yth.
      </p>

      <h3 className="text-2xl font-semibold mt-2 mb-8">
        {guestName}
      </h3>

      <button
        onClick={onOpen}
        className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-bold"
      >
        BUKA UNDANGAN
      </button>

      <p className="text-gray-500 text-sm mt-8 text-center max-w-md">
        Mohon maaf apabila terdapat kesalahan
        penulisan nama maupun gelar.
      </p>
    </div>
  );
}