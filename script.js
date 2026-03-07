// Load Header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById("header-placeholder");
    if(header) header.innerHTML = data;
  });

// Load Footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById("footer-placeholder");
    if(footer) footer.innerHTML = data;
  });

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if(menu) menu.classList.toggle("active");
}
function toggleMenu() {
  const menu = document.getElementById("primary-navigation");
  menu.classList.toggle("active");
}