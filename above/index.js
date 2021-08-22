async function renderData() {
    let parrafo= document.getElementById("parrafo");
    let res = await fetch("http://localhost:3000/mispublicaciones");
    let resultaData = await res.json();
    parrafo.append(resultaData[0].texto);

    
}

renderData();

const btnCrear = document.getElementById('btnCrear');
const modalIngreso = new bootstrap.Modal(document.getElementById('modalIngreso'))// Lo jala por id
let opcion = ''

btnCrear.addEventListener('click',()=>{

    modalIngreso.show() // abre el boton
    opcion ='crear'
})