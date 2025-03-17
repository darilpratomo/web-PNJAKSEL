'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});


const copyrightElement = document.querySelector('.copyright');
const currentYear = new Date().getFullYear();
copyrightElement.innerHTML = `&copy; ${currentYear} Pengadilan Negeri Jakarta Selatan Kelas 1A Khusus`;

document.querySelectorAll('.navbar-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
      item.querySelector('.dropdown').style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
      item.querySelector('.dropdown').style.display = 'none';
  });
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 10 seconds
setInterval(() => {
  moveSlide(1);
}, 10000);

// Function to show the selected news
function showNews(index) {
  // Hide all news items
  var newsItems = document.querySelectorAll('.news3-item');
  newsItems.forEach(function(item) {
    item.style.display = 'none';
  });

  // Show the selected news item
  document.getElementById('news3-' + (index + 1)).style.display = 'block';
}

// Initial load to show the first news
window.onload = function() {
  showNews(0);
};

// Function to show the selected news and highlight the active bar
function showNews(index) {
  // Hide all news items
  var newsItems = document.querySelectorAll('.news3-item');
  newsItems.forEach(function(item) {
    item.style.display = 'none';
  });

  // Show the selected news item
  document.getElementById('news3-' + (index + 1)).style.display = 'block';

  // Remove 'active' class from all bars
  var bars = document.querySelectorAll('.news3-bar');
  bars.forEach(function(bar) {
    bar.classList.remove('active');
  });

  // Add 'active' class to the clicked bar
  bars[index].classList.add('active');
}

// Initial load to show the first news and activate the first bar
window.onload = function() {
  showNews(0);
};

document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 0; // Indeks berita yang sedang ditampilkan
  var newsItems = document.querySelectorAll('.news3-item'); // Ambil semua elemen berita
  var bars = document.querySelectorAll('.news3-bar'); // Ambil semua elemen bar

  // Function to show the selected news and highlight the active bar
  function showNews(index) {
    if (newsItems.length === 0 || bars.length === 0) {
      console.error("Tidak ada elemen berita atau bar yang ditemukan");
      return;
    }

    // Reset display untuk semua item berita dan hilangkan kelas 'active' pada bar
    newsItems.forEach(function (item) {
      item.style.display = 'none';
    });
    bars.forEach(function (bar) {
      bar.classList.remove('active');
    });

    // Tampilkan berita yang dipilih dan aktifkan bar yang sesuai
    if (newsItems[index] && bars[index]) {
      newsItems[index].style.display = 'block';
      bars[index].classList.add('active');
    } else {
      console.error("Indeks melebihi jumlah berita atau bar");
    }
  }

  // Function untuk auto-slide setiap 10 detik
  function autoSlide() {
    currentIndex = (currentIndex + 1) % newsItems.length; // Kembali ke berita pertama setelah berita terakhir
    showNews(currentIndex);
  }

  // Inisialisasi tampilan pertama dan mulai auto-slide
  if (newsItems.length > 0) {
    showNews(currentIndex); // Tampilkan berita pertama
    setInterval(autoSlide, 10000); // Slide otomatis setiap 10 detik
  } else {
    console.error("Tidak ada elemen berita ditemukan.");
  }
});

// Slider Kiri
let currentSlideLeft = 0;
const slidesLeft = document.querySelectorAll('#slider-left .slide2');

function showSlideLeft(index) {
  const sliderLeft = document.querySelector('#slider-left-track');
  if (index >= slidesLeft.length) {
    currentSlideLeft = 0;
  } else if (index < 0) {
    currentSlideLeft = slidesLeft.length - 1;
  } else {
    currentSlideLeft = index;
  }
  sliderLeft.style.transform = `translateX(-${currentSlideLeft * 100}%)`;
}

function nextSlideLeft() {
  showSlideLeft(currentSlideLeft + 1);
}

