async function renderData() {
    let parrafo= document.getElementById("parrafo");
    let res = await fetch("http://localhost:3000/mispublicaciones");
    let resultaData = await res.json();
    parrafo.append(resultaData[0].texto);

    
    
    
}
async function renderData2() {
    let res = await fetch("http://localhost:3000/mishabilidades");
    let resultaData = await res.json();
    let habilidad=document.getElementsByClassName("poll-desc")
    let porcentaje=document.getElementsByClassName("percentage")
    console.log(resultaData[0].habilidad);
    for (let index = 0; index < habilidad.length; index++) {
        habilidad[index].append(resultaData[index].habilidad)
    }
    for (let i = 0; i < porcentaje.length; i++) {
        porcentaje[i].append(resultaData[i].porcentaje +"%")
    }
    let width=document.getElementsByClassName("skills")
    console.log(width.styles);


    
}






renderData();
renderData2();

const btnCrear = document.getElementById('btnCrear');
const modalIngreso = new bootstrap.Modal(document.getElementById('modalIngreso'))// Lo jala por id
let opcion = ''

btnCrear.addEventListener('click',()=>{

    modalIngreso.show() // abre el boton
    opcion ='crear'
})