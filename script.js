function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const video = document.querySelector(".banner video")
  const source = document.querySelector(".banner video source")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    video.pause()
    source.setAttribute("src", "./assets/bg-desktop-light.mp4")
    video.load()
    video.play()
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    video.pause()
    source.setAttribute("src", "./assets/bg-desktop.mp4")
    video.load()
    video.play()
  }
}
