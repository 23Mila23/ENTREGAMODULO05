let puntuacion = 0;
const puntuacionMaxima = 7.5;
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
  if (numero >= 10) {
    puntuacion += 0.5;
  } else {
    puntuacion += numero;
  }
  muestraPuntuacion();

  controlarGameOver();
};
const botonDameCarta = document.getElementById(
  "dame-carta"
) as HTMLButtonElement;
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
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;

    default:
      imagenCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }
};
const mePlanto = () => {
  let mensaje = "";
  if (puntuacion <= 4) {
    mensaje = "Has sido muy conservador";
  }
  if (puntuacion > 4) {
    mensaje = "Te ha entrado el canguelo eh";
  }
  if (puntuacion >= 6 || puntuacion >= 7) {
    mensaje = "Casi casi...";
  }
  if (puntuacion == 7.5) {
    mensaje = "¡ Lo has clavado! ¡Enhorabuena!";
  }
  const getMePlanto = document.getElementById("mensaje") as HTMLElement;
  getMePlanto.innerHTML = mensaje;
  botonDameCarta.disabled = true;
};
const botonPlantarse = document.getElementById(
  "plantarse"
) as HTMLButtonElement;
botonPlantarse?.addEventListener("click", mePlanto);

const nuevaPartida = () => {
  location.reload();
};
const botonNuevaPartida = document.getElementById(
  "nueva-partida"
) as HTMLButtonElement;
botonNuevaPartida.addEventListener("click", nuevaPartida);

const controlarGameOver = () => {
  const gameOver = "GAME OVER";
  if (puntuacion > puntuacionMaxima) {
    const getGameOver = document.getElementById("mensaje") as HTMLElement;
    getGameOver.innerHTML = gameOver;
    botonDameCarta.disabled = true;
    botonPlantarse.disabled = true;
  }
};