function prevSlideLeft() {
  showSlideLeft(currentSlideLeft - 1);
}
function updateDateTime() {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const now = new Date();

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Update waktu
  document.getElementById('day').innerText = dayName;
  document.getElementById('date').innerText = `${day} ${month} ${year}`;
  document.getElementById('time').innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds} WIB`;
}

// Fungsi untuk toggle pilihan bahasa
function toggleLanguageOptions() {
  const options = document.getElementById('languageOptions');
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
}

// Fungsi untuk menerjemahkan halaman
function translatePage(languageCode) {
  // Menggunakan Google Translate atau library lainnya
  console.log(`Translate page to: ${languageCode}`);
}

// Update setiap detik
setInterval(updateDateTime, 1000);
updateDateTime(); // Menjalankan saat halaman di-load

// Script untuk tombol translate
document.getElementById('translate-btn').addEventListener('click', function() {
  const translateBar = document.getElementById('google_translate_element');
  translateBar.style.display = (translateBar.style.display === 'none' || translateBar.style.display === '') ? 'block' : 'none';
});

// Inisialisasi objek untuk Text-to-Speech
let synth = window.speechSynthesis;
let currentUtterance;

// Fungsi untuk membaca teks yang diarahkan kursor
function bacaTeks(teks) {
    if (synth.speaking) {
        synth.cancel(); // Hentikan suara sebelumnya jika masih berbicara
    }

    currentUtterance = new SpeechSynthesisUtterance(teks);
    currentUtterance.lang = "id-ID"; // Bahasa Indonesia

    // Ambil daftar suara dan pilih suara wanita dengan aksen Indonesia
    let suaraTersedia = synth.getVoices();
    let suaraWanitaID = suaraTersedia.find(voice => voice.lang === "id-ID" && voice.name.toLowerCase().includes("female"));

    if (suaraWanitaID) {
        currentUtterance.voice = suaraWanitaID;
    }

    synth.speak(currentUtterance);
}

// Fungsi untuk menghentikan suara ketika kursor keluar
function hentikanBicara() {
    if (synth.speaking) {
        synth.cancel();
    }
}

// Event listener untuk mendeteksi saat kursor berada di atas elemen teks, tombol, dan menu
document.body.addEventListener("mouseover", function (event) {
    let elemen = event.target;
    let tagNama = elemen.tagName.toLowerCase();

    // Menambahkan elemen yang harus dibaca oleh text-to-speech
    if (["p", "h1", "h2", "h3", "span", "div", "a", "button", "li", "label"].includes(tagNama)) {
        bacaTeks(elemen.innerText);
    }
});

// Event listener untuk menghentikan suara saat kursor keluar dari elemen
document.body.addEventListener("mouseout", hentikanBicara);

// Tunggu daftar suara tersedia sebelum dipanggil (karena bisa delay saat halaman baru dimuat)
window.speechSynthesis.onvoiceschanged = function () {
    console.log("Suara telah diperbarui, menggunakan suara wanita Indonesia jika tersedia.");
};

// // CHATBOT PTSP
// let previousChat = "";
// let recognition;

// // Fungsi untuk mengubah tampilan chat
// function toggleChat() {
//     const chat = document.getElementById("chatContainer");
//     chat.style.display = (chat.style.display === "none" || chat.style.display === "") ? "flex" : "none";
// }

// // Fungsi untuk memilih opsi dari chat
// function selectOption(option) {
//     document.getElementById("chatOptions").style.display = "none";
//     document.getElementById("chatBody").innerHTML = previousChat;

//     const chatBody = document.getElementById("chatBody");
//     chatBody.innerHTML += `<div class="user-message">${option}</div>`;

//     setTimeout(() => {
//         const botResponse = getBotResponse(option);
//         chatBody.innerHTML += `<div class="bot-message">${botResponse}</div>`;
//         chatBody.scrollTop = chatBody.scrollHeight;
//         previousChat = chatBody.innerHTML;
//     }, 1000);
// }

// // Fungsi untuk mengaktifkan pertanyaan kustom
// function enableCustomQuestion() {
//     document.getElementById("chatOptions").style.display = "none";
//     document.getElementById("chatInput").style.display = "flex";
//     document.getElementById("chatBody").innerHTML = previousChat;
// }

// // Fungsi untuk mengirim pesan
// function sendMessage() {
//     const input = document.getElementById("userInput");
//     const message = input.value.trim();
//     if (message === "") return;

//     const chatBody = document.getElementById("chatBody");
//     chatBody.innerHTML += `<div class="user-message">${message}</div>`;

//     setTimeout(() => {
//         const botResponse = getBotResponse(message);
//         chatBody.innerHTML += `<div class="bot-message">${botResponse}</div>`;
//         chatBody.scrollTop = chatBody.scrollHeight;
//         previousChat = chatBody.innerHTML;
//     }, 1000);

//     input.value = ""; // Mengosongkan input setelah mengirim
// }

// // Fungsi untuk menangani penekanan tombol
// function handleKeyPress(event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// }

// // Fungsi untuk menampilkan opsi
// function showOptions() {
//     document.getElementById("chatOptions").style.display = "block";
//     document.getElementById("chatInput").style.display = "none";
//     document.getElementById("chatBody").innerHTML = "";
// }

// // Fungsi untuk mendapatkan respons bot berdasarkan input
// function getBotResponse(input) {
//     input = input.toLowerCase();

//     if (/mendaftar|daftar/.test(input)) {
//         return "Anda bisa mendaftar dengan mengklik tombol 'Daftar' di halaman utama.";
//     } else if (/login|masuk/.test(input)) {
//         return "Silakan masukkan email dan kata sandi Anda di halaman login.";
//     } else if (/lupa kata sandi|reset kata sandi/.test(input)) {
//         return "Gunakan fitur 'Lupa Kata Sandi' untuk mereset password Anda.";
//     } else if (/jam operasional|jam buka|jam berapa|kapan buka|kapan pn jaksel buka|kapan pengadilan negeri jakarta selatan buka|kapan pengadilan buka|jam tutup/.test(input)) {
//         return "Pengadilan Negeri Jakarta Selatan buka pada hari Senin - Jumat dari Jam 08.30 s.d 14.00 WIB.";
//     } else if (/kontak customer service|hubungi|menghubungi|hubungi customer service/.test(input)) {
//         return "Jika Anda ingin menghubungi pihak Pengadilan Negeri Jakarta Selatan, Anda dapat menghubungi email kami di informasi@pn-jakartaselatan.go.id atau dapat langsung datang ke PTSP (Pelayanan Terpadu Satu Pintu) di Pengadilan Negeri Jakarta Selatan.";
//     } else if (/informasi ketua|informasi wakil|siapa ketua pengadilan negeri jakarta selatan|siapa wakil ketua pengadilan negeri jakarta selatan|siapa wakil pengadilan negeri jakarta selatan|siapa ketua|siapa wakil ketua|siapa ketua pengadilan|siapa wakil pengadilan|siapa wakil ketua pengadilan|siapa wakil/.test(input)) {
//         return "Ketua Pengadilan Negeri Jakarta Selatan saat ini adalah Bapak <b>Muhammad Arif Nuryanta, S.H., M.H.</b>, dan Wakil Ketua Pengadilan Negeri Jakarta Selatan saat ini adalah Bapak <b>Mashuri Effendie, S.H., M.H.</b><br><br>Untuk info lebih lengkap Anda dapat mengunjungi situs resmi Pengadilan Negeri Jakarta Selatan atau menghubungi pihak pengadilan secara langsung.";
//     } else if (/jam operasional pengadilan/.test(input)) {
//         return "Pengadilan Negeri Jakarta Selatan buka dari pukul 08:00 hingga 16:00 pada hari kerja.";
//     } else {
//         return "Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba dengan kata lain.";
//     }
// }

// Fungsi untuk memulai pengenalan suara
function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Browser Anda tidak mendukung fitur pengenalan suara.");
        return;
    }

    recognition = new webkitSpeechRecognition();
    recognition.lang = 'id-ID'; // Mengatur bahasa ke Bahasa Indonesia
    recognition.interimResults = false; // Hanya hasil akhir
    recognition.maxAlternatives = 1; // Hanya satu alternatif

    recognition.start();

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById("userInput").value = transcript; // Menampilkan hasil pengenalan suara di input
        sendMessage(); // Mengirim pesan setelah pengenalan suara
    };

    recognition.onerror = function(event) {
        console.error("Error occurred in recognition: " + event.error);
    };
}
