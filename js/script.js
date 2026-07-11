function show(id){
    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    const menu=document.getElementById("menu");
    if(menu){
        menu.classList.remove("show-menu");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function toggleMenu(){
    document.getElementById("menu").classList.toggle("show-menu");
}

function openLightbox(src){
    document.getElementById("lightbox-img").src=src;
    document.getElementById("lightbox").style.display="flex";
}

function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}

window.onload=function(){
    show("home");
};
