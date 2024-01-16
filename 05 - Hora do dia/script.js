
function carregou (){

    let data = new Date();

    let hora = data.getHours();

    let mostrahora = window.document.getElementById("mostrahora");
    let photo = window.document.getElementById("photo");

    if ( hora >= 6 && hora < 12){
        
        mostrahora.innerHTML = `Agora são ${hora} horas `
        photo.src = "./images/fotomanha.png"

        window.document.body.style.backgroundColor = "rgba(154, 239, 242, 0.733)";

    } else if ( hora >= 12 && hora < 19 ){

        mostrahora.innerHTML = `Agora são ${hora} horas `
        photo.src = "./images/fototarde.png"

        window.document.body.style.backgroundColor = "rgba(255, 115, 0, 0.733)";
    
    } else {

        mostrahora.innerHTML = `Agora são ${hora} horas `
        photo.src = "./images/fotonoite.png"

        window.document.body.style.backgroundColor = "rgba(5, 5, 5, 0.875)";
    }

}