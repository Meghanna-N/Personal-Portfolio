function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open'); // Toggle the open class to slide the sidebar in/out
}
    
function openModal(imageSrc) {
    var modal = document.getElementById("certificateModal");
    var modalImg = document.getElementById("certificateImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
    
function toggleCertificates(show) {
    const moreCertificates = document.getElementById("more-certificates");
    const viewMoreBtn = document.getElementById("view-more-btn");
    const viewLessBtn = document.getElementById("view-less-btn");

    if (show) {
        moreCertificates.style.display = "flex"; // Show more certificates
        viewMoreBtn.style.display = "none"; // Hide "View More" button
        viewLessBtn.style.display = "block"; // Show "View Less" button
    } else {
        moreCertificates.style.display = "none"; // Hide additional certificates
        viewMoreBtn.style.display = "block"; // Show "View More" button
        viewLessBtn.style.display = "none"; // Hide "View Less" button
    }
}
