// GITHUB PROFILE
// Mendapatkan referensi elemen gambar
const githubImage = document.getElementById("githubImage");

// Menambahkan event listener untuk event 'click'
githubImage.addEventListener("click", function () {
  // Membuka tautan GitHub Anda di tab baru
  window.open("https://github.com/ZuhranSam", "_blank");
});

// LIKE SECTION
// Mendapatkan referensi elemen gambar, elemen teks like count, dan tombol reset
var loveImage = document.getElementById("loveImage");
var likeCountElement = document.getElementById("likeCount");
var resetButton = document.getElementById("resetButton");

// Mengecek apakah sudah ada data likeCount di localStorage
var likeCount = localStorage.getItem("likeCount") || 0;

// Memperbarui teks like count
likeCountElement.textContent = likeCount + (likeCount == 1 ? " Like" : " Likes");

// Menambahkan event listener untuk event 'click' pada gambar
loveImage.addEventListener("click", function () {
  // Menambah jumlah like
  likeCount++;

  // Memperbarui teks like count
  likeCountElement.textContent = likeCount + (likeCount === 1 ? " Like" : " Likes");

  // Menyimpan jumlah like ke localStorage
  localStorage.setItem("likeCount", likeCount);
});

// Menambahkan event listener untuk event 'click' pada tombol reset
resetButton.addEventListener("click", function () {
  // Mereset jumlah like menjadi 0
  likeCount = 0;

  // Memperbarui teks like count
  likeCountElement.textContent = "0 Likes";

  // Menghapus data likeCount dari localStorage
  localStorage.removeItem("likeCount");
});

// GITHUB FOLLOWER
const username = "ZuhranSam";
const clientId = "88a3795dfe15e037caff";
const clientSecret = "116326bd66e875a6e242e242a7d66a2451ccfb86";

// Build the URL for the GitHub API
const apiUrl = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;

// Fetch data from GitHub API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Extract followers count from the response
    const followersCount = data.followers;

    // Display followers count on the webpage
    document.getElementById("followers-count").innerText = `Followers: ${followersCount}`;
  })
  .catch((error) => console.error("Error fetching data:", error));
