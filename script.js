function toggleMode() {
  const html = document.documentElement
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  html.classList.toggle("light")

  /* pegar a tag img */
  const img = document.querySelector("#profile img")

  /* substituir imagem  */
  if (html.classList.contains("light")) {
    /* se tiver light mode, adicionar a imagem light */
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    /* se não tiver light mode, adicionar a imagem dark */
    img.setAttribute("src", "./assets/avatar.png")
  }
}
