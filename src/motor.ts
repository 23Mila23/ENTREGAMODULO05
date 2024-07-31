import { setPuntuacion, setNumeroCarta } from './modelo';

import { dameCarta } from './main';

import { botonCurioso } from './ui';

export const calcularPuntuacion = () => {
  let numero = Math.ceil(Math.random() * 10);
  if (numero > 7) {
    numero = numero + 2;
  }
  if (numero >= 10) {
    setPuntuacion(0.5);
  } else {
    setPuntuacion(numero);
  }
  setNumeroCarta(numero);
};

export const gestionarCurioso = () => {
  dameCarta();
  botonCurioso.disabled = true;
};
