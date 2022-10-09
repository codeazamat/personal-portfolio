import Link from 'next/link'
import { useForm } from 'react-hook-form'

type FormValues = {
  username: string
  email: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues:{
      username: '',
      email: '',
      message: ''
    }
  })

  const formSubmit = (data: FormValues) => {
    console.log(data)
    reset()
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid section__border">
        <div className="contact__content">
          <h3 className="contact__title">
            <i className="ri-chat-3-line"></i> Talk to me
          </h3>

          <div className="contact__info">
            <div className="contact__data">
              <span className="contact__data-title">Email</span>
              <span className="contact__data-info">codeazamat@gmail.com</span>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Telegram</span>
              <span className="contact__data-info">+998 (95) 004-40-48</span>

              <Link href={'https://t.me/azamatcode'}>
                <a className="contact__link" target="_blank">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </Link>
            </div>

            <div className="contact__data">
              <span className="contact__data-title">Instagram</span>
              <span className="contact__data-info">@azamatcode</span>

              <Link href={'https://www.instagram.com/azamatcode/'}>
                <a className="contact__link" target="_blank">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">
            <i className="ri-send-plane-line"></i> Write me your project
          </h3>

          <form className="contact__form" onSubmit={handleSubmit(formSubmit)}>
            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user-name">
                Names
              </label>
              <input
                {...register('username', { required: 'Username is required', minLength: 3, maxLength: 20 })}
                className="contact__form-input"
                id="username"
                type="text"
                placeholder="Write your names"
                name="username"
                autoComplete={'off'}
              />
              {errors.username && <span className="contact__form-error">{errors.username.message}</span>}
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag" htmlFor="user-email">
                Email
              </label>
              <input
                {...register('email', { required: 'Email is required' })}
                className="contact__form-input"
                id="email"
                type="text"
                placeholder="Write your email"
                name="email"
                autoComplete={'off'}
              />
              {errors.email && <span className="contact__form-error">{errors.email.message}</span>}
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag" htmlFor="user-project">
                Project
              </label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                className="contact__form-input"
                id="message"
                placeholder="Write your project"
                name="message"
              ></textarea>
              {errors.message && <span className="contact__form-error">{errors.message.message}</span>}
            </div>

            <button className="contact__button" type="submit">
              Submit <i className="ri-arrow-right-up-line"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
