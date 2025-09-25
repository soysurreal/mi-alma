document.addEventListener("DOMContentLoaded", () => {
  const cristo = document.querySelector(".cristo");   // la imagen
  const texto1 = document.getElementById("textoAlcaldes1"); 
  const texto2 = document.getElementById("textoAlcaldes2");

  let estado = 0; // 0 = nada, 1 = texto1, 2 = texto2

  cristo.addEventListener("click", () => {
    if (estado === 0) {
      texto1.classList.add("active");   // aparece el primero
      texto2.classList.remove("active");
      estado = 1;
    } else if (estado === 1) {
      texto1.classList.remove("active");
      texto2.classList.add("active");   // aparece el segundo
      estado = 2;
    } else {
      texto2.classList.remove("active");
      texto1.classList.add("active");   // vuelve al primero
      estado = 1;
    }
  });
});
