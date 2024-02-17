document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.classList.toggle('show');
            }
        });
    });
});
function openNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "250px";
    }
}
function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "0";
    }
}
function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        if (sidenav.style.width === "250px") {
            closeNav();
        } else {
            openNav();
        }
    }
}
var dropdownBtns = document.querySelectorAll('.dropdown-btn');
dropdownBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});