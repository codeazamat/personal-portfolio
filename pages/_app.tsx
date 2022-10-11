import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
