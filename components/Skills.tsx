import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
import IconHTML from '/public/img/html-1.svg'
import IconCSS from '/public/img/css-3.svg'
import IconJS from '/public/img/logo-javascript.svg'
import IconReact from '/public/img/react-2.svg'
import IconRedux from '/public/img/redux.svg'
import IconTypeScript from '/public/img/typescript.svg'
import IconGit from '/public/img/git-icon.svg'
import IconDocker from '/public/img/docker.svg'
import IconFigma from '/public/img/figma-1.svg'
import IconSketch from '/public/img/sketch-2.svg'
import IconXD from '/public/img/adobe-xd-1.svg'
import IconInvision from '/public/img/invision.svg'
import IconPS from '/public/img/adobe-photoshop-2.svg'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favourite skills</span>

      <div className="skills__container container grid section__border">
        {/* SKILLS 1 */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line"></i> Frontend Developer
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconHTML}
                    width={2185}
                    height={2500}
                    alt={'HTML5'}
                  />
                </div>
              </div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconCSS}
                    width={2183}
                    height={2500}
                    alt={'CSS3'}
                  />
                </div>
              </div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconJS}
                    width={2500}
                    height={2500}
                    alt={'JavaScript ES6'}
                  />
                </div>
              </div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconTypeScript}
                    width={2194}
                    height={2500}
                    alt={'TypeScript'}
                  />
                </div>
              </div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconReact}
                    width={2194}
                    height={2500}
                    alt={'React Library'}
                  />
                </div>
              </div>
              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconRedux}
                    width={2194}
                    height={2500}
                    alt={'Redux State Management'}
                  />
                </div>
              </div>
              <h3 className="skills__name">Redux</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconGit}
                    width={2500}
                    height={2500}
                    alt={'Git Version Control'}
                  />
                </div>
              </div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconDocker}
                    width={2500}
                    height={2500}
                    alt={'Docker'}
                  />
                </div>
              </div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__subtitle">Basic</span>
            </div>
          </div>
        </div>

        {/* SKILLS 2 */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-pantone-line"></i> Web Designer
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconFigma}
                    width={1667}
                    height={2500}
                    alt={'Figma'}
                  />
                </div>
              </div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <div className="skills__blob-img">
                  <Image
                    src={IconPS}
                    width={2500}
                    height={2438}
                    alt={'Photoshop'}
                  />
                </div>
              </div>
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__subtitle">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
