import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("--- KONDISI AWAL ---");
  index();

  console.log("--- MENAMBAHKAN 2 DATA BARU ---");

  store({
    nama: 'Data 11',
    umur: 30,
    alamat: 'Jl. Data 11',
    email: 'data11@gmail.com'
  });

  store({
    nama: 'Data 12',
    umur: 31,
    alamat: 'Jl. Data 12',
    email: 'data12@gmail.com'
  });

  console.log("\n--- KONDISI SETELAH DITAMBAH ---");
  index();

  console.log("--- MENGHAPUS DATA ---");
  destroy();

  console.log("\n--- KONDISI AKHIR ---");
  index();
};

main();