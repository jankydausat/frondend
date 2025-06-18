<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6 text-center">Manajemen Sparepart</h2>

    <!-- Form Tambah / Edit -->
    <form @submit.prevent="submitForm" class="bg-white p-4 rounded shadow mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          v-model="form.nama"
          type="text"
          placeholder="Nama Sparepart"
          class="input"
          required
        />
        <input
          v-model.number="form.harga"
          type="number"
          placeholder="Harga"
          class="input"
          required
        />
        <input v-model.number="form.stok" type="number" placeholder="Stok" class="input" required />
      </div>
      <div class="mt-4 flex gap-4">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {{ form.id ? "Update" : "Tambah" }}
        </button>
        <button type="button" @click="resetForm" class="text-gray-600 underline">Batal</button>
      </div>
    </form>

    <!-- Tabel Data -->
    <div class="bg-white shadow rounded">
      <table class="min-w-full text-sm">
        <thead class="bg-gray-200 text-gray-600">
          <tr>
            <th class="py-2 px-4 text-left">Nama</th>
            <th class="py-2 px-4 text-left">Harga</th>
            <th class="py-2 px-4 text-left">Stok</th>
            <th class="py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in spareparts" :key="item.id" class="border-t">
            <td class="py-2 px-4">{{ item.nama }}</td>
            <td class="py-2 px-4">Rp{{ item.harga.toLocaleString() }}</td>
            <td class="py-2 px-4">{{ item.stok }}</td>
            <td class="py-2 px-4 text-center space-x-2">
              <button @click="editSparepart(item)" class="text-blue-600 hover:underline">
                Edit
              </button>
              <button @click="deleteSparepart(item.id)" class="text-red-600 hover:underline">
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const API = " https://backend-ikibengkel.backendikibengkel.workers.dev/api/spareparts";

export default {
  data() {
    return {
      spareparts: [],
      form: {
        id: null,
        nama: "",
        harga: null,
        stok: null,
      },
    };
  },
  methods: {
    async fetchSpareparts() {
      const res = await axios.get(API);
      this.spareparts = res.data;
    },
    async submitForm() {
      if (this.form.id) {
        // Update
        await axios.put(`${API}/${this.form.id}`, this.form);
      } else {
        // Create
        await axios.post(API, this.form);
      }
      this.resetForm();
      this.fetchSpareparts();
    },
    editSparepart(item) {
      this.form = { ...item };
    },
    async deleteSparepart(id) {
      if (confirm("Yakin ingin menghapus?")) {
        await axios.delete(`${API}/${id}`);
        this.fetchSpareparts();
      }
    },
    resetForm() {
      this.form = { id: null, nama: "", harga: null, stok: null };
    },
  },
  mounted() {
    this.fetchSpareparts();
  },
};
</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.375rem;
  width: 100%;
}
</style>
