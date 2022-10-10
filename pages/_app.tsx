import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
