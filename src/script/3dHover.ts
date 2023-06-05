export const cardAnimation = () => {
  const cards = Array.from(document.getElementsByClassName('projects'))

  cards.forEach((el: any) => {
    const cardFront = el.children[0]

    el.addEventListener('mousemove', (e: any) => {
      const elRect = el.getBoundingClientRect()

      let x = e.clientX - elRect.x
      let y = e.clientY - elRect.y

      let midCardWidth = elRect.width / 2
      let midCardHeight = elRect.height / 2

      let angleY = -(x - midCardWidth) / 20
      let angleX = (midCardHeight - y) / 20

      cardFront.style.transform = `rotateY(${angleY}deg) rotateX(${angleX}deg) scale(1.05) `
      cardFront.style.transition = `transform 0.25s `
    })

    el.addEventListener('mouseleave', (e: any) => {
      cardFront.style.transform = `rotateY(0deg) rotateX(0deg)`
      cardFront.style.transition = `transform 0.25s `
    })
  })
}
