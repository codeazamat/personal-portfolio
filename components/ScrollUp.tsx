import Link from 'next/link'
import { useState, useEffect } from 'react'

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      <Link href="/">
        <a className={`scrollup ${isVisible ? 'show-scroll' : ''}`}>
          <i className="ri-arrow-up-line"></i>
        </a>
      </Link>
    </>
  )
}

export default ScrollUp
