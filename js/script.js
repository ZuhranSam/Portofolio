function updateJam() {
  // Buat objek Date untuk mendapatkan waktu saat ini
  let waktu1 = new Date();
  let waktu2 = new Date();

  // Atur zona waktu ke Waktu Indonesia Barat (WIB)
  waktu1.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });
  waktu2.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" });

  // Dapatkan string jam dalam format 24 jam dan menit
  waktu1.setMinutes(waktu1.getMinutes() - 3);
  let jamMenit1 = waktu1.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  // Atur waktu kedua menjadi 2 menit lebih lambat
  waktu2.setMinutes(waktu2.getMinutes());
  let jamMenit2 = waktu2.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

  // Perbarui elemen HTML dengan string jam dan menit
  document.getElementById("jam1").innerHTML = jamMenit1;
  document.getElementById("jam2").innerHTML = jamMenit2;
}

// Perbarui jam setiap detik
setInterval(updateJam, 1000);

// Panggil fungsi pertama kali untuk menginisialisasi waktu
updateJam();
