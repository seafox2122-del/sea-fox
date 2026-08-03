// ==============================
// SEA FOX WEBSITE SCRIPT
// ==============================


// تغيير شكل الـ Header عند النزول

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,15,30,0.98)";

    }else{

        header.style.background = "rgba(0,25,45,0.9)";

    }

});




// Animation عند ظهور الأقسام

const sections = document.querySelectorAll(".section, .card");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{

    threshold:0.2

});



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});