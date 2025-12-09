export type ProductStatus = "ready" | "rented";

export type Product = {
  id: string;
  name: string;
  category: string;
  pricePerDay: number;
  status: ProductStatus;
  location: string;
  description: string;
  imageColor: string;
};

export const products: Product[] = [
  {
    id: "cam-01",
    name: "Kamera Mirrorless Alpha 7",
    category: "Kamera & Video",
    pricePerDay: 320000,
    status: "ready",
    location: "Jakarta Selatan",
    description:
      "Kamera full-frame dengan lensa 24-70mm, cocok untuk event dan traveling.",
    imageColor: "linear-gradient(135deg, #1b4b7a, #89c2d9)",
  },
  {
    id: "lens-01",
    name: "Lensa Tele 70-200mm",
    category: "Kamera & Video",
    pricePerDay: 220000,
    status: "rented",
    location: "Jakarta Barat",
    description:
      "Lensa tele jarak jauh stabil untuk olahraga dan wildlife, tersedia filter UV.",
    imageColor: "linear-gradient(135deg, #0f2744, #274690)",
  },
  {
    id: "sound-01",
    name: "Sound System 1000W",
    category: "Audio",
    pricePerDay: 280000,
    status: "ready",
    location: "Depok",
    description:
      "Paket lengkap speaker aktif, mixer 6 channel, dan 2 wireless mic.",
    imageColor: "linear-gradient(135deg, #102a43, #4299e1)",
  },
  {
    id: "camp-01",
    name: "Paket Camping 4 Orang",
    category: "Outdoor",
    pricePerDay: 150000,
    status: "ready",
    location: "Bandung",
    description:
      "Tenda dome, matras, nesting, lampu, dan kompor portable siap pakai.",
    imageColor: "linear-gradient(135deg, #1f3c88, #6fb1fc)",
  },
  {
    id: "tool-01",
    name: "Set Bor & Obeng Listrik",
    category: "Perkakas",
    pricePerDay: 90000,
    status: "rented",
    location: "Bekasi",
    description:
      "Paket bor listrik, mata bor lengkap, mata obeng, dan safety gear.",
    imageColor: "linear-gradient(135deg, #102542, #2f6690)",
  },
  {
    id: "dress-01",
    name: "Gaun Pesta Navy",
    category: "Fashion",
    pricePerDay: 70000,
    status: "ready",
    location: "Jakarta Pusat",
    description:
      "Gaun elegan dengan ukuran M-L, cocok untuk gala dan acara formal.",
    imageColor: "linear-gradient(135deg, #1c1f3b, #3c4d99)",
  },
];

export function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

