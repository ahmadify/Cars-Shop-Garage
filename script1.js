
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("click", () => {
let afterShow = card.closest(".card-stack").querySelector(".card2");
    afterShow.classList.toggle("expanded");



});

card.addEventListener("mouseleave", () => {
let afterShow = card.closest(".card-stack").querySelector(".card2");
    afterShow.classList.remove("expanded");

});



});


let btn = document.querySelectorAll(".bta");

let section = document.getElementById("garage");

btn.forEach(scroll =>{

    scroll.addEventListener("click", (e) => {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });
    

})

let btn2 = document.querySelector(".pro");

let section2 = document.getElementById("best-productions");


    btn2.addEventListener("click", (e) => {
        e.preventDefault();
        section2.scrollIntoView({ behavior: "smooth" });
    

})

let btn3 = document.querySelector(".historyTag");

let section3 = document.getElementById("our-history");


    btn3.addEventListener("click", (e) => {
        e.preventDefault();
        section3.scrollIntoView({ behavior: "smooth" });
    

})


window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    const elements2 = document.querySelectorAll(".fill")
    elements.forEach(C => {
        const rect = C.getBoundingClientRect();
        if (rect.top < window.innerHeight -100 && rect.bottom > 0) {
        C.classList.add("show");
        }
        else{
            C.classList.remove("show");
        }
    });
    elements2.forEach(R =>{
        const recty = R.getBoundingClientRect();
        if (recty.top < window.innerHeight && recty.bottom > 0) {
            R.classList.add("show");
            }
            else{
                R.classList.remove("show");
            }
    })
    });

    function setFill(id, percent) {

        document.getElementById(id).style.width = percent + "%";
        }

    setTimeout(() => {
    setFill("fill1", 50)
    }, 500);

    setTimeout(() => {
    setFill("fill2", 80)
    }, 1000);

    setTimeout(() => {
    setFill("fill3", 40)
    }, 1500);

    const CC = document.querySelector(".Contact");
    CC.addEventListener("click", () =>{
        window.location.href = "contact.html";

    })
    

