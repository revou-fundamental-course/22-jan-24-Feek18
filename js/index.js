document.querySelector('.menu-bar').addEventListener('click', function() {
    document.querySelector('.header nav ul').classList.toggle('show');
});


function validateForm() {
    // Ambil nilai input
    var name = document.forms["formPendaftaran"]["name"].value;
    var email = document.forms["formPendaftaran"]["email"].value;
    var like = document.forms["formPendaftaran"]["like"].value;

    // Inisialisasi pesan kesalahan
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var likeError = document.getElementById("likeError");

    // Reset pesan kesalahan
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    likeError.innerHTML = "";

    // Validasi nama
    if (name.trim() === "") {
        nameError.innerHTML = "Name must be filled out";
        return false;
    }

    // Validasi email
    if (email.trim() === "") {
        emailError.innerHTML = "Email must be filled out";
        return false;
    } else {
        // Format email regex sederhana
        var emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email.trim())) {
            emailError.innerHTML = "Invalid email address";
            return false;
        }
    }

    // Validasi pilihan
    if (like === "0") {
        likeError.innerHTML = "Please select an option";
        return false;
    }

    // Jika semua validasi lolos, formulir dikirim
    alert("Successfully submitted!");
    return true;
}

document,addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let isTransitioning = false;

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            setTimeout(() => {
               const firstSlide = document.querySelector('.detail-img');
               slider.appendChild(firstSlide);
               slider.style.transform = 'translateX(0)';
               isTransitioning = false; 
            }, 800);
        }
    }
    setInterval(nextSlide, 2000);
})