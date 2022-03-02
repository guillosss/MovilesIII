document.addEventListener("DOMContentLoaded", function(){
    //imagenes
    
    let imagenes = [
        { 
          img:"imagenes/1.jpg", 
          name:"uno",  
        },
        { 
          img:"imagenes/2.jpg", 
          name:"dos",  
        },
        { 
          img:"imagenes/3.jpg", 
          name:"tres",  
        },
        { 
          img:"imagenes/4.jpg", 
          name:"cuatro",  
        },
        { 
          img:"imagenes/5.jpg", 
          name:"cinco",  
        },
        { 
          img:"imagenes/6.jpg", 
          name:"seis",  
        },
        { 
          img:"imagenes/1.jpg", 
          name:"uno",  
        },
        { 
          img:"imagenes/2.jpg", 
          name:"dos",  
        },
        { 
          img:"imagenes/3.jpg", 
          name:"tres",  
        },
        { 
          img:"imagenes/4.jpg", 
          name:"cuatro",  
        },
        { 
          img:"imagenes/5.jpg", 
          name:"cinco",  
        },
        { 
          img:"imagenes/6.jpg", 
          name:"seis",  
        }
    ]
    //tablero HTML
    let tablero = document.querySelector(".tablero");
    let imgElegida =[];
    let imgElegidaID= [];
    let aciertos =document.querySelector(".conteo");
    let conteo = [];  

    //Funcion para colocar las imagenes en el HTML
    function crearTablero(){
        for(let i=0; i< imagenes.length; i++){
            var img = document.createElement("img");
            img.setAttribute("data-id",i);
            img.setAttribute("src","imagenes/incognito.jpg");
            img.setAttribute("width","200px");
            tablero.appendChild(img);
            img.addEventListener("click",descubrirImagen);


        
      }
    }

    //funcion para descubrir una imagen 
    function descubrirImagen(){
      let imgClick = this.getAttribute("data-id")
      imgElegida.push(imagenes[imgClick].name);
      imgElegidaID.push(imgClick)
      this.setAttribute("src",imagenes[imgClick].img);
      

      if(imgElegida.length === 2){
        setTimeout(compararimagenes,300);
      }
    }
   
    function compararimagenes(){
      console.log(imgElegida[0])
      let todaslasImg= document.querySelectorAll("img");
      
      let opcion1 = imgElegidaID[0];
      let opcion2 = imgElegidaID[1];

      if (imgElegida[0] === imgElegida[1] && imgElegidaID[0] != imgElegidaID[1]){
        alert("Haz acertado");
        todaslasImg[opcion1].setAttribute("src","imagenes/aciertos.jpg"); 
        todaslasImg[opcion2].setAttribute("src","imagenes/aciertos.jpg");
        todaslasImg[opcion1].removeEventListener("click",descubrirImagen)
        todaslasImg[opcion2].removeEventListener("click",descubrirImagen)
        conteo.push(imgElegida)

       
      }
      else{
        alert("Intentalo Nuevamente");
        todaslasImg[opcion1].setAttribute("src","imagenes/incognito.jpg");
        todaslasImg[opcion2].setAttribute("src","imagenes/incognito.jpg");       
       }

       imgElegida =[];
       imgElegidaID= [];
       aciertos.textContent = conteo.length;

       if (conteo.length===6){
        aciertos.textContent = "Ganaste :)";
        alert("Ganaste")
        location.reload()


       }
    }

    crearTablero();

})