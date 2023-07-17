
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
    boxDescripcion.innerHTML=`  <div id="carouselExampleInterval" class="carousel slide carruselDetail" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="${detail.image1}" class="d-block w-60 imageDetail"  alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="" class="d-block w-60 imageDetail" alt="...">
      </div>
      <div class="carousel-item">
        <img src="..." class="d-block w-60 imageDetail" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
                                <div class="card  mb-3 ">
                                <div class="card-body">
                                <h5 class="card-title titleDetail">${detail.name}</h5>
                                <p class="card-text textDetail">${detail.description}</p>
                                </div>
                                </div>
                                `
    }
    catch(error){
        console.log("there was an error" + error);
    }
}
dataJson()


  