import { numeroCarta, reiniciarPuntuacion} from './modelo';

import { calcularPuntuacion,  gestionarCurioso } from './motor';

import {
  muestraPuntuacion,
  muestraCarta,
  mePlanto,
  controlarGameOver,
  botonDameCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonCurioso,
  ganarJuego,
  reiniciarCarta,
  reiniciarGameOver,
  hideNuevaPartidaButton,
  hideCuriosoButton
} from './ui';

document.addEventListener('DOMContentLoaded', muestraPuntuacion);

const objetoIniciarPartida = {
 puntuacion:  0,
 imagenSrc : "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
 botonDameCarta : HTMLButtonElement,
 botonPlantarse,
 botonCurioso,

}

const iniciarPartida = () => {
  reiniciarPuntuacion(objetoIniciarPartida.puntuacion);
  reiniciarCarta(objetoIniciarPartida.imagenSrc);
  muestraPuntuacion();
  reiniciarGameOver();
  hideCuriosoButton();
  hideNuevaPartidaButton();
  botonDameCarta.disabled = false;
  botonPlantarse.disabled = false;
  botonCurioso.disabled = false;
}

export const dameCarta = () => {
  calcularPuntuacion();

  muestraCarta(numeroCarta);

  muestraPuntuacion();

  ganarJuego();

  controlarGameOver();
};

botonDameCarta?.addEventListener('click', dameCarta);

botonPlantarse?.addEventListener('click', mePlanto);

botonNuevaPartida.addEventListener('click', iniciarPartida);

botonCurioso?.addEventListener('click', gestionarCurioso);
