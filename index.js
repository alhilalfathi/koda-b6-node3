import { konversiTanggal } from "./konversi.js";

console.log("Masukan Tanggal: ");
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  const inputDate = input.split('-');
  konversiTanggal(inputDate);
//   console.log(input)
//   console.log(inputDate)
  process.stdin.pause();
  });
  

