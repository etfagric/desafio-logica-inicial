let nomeHeroi = "José"
let qntXp = 9000
let nivel

if (qntXp < 1000 ) {
    nivel = "Ferro"

} else if (qntXp >= 1001 && qntXp <= 2000) { 
    nivel = "Bronze"

} else if (qntXp >= 2001 && qntXp <= 5000) {
    nivel = "Prata"

} else if (qntXp >= 6001 && qntXp <= 7000) {
    nivel = "Ouro"

} else if (qntXp >= 7001 && qntXp <= 8000) {
    nivel = "Platina"

} else if (qntXp >= 8001 && qntXp <= 9000) {
    nivel = "Ascendente"

} else if (qntXp >= 9001 && qntXp <= 10000) {
    nivel = "Imortal"

} else if (qntXp >= 10001) {
    nivel = "Radiante"
}


    console.log ("O Herói de nome " + nomeHeroi + " " + "está no nível de " + nivel)
