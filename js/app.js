window.addEventListener("scroll",function(){
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 1)
})

const nightButton = document.querySelector("#dark-mode");


nightButton.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
})
// when click change lang
document.getElementsByClassName('change-lang')[0].addEventListener("click", function myFunction() {
    let langList = document.querySelector('.change-lang-wrap .lang-list');
    let compStyles = window.getComputedStyle(langList).getPropertyValue('right');
    document.getElementsByClassName('change-lang')[0].classList.toggle('active');
    if (compStyles === "0px") {
        langList.style.opacity = "1";
        langList.style.right = "115px";
    } else {
        langList.style.opacity = "0";
        langList.style.right = "0px";
    }
});

window.onscroll = function() {stickyHeader()};
let header = document.getElementsByTagName('header')[0];
function stickyHeader() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}



let darkMode = localStorage.getItem('darkMode');
let toggleSwitch = document.querySelector('.change-mood');

if(darkMode === null){
    localStorage.setItem('darkMode',false)
}

let dark = ()=>{
    if(darkMode==="true"){
        document.querySelector('body').classList.add('dark');
        toggleSwitch.classList.add('dark-mood');
    }
}

dark();

toggleSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode==="false"){
        localStorage.setItem('darkMode',true);
        toggleSwitch.classList.remove('dark-mood');
        document.querySelector('body').classList.add('dark');
    }else{
        localStorage.setItem('darkMode',false);
        document.querySelector('body').classList.remove('dark');
        toggleSwitch.classList.add('dark-mood');
    }
});




// hamburger menu 
$('.menu-wrapper').click(function(e) {
    e.stopPropagation();
    $('header #myMenu').show();
    $('header #myMenu .navbar-nav').animate({left: '0'}, 300, 'linear');
    $('body').css('overflow-y', 'hidden');
});

$('header .close-menu').click(function(e) {
    e.stopPropagation();
    $('body').css('overflow-y', 'visible');
    $('header #myMenu .navbar-nav').animate({left: '-100%'}, 300, 'linear');
    setTimeout(function() {
        $('header #myMenu').hide();
    }, 200);
});

$('header #myMenu .navbar-nav').click(function(e) {
    e.stopPropagation();
});

