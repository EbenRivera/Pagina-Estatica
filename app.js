const btnID = document.getElementById("btn");
const formActiveID = document.getElementById("formActive");

btnID.addEventListener("click", ()=>{
    formActiveID.innerText="¡Dato enviado exitosamente!";
})