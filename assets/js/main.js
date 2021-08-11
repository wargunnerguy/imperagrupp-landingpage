window.onload = function () {
    window.setTimeout(fadeout, 500);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    var logo = document.querySelector('.navbar-brand img')
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
        logo.src = 'assets/img/logo/Rebanevektor_50.png';
    } else {
        header_navbar.classList.remove("sticky");
        logo.src = 'assets/img/logo/Rebanevektor_50.png';
    }
    var backToTo = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTo.style.display = "flex";
    } else {
        backToTo.style.display = "none";
    }
};



function onScroll(event) {
    var sections = document.querySelectorAll('.page-scroll');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < sections.length; i++) {
        var currLink = sections[i];
        var val = currLink.getAttribute('href');
        var refElement = document.querySelector(val);
        var scrollTopMinus = scrollPos + 73;
        if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
            document.querySelector('.page-scroll').classList.remove('active');
            currLink.classList.add('active');
        } else {
            currLink.classList.remove('active');
        }
    }
};
window.document.addEventListener('scroll', onScroll);

//===== close navbar-collapse when a  clicked
let navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
    e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove('show')
    })
);
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});

var cu = new counterUp({start: 0, duration: 2000, intvalues: true, interval: 100, append: 'K'});
cu.start();

new WOW().init();