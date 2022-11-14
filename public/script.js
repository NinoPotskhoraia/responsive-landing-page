//nav toggler
const navToggler = document.querySelector('.hamburger-menu');
const closeNav = document.querySelector('.close');
const navList = document.querySelector('.nav-list');

navToggler.addEventListener('click', ()=>{
    if (navList.style.display == 'none') {
        navList.style.display = 'block';
        navToggler.style.display = 'none';
        closeNav.style.display = 'block';
    } else {
        navList.style.display = 'none';
        closeNav.style.display = 'none';
        navToggler.style.display = 'block';
    }
});

closeNav.addEventListener('click', ()=>{
    if(navList.style.display == 'block'){
       navList.style.display = 'none';
       navToggler.style.display = 'block';
       closeNav.style.display = 'none';
    } else{
        navList.style.display = 'block';
        closeNav.style.display = 'block';
        navToggler.style.display = 'none';
    }
})






//slider

const collection = ["./images/hotel/9.jpg", "./images/hotel/8.jpg", "./images/hotel/7.jpg", "./images/hotel/6.jpg", "./images/hotel/5.jpg", "./images/hotel/4.jpg", "./images/hotel/3.jpg", "./images/hotel/2.jpg", "./images/hotel/1.jpg" ];

const img = document.getElementById('picture');

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let current = 0;

const change = function(){
    const src = collection[current];
    img.src = src;


}

window.addEventListener('DOMContentLoaded', function(){
    change();
})

nextBtn.addEventListener('click', function(){
    current++;
    if(current > collection.length - 1){
        current = 0;
    }
    change();
})

prevBtn.addEventListener('click', function(){
    current--;
    if(current < 0){
        current = collection.length - 1;
    }
    change();
})