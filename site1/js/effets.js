
    window.onload=function(){
        
    let divHamburger = document.getElementById("hamburger");
    divHamburger.addEventListener("mouseover", function(event) {
        divHamburger.style.width = "424px";
        divHamburger.style.transition = "2s";



        }
    )

    divHamburger.addEventListener("mouseout", function(event) {
        divHamburger.style.width = "225px";
        divHamburger.style.transition = "2s";
        
        }
    )
}