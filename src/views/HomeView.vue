<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <h1 class="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 whitespace-nowrap">
          IKIBENGKEL
        </h1>
        <ul class="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base mt-2 sm:mt-0">
          <li>
            <router-link to="/" class="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/sparepart"
              class="text-gray-700 hover:text-blue-500 whitespace-nowrap"
            >
              Daftar Sparepart
            </router-link>
          </li>
          <li>
            <router-link to="/admin" class="text-gray-700 hover:text-blue-500 whitespace-nowrap">
              Admin
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <section class="bg-blue-600 text-white py-24 text-center">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-4">Solusi Sparepart Motor Terlengkap</h2>
        <p class="text-lg mb-6">
          Temukan berbagai jenis sparepart motor terbaik untuk kendaraan Anda.
        </p>
        <router-link to="/sparepart">
          <button
            class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            Lihat Produk
          </button>
        </router-link>
      </div>
    </section>

    <!-- Galeri -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h3 class="text-3xl font-bold text-gray-800 mb-8">Galeri Bengkel</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <img
            src="@/assets/galeri1.jpg"
            alt="Galeri 1"
            class="rounded shadow w-full h-auto object-cover"
          />
          <img
            src="@/assets/galeri2.jpg"
            alt="Galeri 2"
            class="rounded shadow w-full h-auto object-cover"
          />
          <img
            src="@/assets/galeri3.jpg"
            alt="Galeri 3"
            class="rounded shadow w-full h-auto object-cover"
          />
          <img
            src="@/assets/galeri4.jpg"
            alt="Galeri 4"
            class="rounded shadow w-full h-auto object-cover"
          />
          <img
            src="@/assets/galeri5.jpg"
            alt="Galeri 5"
            class="rounded shadow w-full h-auto object-cover"
          />
          <img
            src="@/assets/galeri7.jpg"
            alt="Galeri 6"
            class="rounded shadow w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Testimoni -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-3xl font-bold text-center text-gray-800 mb-12">Testimoni Pelanggan</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded shadow">
            <p class="text-gray-600 italic mb-4">
              "Pelayanan cepat dan sparepart lengkap, sangat puas!"
            </p>
            <h4 class="font-bold text-gray-700">- Budi Santoso</h4>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <p class="text-gray-600 italic mb-4">
              "Harga terjangkau dan kualitas original, rekomendasi banget!"
            </p>
            <h4 class="font-bold text-gray-700">- Rina Dewi</h4>
          </div>
          <div class="bg-white p-6 rounded shadow">
            <p class="text-gray-600 italic mb-4">
              "Pesanan dikirim cepat, pelayanan customer service ramah."
            </p>
            <h4 class="font-bold text-gray-700">- Andi Pratama</h4>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2025 Bengkel Motor Jaya. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
