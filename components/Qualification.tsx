import Image from 'next/image'
import ShapeCircle from '/public/img/shape-circle.svg'

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Experience & education</span>

      <div className="qualification__container container grid section__border">
        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-pencil-ruler-2-line"></i> Education
          </h3>
          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">
                Master In Radio Communication
              </h3>
              <span className="qualification__country">Tashkent - Collage</span>
              <span className="qualification__year">2011 - 2014</span>
            </div>

            <div>
              <h3 className="qualification__name">UI/UX Design</h3>
              <span className="qualification__country">
                Institute - Tashkent
              </span>
              <span className="qualification__year">2021 - 2022</span>
            </div>

            <div>
              <h3 className="qualification__name">Computer Engineer</h3>
              <span className="qualification__country">
                Institute - Tashkent
              </span>
              <span className="qualification__year">2021 - 2022</span>
            </div>
          </div>
        </div>

        <div className="qualification__content">
          <h3 className="qualification__title">
            <i className="ri-building-line"></i> Work
          </h3>

          <div className="qualification__info">
            <div>
              <h3 className="qualification__name">Fontend Developer</h3>
              <span className="qualification__country">Adobe - Spain</span>
              <span className="qualification__year">2014 - 2019</span>
            </div>

            <div>
              <h3 className="qualification__name">Software Engineer</h3>
              <span className="qualification__country">Microsoft - Perú</span>
              <span className="qualification__year">2018 - 2020</span>
            </div>

            <div>
              <h3 className="qualification__name">Graphic Designer</h3>
              <span className="qualification__country">Figma - Perú</span>
              <span className="qualification__year">2020 - Present</span>
            </div>
          </div>
        </div>
      </div>

      <div className="qualification__img">
        <Image src={ShapeCircle} width={300} height={300} alt={''} />
      </div>
    </section>
  )
}

export default Qualification
