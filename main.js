const clientes= datos.clientes

const dataJson = async () => {
  try{
    const response = await fetch('./data.json');
    let data = await response.json();
    let cliente = await data.cliente;
    let servicio = await data.servicio;
    const boxClientes= document.getElementById('boxClientes');
    const boxServicios= document.getElementById('boxServicios');
    crearCards(cliente, boxClientes);
    crearCards(servicio, boxServicios);
  
  }

  catch (error) {
    console.log("there was an error" + error);
}
}

dataJson()

const crearCards=(array, conteiner) =>{ 
    let cards=""
    if(array.length == 0){
        conteiner.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
        return
    }
  
      array.forEach((evento) => {
        cards += `<div class="card" style="width: 16rem;">
        <img src=${evento.image} class="card-img-top" alt="..." style="height: 11rem;"></img>
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          
          </div>
          
          <div>
          <a href="./details.html?id=${evento._id}" class="btn btn-primary ">Details</a>
          
        </div>
      </div>`
      })
  
        
    conteiner.innerHTML = cards
  }
//   const boxClientes= document.getElementById('boxClientes');
//   const boxServicios= document.getElementById('boxServicios');
//  crearCards(clientes)