$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.box-menu').addClass("scrollMenu")
        } else {
            $('.box-menu').removeClass("scrollMenu")
        }
    });

    // Slider animation page-home

    $('.box-slider').slick({
        prevArrow: '<button type="button" class="slick-prev pull-left"><i class="bx bxs-chevron-left bx-lg" ></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><i class="bx bxs-chevron-right bx-lg"></i></button>',
        dots: true,
    });

    //Slider page-dayvist

    $('.box-slide-pr').slick({
        prevArrow: '<button type="button" class="slick-prev pull-left"><i class="bx bxs-chevron-left bx-lg" ></i></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><i class="bx bxs-chevron-right bx-lg"></i></button>',
        dots: false,
    });

    //Slider page-about

    $('.time-line').slick({
        arrows: false,
        dots: true
    });


    //Active menu

    const menuChild = document.getElementById("menu-child");
    const navMenu = document.getElementById("nav-menu");

    menuChild.addEventListener("click", () => {
        menuChild.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    //Search

    const openSearch = document.getElementById("box-search");
    const navSearch = document.getElementById("search");


    openSearch.addEventListener("click", () => {
        openSearch.classList.toggle("find");
        navSearch.classList.toggle("find");
    });



    // Play video 

    const urlVid = document.getElementById("url-vid");
    const imgVid = document.getElementById("img-vid");
    const video = document.getElementById("video");

    urlVid.addEventListener("click", () => {
        urlVid.classList.toggle("play");
        imgVid.classList.toggle("play");
        video.classList.toggle("play");
    });

    ////////////////////////////////////////////////////


});

//AOS animation

AOS.init();

// Page photos
document.querySelectorAll('.photos .box-photo img').forEach(cardphoto => {
    cardphoto.onclick = () => {
        document.querySelector('.view-photo').style.display = 'block';
        document.querySelector('.view-photo .info-photo img').src = cardphoto.getAttribute('src');
    }
});

document.querySelector('.view-photo .info-photo i').onclick = () => {
    document.querySelector('.view-photo').style.display = 'none';
};


