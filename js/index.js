const svgRect = document.getElementsByClassName('svg-rect-wrapper')[0];
const menuCloser = document.getElementsByClassName('menu-closer')[0];
const shape = document.getElementsByClassName('rect-shape')[0];
const menu = document.getElementsByClassName('menu-container')[0];

svgRect.addEventListener("click",()=>{
    menu.classList.remove('menu-closed');
    // menu.classList.add('openAnimation');
    menu.style.height = "60vh";

    console.log('cool');
});
menuCloser.addEventListener("click",()=>{
    // menu.classList.add('openAnimation');
    menu.classList.add('menu-closed');
});