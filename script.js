const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".galeri, .popup-img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

const toggle = document.getElementById("darkToggle");

// cek saat pertama kali dibuka
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggle.textContent = "☀️";
    localStorage.setItem("darkMode", "on");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("darkMode", "off");
  }
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const savedVisi = localStorage.getItem("visi");

if (savedVisi) {
  document.getElementById("visiText").textContent = savedVisi;
}

const savedJudul = localStorage.getItem("judul");

if (savedJudul) {
  document.getElementById("judulText").textContent = savedJudul;
}

const pengumuman = localStorage.getItem("pengumuman");

if (pengumuman) {
  document.getElementById("pengumumanText").textContent = "📢 " + pengumuman;
}