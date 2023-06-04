export const activeLink = () => {
  const navLink = document.querySelectorAll('.link')
  const currentPath = document.location.pathname + '/'
  navLink.forEach((link) => {
    if (link.attributes[1].value === currentPath) {
      link.classList.add('active')
    }
  })
}
