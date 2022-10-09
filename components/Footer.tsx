import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Azamat</h1>
        <span className="footer__subtitle">Frontend Developer</span>

        <ul className="footer__list">
          <li className="footer__item">
            <ScrollLink
              href="#hero"
              className="nav__link"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              hashSpy={true}
            >
              <a className="footer__link">Home</a>
            </ScrollLink>
          </li>

          <li className="footer__item">
            <ScrollLink
              href="#skills"
              className="nav__link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              hashSpy={true}
            >
              <a className="footer__link">Skills</a>
            </ScrollLink>
          </li>

          <li className="footer__item">
            <ScrollLink
              href="#projects"
              className="nav__link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              hashSpy={true}
            >
              <a className="footer__link">Projects</a>
            </ScrollLink>
          </li>
        </ul>

        <ul className="footer__socials">
          <li className="footer__socials-item">
            <Link href="https://www.linkedin.com/">
              <a className="footer__socials-link" target="_blank">
                <i className="ri-linkedin-box-line"></i>
              </a>
            </Link>
          </li>

          <li className="footer__socials-item">
            <Link href="https://www.github.com/codeazamat/">
              <a className="footer__socials-link" target="_blank">
                <i className="ri-github-line"></i>
              </a>
            </Link>
          </li>

          <li className="footer__socials-item">
            <Link href="https://www.behance.com/azamatuiux/">
              <a className="footer__socials-link" target="_blank">
                <i className="ri-behance-line"></i>
              </a>
            </Link>
          </li>
        </ul>

        <span className="footer__copy">
          &#169; Copyright AzamatCode. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
