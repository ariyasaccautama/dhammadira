"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import toast from "react-hot-toast";

import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Wish = {
  guestId: string;
  name: string;
  attendance: string;
  message: string;
};

type AttendanceStatus =
  | "Hadir"
  | "Tidak Hadir"
  | "Masih Ragu";

type Props = {
  guestId: string;
  guestName: string;
};

const ITEMS_PER_PAGE = 5;

const ATTENDANCE_STYLES: Record<
  AttendanceStatus,
  string
> = {
  Hadir:
    "bg-green-700 border-green-700 hover:border-green-500",

  "Tidak Hadir":
    "bg-red-700 border-red-700 hover:border-red-500",

  "Masih Ragu":
    "bg-yellow-600 border-yellow-600 hover:border-yellow-500 text-black",
};

const INACTIVE_STYLE =
  "bg-zinc-900 border-zinc-700";

export default function RSVP({
  guestId,
  guestName,
}: Props) {
  const API =
    process.env.NEXT_PUBLIC_RSVP_API!;

  const [name, setName] =
    useState(guestName);

  const [attendance, setAttendance] =
    useState<AttendanceStatus>(
      "Hadir"
    );

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [wishes, setWishes] =
    useState<Wish[]>([]);

  const [page, setPage] =
    useState(1);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  const loadWishes = useCallback(
    async () => {
      try {
        const res =
          await fetch(API);

        const data =
          await res.json();

        setWishes(data);

        const existingGuest =
          data.find(
            (item: Wish) =>
              String(
                item.guestId
              ) ===
              String(guestId)
          );

        if (existingGuest) {
          setHasSubmitted(true);

          setName(
            existingGuest.name
          );

          setAttendance(
            existingGuest.attendance as AttendanceStatus
          );

          setMessage(
            existingGuest.message ||
              ""
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    [API, guestId]
  );

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    loadWishes();
  }, [loadWishes]);

  const submitRSVP = async () => {
    if (!name.trim()) {
      toast.error(
        "Nama belum terisi"
      );
      return;
    }

    if (
      !hasSubmitted &&
      !message.trim()
    ) {
      toast.error(
        "Ucapan & Doa belum terisi"
      );
      return;
    }

    setLoading(true);

    try {
      await fetch(API, {
        method: "POST",

        body: JSON.stringify({
          guestId,
          name,
          attendance,
          message,
        }),
      });

      toast.success(
        hasSubmitted
          ? "RSVP berhasil diperbarui ❤️"
          : "Terima kasih atas konfirmasinya ❤️"
      );

      setHasSubmitted(true);

      await loadWishes();

      setPage(1);
    } catch {
      toast.error(
        "Gagal mengirim RSVP"
      );
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (
    status: string
  ) => {
    if (status === "Hadir") {
      return (
        <CheckCircle2
          size={18}
          className="text-green-500"
        />
      );
    }

    if (
      status ===
      "Tidak Hadir"
    ) {
      return (
        <XCircle
          size={18}
          className="text-red-500"
        />
      );
    }

    return (
      <HelpCircle
        size={18}
        className="text-yellow-500"
      />
    );
  };

  const totalPages =
    Math.ceil(
      wishes.length /
        ITEMS_PER_PAGE
    ) || 1;

  const paginatedWishes =
    useMemo(() => {
      const start =
        (page - 1) *
        ITEMS_PER_PAGE;

      return wishes.slice(
        start,
        start +
          ITEMS_PER_PAGE
      );
    }, [wishes, page]);

  return (
    <section className="py-24 px-6">

      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

      <h2 className="text-4xl font-bold text-center mb-12">
        RSVP & Ucapan
      </h2>

      <p className="text-center mb-12"> Berikan ucapan harapan dan doa kepada kami❤️</p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* FORM */}

        <div className="bg-[#141414] border border-red-900/30 rounded-2xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Konfirmasi Kehadiran
          </h3>

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Nama"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 mb-5"
          />

          <div className="mb-5">

            <p className="text-gray-400 mb-3">
              Pilih Status Kehadiran
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {(
                Object.keys(
                  ATTENDANCE_STYLES
                ) as AttendanceStatus[]
              ).map(
                (status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() =>
                      setAttendance(
                        status
                      )
                    }
                    className={`py-3 rounded-xl border font-semibold transition ${
                      attendance ===
                      status
                        ? ATTENDANCE_STYLES[
                            status
                          ]
                        : INACTIVE_STYLE
                    }`}
                  >
                    {status}
                  </button>
                )
              )}

            </div>

          </div>

          <textarea
            rows={5}
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Tulis ucapan dan doa terbaik..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3"
          />

          <button
            disabled={loading}
            onClick={submitRSVP}
            className="mt-5 bg-red-600 hover:bg-red-700 disabled:opacity-50 px-6 py-3 rounded-xl font-bold transition"
          >
            {loading
              ? "Mengirim..."
              : hasSubmitted
              ? "Update RSVP"
              : "Kirim RSVP"}
          </button>

        </div>

        {/* UCAPAN */}

        <div className="bg-[#141414] border border-red-900/30 rounded-2xl p-8">

          <h3 className="text-2xl font-bold mb-6">
            Ucapan & Doa
          </h3>

          <div className="space-y-5">

            {paginatedWishes.map(
              (
                wish,
                index
              ) => (
                <div
                  key={index}
                  className="border-b border-zinc-800 pb-5"
                >
                  <div className="flex items-center gap-2 mb-2">

                    <h4 className="font-bold text-lg">
                      {wish.name}
                    </h4>

                    {getStatusIcon(
                      wish.attendance
                    )}

                  </div>

                  <p className="text-gray-300 whitespace-pre-wrap">
                    {wish.message}
                  </p>

                </div>
              )
            )}

          </div>

          {wishes.length >
            ITEMS_PER_PAGE && (
            <div className="flex items-center justify-center gap-4 mt-8">

              <button
                disabled={
                  page === 1
                }
                onClick={() =>
                  setPage(
                    page - 1
                  )
                }
                className="bg-zinc-800 p-2 rounded-lg disabled:opacity-30"
              >
                <ChevronLeft />
              </button>

              <span>
                {page} /{" "}
                {totalPages}
              </span>

              <button
                disabled={
                  page ===
                  totalPages
                }
                onClick={() =>
                  setPage(
                    page + 1
                  )
                }
                className="bg-zinc-800 p-2 rounded-lg disabled:opacity-30"
              >
                <ChevronRight />
              </button>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}