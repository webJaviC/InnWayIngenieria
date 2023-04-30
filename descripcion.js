
const dataJson = async () =>{
    try{
        const response = await fetch('./data.json');
        let data = await response.json();
        let cliente = await data.cliente;
        let servicio = await data.servicio;
        console.log(data.servicio);
        


    const id = new URLSearchParams(document.location.search).get("id")

    const detail = servicio.find(datas => datas._id.toString() === id)
    const boxDescripcion= document.getElementById('descripcion');
    boxDescripcion.innerHTML=`<div class="card w-75 mb-3">
                            <div class="card-body">
                            <h5 class="card-title">${detail.name}</h5>
                            <p class="card-text">${detail.description}</p>
                            </div>
                            </div>`
    }
    catch(error){
        console.log("there was an error" + error);
    }
}
dataJson()


