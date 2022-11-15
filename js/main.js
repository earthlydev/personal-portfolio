import InfiniteMarquee from "https://cdn.skypack.dev/infinite-marquee@1.0.7"

new InfiniteMarquee()


let backToTopBtn = document.getElementById('btn-back-to-top');

window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(
        document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
    ) { backToTopBtn.style.display = "block"; 
    }else{
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", backToTop);

function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}