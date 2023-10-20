list_plat_nomor = [8993, 2198, 2501, 2735, 3772, 4837, 9152]

kendaraan_genap = 0
kendaraan_ganjil = 0

for (let x in list_plat_nomor) {
  if (list_plat_nomor[x] % 2 == 0) {
    // Jumlahkan kendaraan yang memiliki plat nomor genap
    kendaraan_genap += 1
  } else {
    // Jumlahkan kendaraan yang memiliki plat nomor ganjil
    kendaraan_ganjil += 1
  }
}
total_kendaraan = kendaraan_genap + kendaraan_ganjil

console.log(`Jumlah mobil dengan plat nomor genap adalah : ${kendaraan_genap}`)
console.log(`Jumlah mobil dengan plat nomor ganjil adalah : ${kendaraan_ganjil}`)
console.log(`Total seluruh kendaraan adalah : ${total_kendaraan}`)
