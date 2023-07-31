import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { cx } from '@/utils'

type MainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: MainProps) => {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const { scrollY } = window
    setScrolled(scrollY >= 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {props.meta}
      <header
        className={cx(
          'fixed flex flex-wrap w-full items-center text-center antialiased ease-in-out duration-300 z-10 p-5',
          scrolled &&
            'bg-white shadow-md border-b-2 border-dashed border-slate-700'
        )}
      >
        <Link href="/" className="mx-auto mb-5 border-none lg:mb-0 xl:ml-0">
          <img
            src={`${router.basePath}/assets/images/open-oracle-origami-logo.svg`}
            alt="Open Oracle Origami Logo"
          />
        </Link>
        <div className="w-full text-xs sm:text-lg lg:w-1/2 xl:text-right">
          <a
            href="https://docs.oracleorigami.com"
            target="_blank"
            className="mx-5 border-none text-gray-900 xl:mr-10"
          >
            Documentation
          </a>
          <a
            href="https://discord.gg/bTY9WkQv"
            target="_blank"
            className="mr-5 border-none text-gray-900 xl:mr-10"
          >
            Community
          </a>
          <Link href="/faq/" className="mr-5 border-none text-gray-900 xl:mr-0">
            FAQ
          </Link>
        </div>
      </header>
      {props.children}
    </>
  )
}

export default Main
