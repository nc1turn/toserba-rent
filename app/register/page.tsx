import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 text-white">
      <div className="text-center space-y-1">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-100">
          Toserba Rent
        </p>
        <h1 className="text-3xl font-bold">Daftar akun baru</h1>
        <p className="text-slate-200">
          Buat akun untuk mulai menyewa atau menjadi penyedia barang.
        </p>
      </div>

      <div className="card border-white/10 bg-white/10 p-6 text-slate-50 space-y-4">
        <form className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-100">
                Nama lengkap
              </label>
              <input
                className="input bg-white/10"
                placeholder="Nama sesuai KTP"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-100">
                Nomor HP
              </label>
              <input
                className="input bg-white/10"
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-100">
              Email
            </label>
            <input
              type="email"
              className="input bg-white/10"
              placeholder="nama@email.com"
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-100">
                Password
              </label>
              <input
                type="password"
                className="input bg-white/10"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-100">
                Konfirmasi Password
              </label>
              <input
                type="password"
                className="input bg-white/10"
                placeholder="Ulangi password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Daftar & lanjut verifikasi
          </button>
        </form>
        <p className="text-center text-sm text-slate-200">
          Setelah daftar, Anda akan diarahkan ke halaman verifikasi untuk OTP &
          unggah KTP.{" "}
          <Link href="/verify" className="font-semibold text-sky-100">
            Lanjut verifikasi
          </Link>
        </p>
        <p className="text-center text-sm text-slate-200">
          Sudah punya akun?{" "}
          <Link href="/login" className="font-semibold text-sky-100">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
}

