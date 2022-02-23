document.addEventListener("DOMContentLoaded", function(){
    //imagenes
    
    let imagenes = [
        { 
          img:"imagenes/Cap.jpg", 
          name:"Cap",  
        },
        { 
          img:"imagenes/Groot.jpg", 
          name:"Groot",  
        },
        { 
          img:"imagenes/Iron.jpg", 
          name:"Iron",  
        },
        { 
          img:"imagenes/Loki.jpg", 
          name:"Loki",  
        },
        { 
          img:"imagenes/Nat.jpg", 
          name:"Nat",  
        },
        { 
          img:"imagenes/Thor.jpg", 
          name:"Thor",  
        },
        { 
          img:"imagenes/Cap.jpg", 
          name:"Cap",  
        },
        { 
          img:"imagenes/Groot.jpg", 
          name:"Groot",  
        },
        { 
          img:"imagenes/Iron.jpg", 
          name:"Iron",  
        },
        { 
          img:"imagenes/Loki.jpg", 
          name:"Loki",  
        },
        { 
          img:"imagenes/Nat.jpg", 
          name:"Nat",  
        },
        { 
          img:"imagenes/Thor.jpg", 
          name:"Thor",  
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
            img.setAttribute("src","imagenes/Pregunta.jpg");
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

      if (imgElegida[0] === imgElegida[1]){
        alert("Haz acertado");
        todaslasImg[opcion1].setAttribute("src","imagenes/aciertos.jpg"); 
        todaslasImg[opcion2].setAttribute("src","imagenes/aciertos.jpg");
       
      }
      else{
        alert("Intentalo Nuevamente");
        todaslasImg[opcion1].setAttribute("src","imagenes/pregunta.jpg");
        todaslasImg[opcion2].setAttribute("src","imagenes/pregunta.jpg");       
       }

       imgElegida =[];
       imgElegidaID= [];
       aciertos.textContent = conteo.length;
       if (conteo.length===6){
         

       }

    
      


    }

    crearTablero();

})