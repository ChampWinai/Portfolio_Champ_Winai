let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Dark mode toggle
document.getElementById("toggleDarkMode").onclick = function () {
  document.body.classList.toggle("dark-mode");
  // เปลี่ยนไอคอนปุ่ม
  this.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
};
