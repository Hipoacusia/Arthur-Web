window.addEventListener('load', function(){
  
  let imagenes = [];
  
  imagenes[0] = 'Productos/1img.jpg';
  imagenes[1] = 'Productos/2img.jpg';
  imagenes[2] = 'Productos/3img.jpg';
  imagenes[3] = 'Productos/31img.jpg';
  imagenes[4] = 'Productos/33img.jpg';
  imagenes[5] = 'Productos/35img.jpg';
  imagenes[6] = 'Productos/36img.jpg';
  imagenes[7] = 'Productos/37img.jpg';
  imagenes[8] = 'Productos/38img.jpg';

  let indiceImagenes = 0;
  let tiempo = 2000;

  function CambiarImagenes(){
    document.slider.src = imagenes[indiceImagenes];
    if(indiceImagenes < 8){
      indiceImagenes++;
    }else{
      indiceImagenes = 0;
    }
  }

  setInterval(CambiarImagenes,tiempo);

});
