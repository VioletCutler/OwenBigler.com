import { fetchImages } from './api/index.js';

/* ======
Create Mobile Menu
====== */
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const mobileMenuLinks = document.getElementsByClassName("mobile-link");
function closeMobileMenuOnResize() {
  const mobileMenuClassList = Array.from(mobileMenu.classList);
  if (window.innerWidth > 500 && mobileMenuClassList.includes("open")) {
    toggleMobileMenu();
  }
}
window.addEventListener("resize", closeMobileMenuOnResize);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("open");
}

/* ======
Create Photo Elements With Cloud Images
====== */
const aboutPagePhoto = document.getElementById('about-photo');
const imagesArray = await fetchImages()

if (aboutPagePhoto) {
  aboutPagePhoto.src = imagesArray[0];
}

const photoSection = document.getElementById("photo-section");    


if (photoSection) {
  function createPhotoSection() {
  for (let i = 0; i < imagesArray.length; i++) {
    let photo = document.createElement("img");
    photo.classList += "photos";
    photo.src += imagesArray[i]
    console.log('Photo:', photo)
    photoSection.appendChild(photo);
  }
}
  createPhotoSection();
}





// function createTestImagePhotoSection() {
//   for (let i = 1; i < 16; i++) {
//     let photo = document.createElement("img");
//     photo.classList += "photos"
//     photo.src += `../photos/test_images/Test_Image_${i}.jpg`
//     photoSection.appendChild(photo);
//   }
// }

// createTestImagePhotoSection();



