const xp = 1000;
const n = "jonas";

if (xp <= 1000) {
  console.log("nivel ferro");
} else if (xp <= 2000) {
  console.log("nivel bronze");
} else if (xp <= 5000) {
  console.log("nivel prata");
} else if (xp <= 7000) {
  console.log("nivel ouro");
} else if (xp <= 8000) {
  console.log("nivel platina");
} else if (xp <= 9000) {
  console.log("nivel ascendente");
} else if (xp <= 10000) {
  console.log("nivel imortal");
} else if (xp >= 10001) {
  console.log("nivel radiante");
}
console.log("O herói de nome " + n + " tem um total de  " + xp + " de xp");
