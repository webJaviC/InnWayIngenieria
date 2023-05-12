const clientes= datos.clientes

const dataJson = async () => {
  try{
    const response = await fetch('./data.json');
    let data = await response.json();
    let cliente = await data.cliente;
    let servicio = await data.servicio;
    console.log(data.servicio);
    const boxClientes= document.getElementById('boxClientes');
    const boxServicios= document.getElementById('boxServicios');
    crearCardsClientes(cliente, boxClientes);
    crearCardsServicios(servicio, boxServicios); 
     
  }

  catch (error) {
    console.log("there was an error" + error);
}
}

dataJson()

const crearCardsServicios=(array, conteiner) =>{ 
    let cards=""
    if(array.length == 0){
        conteiner.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
        return
    }
  
      array.forEach((evento) => {
        cards += `<div class="card" style="width: 16rem;">
        <a href="./descripcion.html?id=${evento._id}" class="btn btn-primary"><img src=${evento.image} class="card-img-top" alt="..." style="height: 11rem;width: 14rem;"></img></a>
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          </div>
          </div>`
      })
  
        
    conteiner.innerHTML = cards
  }

  const crearCardsClientes=(array, conteiner) =>{ 
    let cards=""
    if(array.length == 0){
        conteiner.innerHTML = "<h2 class='display-1 fw-bolder'>No hay coincidencias!</h2>"
        return
    }
  
      array.forEach((evento) => {
        cards += `<div class="card" style="width: 16rem;">
        <img src=${evento.image} class="card-img-top" alt="..." style="height: 11rem;width: 14rem;"></img>
        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          </div>
          </div>`
      })
  
        
    conteiner.innerHTML = cards
  }