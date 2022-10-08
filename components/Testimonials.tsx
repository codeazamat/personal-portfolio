import ShapeWaves from '/public/img/shape-waves.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

const Testimonials = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="container section__border">
        <div className="testimonial__container">
          <Swiper
            className="testimonial__swiper"
            navigation={true}
            modules={[Navigation]}
            grabCursor
          >
            <SwiperSlide>
              <div className="testimonial__content">
                <p className="testimonial__description">
                  “Working with Chris is to give a good impression, I carry out
                  my project at a good cost, with excellent quality and
                  attention. Great service and recommended.”
                </p>
                <div>
                  <h3 className="testimonial__name">Klay Harris</h3>
                  <span className="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial__content">
                <p className="testimonial__description">
                  “Working with Chris is to give a good impression, I carry out
                  my project at a good cost, with excellent quality and
                  attention. Great service and recommended.”
                </p>
                <div>
                  <h3 className="testimonial__name">Mary Lens</h3>
                  <span className="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial__content">
                <p className="testimonial__description">
                  “Working with Chris is to give a good impression, I carry out
                  my project at a good cost, with excellent quality and
                  attention. Great service and recommended.”
                </p>
                <div>
                  <h3 className="testimonial__name">Anna Chel</h3>
                  <span className="testimonial__subtitle">Client</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="testimonial__shape-waves">
        <Image src={ShapeWaves} width={200} height={140} alt={''} />
      </div>
    </section>
  )
}

export default Testimonials
