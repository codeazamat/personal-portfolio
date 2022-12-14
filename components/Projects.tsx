import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import ProjectOne from '/public/img/project1.jpg'
import ProjectTwo from '/public/img/project2.jpg'
import ProjectThree from '/public/img/project3.jpg'
import ProjectFour from '/public/img/project4.jpg'

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="container section__border">
        <div className="projects__container">
          <Swiper
            className="projects__swiper"
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 25
              },
              768: {
                slidesPerView: 2,
                spaceBetween: -56
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: -56
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: -56
              }
            }}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="projects__content">
                <div className="projects__img">
                  <Image src={ProjectOne} width={640} height={427} alt="" />
                </div>
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h1 className="projects__title">Modern Website</h1>

                  <Link href="">
                    <a className="projects__link">
                      View Demo <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="projects__content">
                <div className="projects__img">
                  <Image src={ProjectTwo} width={640} height={427} alt="" />
                </div>
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h1 className="projects__title">ECommerce Store</h1>

                  <Link href="">
                    <a className="projects__link">
                      View Demo <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="projects__content">
                <div className="projects__img">
                  <Image src={ProjectThree} width={640} height={427} alt="" />
                </div>
                <div>
                  <span className="projects__subtitle">Design</span>
                  <h1 className="projects__title">Application Design</h1>

                  <Link href="">
                    <a className="projects__link">
                      View Demo <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="projects__content">
                <div className="projects__img">
                  <Image src={ProjectFour} width={640} height={427} alt="" />
                </div>
                <div>
                  <span className="projects__subtitle">Animation</span>
                  <h1 className="projects__title">Animation Prototypes</h1>

                  <Link href="">
                    <a className="projects__link">
                      View Demo <i className="ri-arrow-right-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Projects
