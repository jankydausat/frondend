<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
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

    <!-- Isi Halaman -->
    <div class="p-8">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">Daftar Sparepart</h2>

      <div v-if="spareparts.length === 0" class="text-center text-gray-500">
        Belum ada data sparepart.
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="sparepart in spareparts"
          :key="sparepart.id"
          class="bg-white p-6 rounded-xl shadow-md"
        >
          <h3 class="text-xl font-semibold text-gray-700">{{ sparepart.nama }}</h3>
          <p class="text-gray-600">Harga: Rp {{ formatHarga(sparepart.harga) }}</p>
          <p class="text-gray-600">Stok: {{ sparepart.stok }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      spareparts: [],
    };
  },
  methods: {
    async fetchSpareparts() {
      try {
        const res = await axios.get(
          "https://backend-ikibengkel.backendikibengkel.workers.dev/api/spareparts"
        );
        this.spareparts = res.data;
      } catch (error) {
        console.error("Gagal fetch data sparepart:", error);
      }
    },
    formatHarga(harga) {
      return new Intl.NumberFormat("id-ID").format(harga);
    },
  },
  mounted() {
    this.fetchSpareparts();
  },
};
</script>

<style scoped></style>
