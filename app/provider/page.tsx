"use client";

import { useState } from "react";
import { formatIDR, products } from "../lib/products";

export default function ProviderPage() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
  });

  return (
    <div className="space-y-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-sky-100">
            Penyedia Barang
          </p>
          <h1 className="text-3xl font-bold">
            Kelola barang yang ingin disewakan
          </h1>
          <p className="text-slate-200">
            Atur harga, status, dan tambahkan produk baru.
          </p>
        </div>
        <span className="pill bg-emerald-100 text-emerald-700">
          Dashboard penyedia
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="card space-y-4 border-white/10 bg-white/90 p-6 text-slate-900">
          <h2 className="text-lg font-semibold text-slate-900">
            Barang aktif
          </h2>
          <div className="grid gap-3">
            {products.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm"
              >
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-slate-600">
                    {item.category} · {formatIDR(item.pricePerDay)}/hari
                  </p>
                </div>
                <span
                  className={`pill ${
                    item.status === "ready"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {item.status === "ready" ? "Siap" : "Disewakan"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card space-y-4 border-white/10 bg-white/10 p-6">
          <h2 className="text-lg font-semibold text-white">
            Tambah produk baru
          </h2>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setForm({ name: "", category: "", price: "" });
            }}
          >
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-100">
                Nama produk
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input bg-white/10"
                placeholder="Contoh: Kamera DSLR Pro"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-100">
                Kategori
              </label>
              <input
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="input bg-white/10"
                placeholder="Kamera, Audio, Fashion..."
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-100">
                Harga per hari
              </label>
              <input
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="input bg-white/10"
                placeholder="Contoh: 250000"
              />
            </div>
            <button className="btn btn-primary w-full" type="submit">
              Simpan produk
            </button>
          </form>
          <p className="text-sm text-slate-200">
            Form ini untuk penyedia menambahkan atau mengatur barang sewaan,
            termasuk harga harian.
          </p>
        </div>
      </div>
    </div>
  );
}

