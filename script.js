
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("bookModal");
    var modalImage = document.getElementById("modalImage");
    var modalTitle = document.getElementById("modalTitle");
    var modalSynopsis = document.getElementById("modalSynopsis");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".book").forEach(function(book) {
        book.onclick = function() {
            modal.style.display = "block";
            modalImage.src = this.children[0].src;
            modalTitle.innerText = this.dataset.title;
            modalSynopsis.innerText = this.dataset.synopsis;
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});