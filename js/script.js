const desplegable = document.getElementById("desplegable")
const toggleMenu = document.getElementById("toggleMenu")

desDesplegar=false

function toggleMenuFunc(){
    //debugger
    console.log(desplegable)

    switch (desDesplegar) {
        case false:
            desplegable.classList.add("desplegarAnim")
            desDesplegar=true;
            break;
        case true:
            desplegable.classList.remove("desplegarAnim")
            //desplegable.classList.add("desDesplegarAnim")
            //desplegable.addEventListener("animationend",()=>{
            //    desplegable.classList.remove("desDesplegarAnim")
            //})

            desDesplegar=false;
            break;
        default:
            break;
    }
}


toggleMenu.addEventListener("click",toggleMenuFunc)