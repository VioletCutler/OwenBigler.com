const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const mobileMenuLinks = document.getElementsByClassName("mobile-link");
const photoSection = document.getElementById("photo-section");

function closeMobileMenuOnResize() {
  mobileMenuClassList = Array.from(mobileMenu.classList);
  if (window.innerWidth > 500 && mobileMenuClassList.includes("open")) {
    toggleMobileMenu();
  }
}
window.addEventListener("resize", closeMobileMenuOnResize);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("open");
}

function createPhotoSection() {
  for (let i = 1; i < 16; i++) {
    let photo = document.createElement("img");
    photo.classList += "photos"
    photo.src += `../photos/Test_Image_${i}.jpg`
    photoSection.appendChild(photo);
  }
}

createPhotoSection();

async function testQuery() {
  try {
    const response = await fetch('https://example.com/wp-json/wp/v2/media');
    console.log('testQuery Response:', response);
  } catch (error) {
    console.error(error);
  }
}