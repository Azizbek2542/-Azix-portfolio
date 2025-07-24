const toggle = document.getElementById('darkmode-toggle');

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.transition = 'background-color 0.3s ease';
    }
});



// function openFull(imgElement) {
//   const lightbox = document.getElementById("lightbox");
//   const lightboxImg = document.getElementById("lightbox-img");

//   lightboxImg.src = imgElement.src;
//   lightbox.style.display = "flex";
// }

// function closeFull() {
//   document.getElementById("lightbox").style.display = "none";
// }

