$(document).ready(function () {
  $("#botaoNao").hover(function () {
    x = Math.floor(Math.random() * 80 + 1);
    y = Math.floor(Math.random() * 80 + 1);

    $(this).css("position", "fixed");
    $(this).css("right", `${x}%`);
    $(this).css("bottom", `${y}%`);
  });

  $("#botaoSim").click(function (e) {
    e.preventDefault();
    $("#pergunta").text("Eu também te amo seu fofo!");
    $(this).css("display", "none");
    $("#botaoNao").css("display", "none");

    $("#conteudo_principal > img").css("width", "70%");
    $("#conteudo_principal > img").attr("src", "./images/pokemon.jpg");

    const heart = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

    const stars = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    for (let i = 0; i < 10; i++) {
      confetti({
        ...stars,
        particleCount: 50,
        scalar: 1,
      });

      confetti({
        ...stars,
        particleCount: 25,
        scalar: 1,
      });

      confetti({
        ...stars,
        particleCount: 10,
        scalar: 1,
      });

      confetti({
        ...heart,
        particleCount: 50,
        scalar: 2,
      });

      confetti({
        ...heart,
        particleCount: 25,
        scalar: 3,
      });

      confetti({
        ...heart,
        particleCount: 10,
        scalar: 4,
      });
    }
  });
});
