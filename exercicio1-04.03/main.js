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
for (let R = 0; R <= 4; R++) {
  for (let C = 0; C <= 3; C++) {
    valores = +matriz[R][C];
  }
}

console.log(valores.sort());
