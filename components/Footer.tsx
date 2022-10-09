import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Azamat</h1>
        <span className="footer__subtitle">Frontend Developer</span>

        <ul className="footer__list">
          <li className="footer__item">
            <Link href="#home">
              <a className="footer__link">Home</a>
            </Link>
          </li>

          <li className="footer__item">
            <Link href="#skills">
              <a className="footer__link">Skills</a>
            </Link>
          </li>

          <li className="footer__item">
            <Link href="#projects">
              <a className="footer__link">Projects</a>
            </Link>
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
            <Link href="https://www.github.com/azamatcode/">
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
