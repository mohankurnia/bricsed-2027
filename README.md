# Global Tech Conference

Website conference internasional dengan fitur landing page, halaman submit paper, dan daftar submission yang tersambung ke database MySQL melalui Prisma.

## Fitur

- Landing page modern untuk event conference
- Halaman submit paper untuk peserta
- Halaman daftar submission dengan status paper
- Integrasi Prisma untuk MySQL

## Persiapan

1. Salin file environment contoh:
   ```bash
   copy .env.example .env.local
   ```
2. Sesuaikan koneksi MySQL di .env.local.
3. Jalankan migrasi Prisma:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
4. Jalankan aplikasi:
   ```bash
   npm run dev
   ```

Buka http://localhost:3000 untuk melihat website.
