import Link from "next/link";
import { formatIDR, products } from "../lib/products";

const cartItems = products.slice(0, 2);

export default function CartPage() {
  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-sky-100">
            Keranjang
          </p>
          <h1 className="text-3xl font-bold">Barang siap disewa</h1>
          <p className="text-slate-200">
            Status pemesanan akan muncul setelah pembayaran selesai.
          </p>
        </div>
        <Link href="/checkout" className="btn btn-primary">
          Lanjut ke Pembayaran
        </Link>
      </div>

      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="card flex flex-col gap-3 border-white/10 bg-white/90 p-4 text-slate-900 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-14 w-14 rounded-xl"
                style={{ background: item.imageColor }}
              />
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  {item.name}
                </p>
                <p className="text-sm text-slate-600">{item.category}</p>
              </div>
            </div>
            <div className="text-right text-sm text-slate-800">
              <p className="font-semibold">{formatIDR(item.pricePerDay)}/hari</p>
              <p className="text-emerald-600">Status: Menunggu pembayaran</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card space-y-3 border-white/10 bg-white/10 p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-100">Ringkasan</p>
          <p className="text-lg font-bold text-white">
            {formatIDR(cartItems.reduce((a, b) => a + b.pricePerDay, 0))}
          </p>
        </div>
        <Link href="/checkout" className="btn btn-primary w-full text-center">
          Proses Pembayaran
        </Link>
        <p className="text-sm text-slate-200">
          Setelah pembayaran selesai, status pemesanan akan muncul di keranjang.
        </p>
      </div>
    </div>
  );
}

