import Link from 'next/link'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link as ScrollLink } from 'react-scroll'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { toggleDarkMode } from '../features/darkMode/darkModeSlice'
import { useEffect } from 'react'

const navItems = [
  { id: 1, name: 'Home', href: 'hero', icon: 'ri-home-4-line' },
  { id: 2, name: 'Skills', href: 'skills', icon: 'ri-trophy-line' },
  {
    id: 3,
    name: 'Qualification',
    href: 'qualification',
    icon: 'ri-book-open-line'
  },
  { id: 4, name: 'Services', href: 'services', icon: 'ri-briefcase-line' },
  { id: 5, name: 'Projects', href: 'projects', icon: 'ri-image-line' },
  { id: 6, name: 'Contact', href: 'contact', icon: 'ri-chat-3-line' }
]

const Header = () => {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode)
  const dispatch = useAppDispatch()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleMobileOpen = () => {
    setMobileOpen(true)
    console.log(mobileOpen)
  }

  const handleMobileClose = () => {
    setMobileOpen(false)
    console.log(mobileOpen)
  }

  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const activeMode = async () => {
    dispatch(toggleDarkMode())
    if (isDarkMode === true) {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      await localStorage.setItem('theme', 'light-mode')
    }
    if (isDarkMode === false) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      await localStorage.setItem('theme', 'dark-mode')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light-mode') {
      document.body.classList.add('light')
    } else if (localStorage.getItem('theme') === 'dark-mode') {
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link href="/">
          <a className="nav__logo">Azamat</a>
        </Link>

        <div
          className={`nav__menu ${mobileOpen ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li className="nav__item" key={item.id}>
                <ScrollLink
                  href={`#${item.href}`}
                  className="nav__link"
                  activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  onClick={handleMobileToggle}
                >
                  <i className={item.icon}></i> {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={handleMobileClose}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          <i className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}  change-theme`} onClick={activeMode}></i>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={handleMobileOpen}
          >
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
