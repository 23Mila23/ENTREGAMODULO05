let puntuacion = 0;

const muestraPuntuacion = () => {
  const muestraP = document.getElementById("puntuacion") as HTMLElement;
  muestraP.innerHTML = puntuacion.toString();
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const dameCarta = () => {
  let numero = Math.ceil(Math.random() * 10);
  if (numero > 7) {
    numero = numero + 2;
  }
  muestraCarta(numero);

  if(numero >= 10){
    puntuacion += 0.5;
  } else{
    puntuacion += numero;
  }
  muestraPuntuacion()
};

const botonDameCarta = document.getElementById("dame-carta");
botonDameCarta?.addEventListener("click", dameCarta);

const muestraCarta = (carta: number): void => {
  const imagenCarta = document.getElementById("carta") as HTMLImageElement;

  switch (carta) {
    case 1:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;

    default:
     imagenCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
      break;
  }
};
