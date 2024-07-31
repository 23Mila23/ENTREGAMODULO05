export let puntuacion = 0;
export const puntuacionMaxima = 7.5;
export let numeroCarta = 0;
export const setPuntuacion = (nuevaPuntuacion : number) =>
  (puntuacion += nuevaPuntuacion);
export const setNumeroCarta = (nuevaCarta : number) => (numeroCarta = nuevaCarta);
export const reiniciarPuntuacion = (nuevaPuntuacion : number) =>
  (puntuacion = nuevaPuntuacion);
