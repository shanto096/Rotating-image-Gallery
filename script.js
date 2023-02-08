const container = document.querySelector(".img-container")
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
prevEl.addEventListener("click",()=>{
 x = x + 45;
 clearTimeout(timer);
 upGallery();
});
nextEl.addEventListener("click",()=>{
    x = x - 45;
    clearTimeout(timer);
    upGallery();
   });

function upGallery() {
    container.style.transform =`perspective(1000px) rotateY(${x}deg)`;
   timer = setTimeout(()=>{
        x = x - 45;
        upGallery();
    },3000);
};
upGallery()