// GITHUB PROFILE
// Mendapatkan referensi elemen gambar
const githubImage = document.getElementById("githubImage");

// Menambahkan event listener untuk event 'click'
githubImage.addEventListener("click", function () {
  // Membuka tautan GitHub Anda di tab baru
  window.open("https://github.com/ZuhranSam", "_blank");
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

// Like
var likeCountElement = document.getElementById("likeCount");

// Mendapatkan referensi ke dokumen likeCount di Firestore
var likeCountRef = db.collection("likes").doc("likeCount");

// Mengecek apakah sudah ada data likeCount di Firestore
likeCountRef.get().then(function (doc) {
  if (doc.exists) {
    var likeCount = doc.data().count;
    likeCountElement.textContent = likeCount + (likeCount == 1 ? " Like" : " Likes");
  } else {
    // Jika dokumen belum ada, inisialisasi dengan nilai default
    likeCountElement.textContent = "0 Likes";
    likeCountRef.set({ count: 0 });
  }
});

// Menambahkan event listener untuk event 'click' pada gambar
document.getElementById("loveImage").addEventListener("click", function () {
  // Menambah jumlah like
  likeCountRef.get().then(function (doc) {
    var newCount = doc.data().count + 1;

    // Memperbarui teks like count
    likeCountElement.textContent = newCount + (newCount === 1 ? " Like" : " Likes");

    // Menyimpan jumlah like ke Firestore
    likeCountRef.set({ count: newCount });
  });
});

// Menambahkan event listener untuk event 'click' pada tombol reset
document.getElementById("resetButton").addEventListener("click", function () {
  // Mereset jumlah like menjadi 0
  likeCountRef.set({ count: 0 });

  // Memperbarui teks like count
  likeCountElement.textContent = "0 Likes";
});
