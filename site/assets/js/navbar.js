// Mobile menu is controlled by a BEM modifier and accessible button state.
export default {
  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.querySelector('.site-nav__toggle')
      const menu = document.querySelector('.site-nav__menu')
      if (!toggle || !menu) return

      const setOpen = (open) => {
        menu.classList.toggle('site-nav__menu--open', open)
        toggle.setAttribute('aria-expanded', String(open))
        toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く')
      }

      toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true')
      })
      menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setOpen(false))
      })
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setOpen(false)
      })
    })
  }
}
