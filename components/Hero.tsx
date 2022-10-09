import Link from 'next/link'
import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import Profile from '/public/img/profile.png'
import ShapeWaves from '/public/img/shape-waves.svg'
import ShapeCircle from '/public/img/shape-circle.svg'

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="hero__container container grid section__border">
        <div className="hero__data grid">
          <h1 className="hero__title">
            Hi, I&apos;m Azamat <br />
            Frontend Developer <br />
            Based In Tashkent <br />
          </h1>

          <div className="hero__blob grid">
            <div className="hero__profile">
              <Image src={Profile} width={170} height={260} alt={'Profile'} />
            </div>

            <div className="hero__shape-waves">
              <Image src={ShapeWaves} width={200} height={140} alt={''} />
            </div>

            <div className="hero__shape-circle">
              <Image src={ShapeCircle} width={300} height={300} alt={''} />
            </div>
          </div>

          <ul className="hero__social-list">
            <li className="hero__social-item">
              <Link href="https://www.linkedin.com/">
                <a className="hero__social-link" target="_blank">
                  <i className="ri-linkedin-box-line"></i>
                </a>
              </Link>
            </li>

            <li className="hero__social-item">
              <Link href="https://github.com/codeazamat">
                <a className="hero__social-link" target="_blank">
                  <i className="ri-github-line"></i>
                </a>
              </Link>
            </li>

            <li className="hero__social-item">
              <Link href="https://www.behance.net/azamatuiux">
                <a className="hero__social-link" target="_blank">
                  <i className="ri-behance-line"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hero__info">
          <div>
            <h3 className="hero__info-title">Biography</h3>
            <p className="hero__info-description">
              Hi, I&apos;m Azamat, Frontend Developer. Passionate about
              designing beautiful web interfaces. Based in Tashkent.
            </p>
          </div>
          <div>
            <h3 className="hero__info-title">Contact</h3>
            <p className="hero__info-description">
              Almazar, Tashkent <br />
              codeazamat@gmail.com <br />
              +998 (95) 004-40-48 <br />
            </p>
          </div>
          <div>
            <h3 className="hero__info-title">Services</h3>
            <p className="hero__info-description">
              Website Design <br />
              UI/UX Design <br />
            </p>
          </div>
        </div>

        <div className="hero__info">
          <div>
            <h3 className="hero__info-title">Years of Experience</h3>
            <p className="hero__info-number">00+</p>
          </div>
          <div>
            <h3 className="hero__info-title">Completed Projects</h3>
            <p className="hero__info-number">00+</p>
          </div>
          <div>
            <h3 className="hero__info-title">Companies Worked</h3>
            <p className="hero__info-number">00+</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
