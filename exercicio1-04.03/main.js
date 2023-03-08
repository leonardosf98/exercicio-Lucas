/*1. Elaborar um programa que leia 12 elementos numéricos  
inteiros em uma matriz do tipo vetor. Coloque-os em ordem  
decrescente e apresente os elementos ordenados*/

let matriz = [
  [0, 1, 2],
  [52, 35, 3],
  [12, 59, 75],
  [5, 29, 71],
];

let valores = [];
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 2; j++) {
    valores.push(matriz[i][j]);
  }
}
function sortfunction(a, b) {
  return a - b;
}
valores.sort(function (a, b) {
  return a < b;
});
