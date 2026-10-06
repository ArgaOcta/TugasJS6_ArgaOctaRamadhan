import users from "./data.mjs";

// Melihat data
const index = () => {
  console.log("=== DAFTAR USER ===");

  users.map((user, i) => {
    console.log(
      `${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`
    );
  });

  console.log("\n");
};

// Menambah data
const store = (user) => {
  users.push(user);
  console.log(`[+] Berhasil menambahkan: ${user.nama}`);
};

// Menghapus data
const destroy = () => {
  const removed = users.pop();

  if (removed) {
    console.log(`[-] Berhasil menghapus: ${removed.nama}`);
  }
};

export { index, store, destroy };