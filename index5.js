const cupones = [
    "Vale por un abrazo gigante 🤗",
    "Vale por una cena romántica 🍽️",
    "Vale por una tarde de películas juntos 🎬",
    "Vale por un masaje relajante 💆",
    "Vale por un día de aventuras 🌍",
    "Vale por un desayuno rico🍳",
    "hacer lo que tu quieras por un dia🥳",
    "bailar con tu musica favorita🥰"
];

function generarCupon() {
    let indice = Math.floor(Math.random() * cupones.length);
    document.getElementById("cuponTexto").innerText = cupones[indice];
}
