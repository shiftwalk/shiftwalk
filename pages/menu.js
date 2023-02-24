import Layout from '@/components/layout'
import Header from '@/components/header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade, reveal } from '@/helpers/transitions'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import Link from 'next/link'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect } from 'react'
import Pill from '@/components/pill'
import Div100vh from 'react-div-100vh'
import { HeaderContext } from '@/context/header'

export default function Menu() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);

  useEffect(() => {
    setIntroContext(true)
    setHeaderContext(true)
  },[]);

  const container = {
    initial: {  },
    enter: {
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: {
    }
  }

  const item = {
    hidden: { 
      y: '100%',
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
      
    },
    enter: {
      y: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
    }
  }

  return (
    <Layout>
      <NextSeo title="Menu" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="h-screen"
        >
          <m.article variants={fade} className="h-screen">
            {/* Main Section */}
            <Div100vh className="flex flex-wrap h-screen items-center">
              
              <m.div variants={container}  initial="hidden" animate="enter" exit="exit" className="w-full px-5 mt-[-40vw] md:mt-0">
                <span className="font-display text-[38px] md:text-[55px] xl:text-[65px] leading-[1.15] block">
                  <Link href="/">
                    <a className="block pt-[6px] pb-[9px] border-t border-black">
                      <div className="relative overflow-hidden">
                        <m.span variants={item} className="block">
                          <span className="font-serif font-normal leading-none text-[12px] inline-block mr-[8px] translate-y-[-2px]">(&nbsp;&nbsp;A&nbsp;&nbsp;)</span>
                          Studio
                        </m.span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a className="block pt-[6px] pb-[9px] border-t border-black">
                      <div className="relative overflow-hidden">
                        <m.span variants={item} className="block">
                          <span className="font-serif font-normal leading-none text-[12px] inline-block mr-[8px] translate-y-[-2px]">(&nbsp;&nbsp;B&nbsp;&nbsp;)</span>
                          Projects
                        </m.span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/journal">
                    <a className="block pt-[6px] pb-[9px] border-t border-black">
                      <div className="relative overflow-hidden">
                        <m.span variants={item} className="block">
                          <span className="font-serif font-normal leading-none text-[12px] inline-block mr-[8px] translate-y-[-2px]">(&nbsp;&nbsp;C&nbsp;&nbsp;)</span>
                          Journal
                        </m.span>
                      </div>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="block pt-[6px] pb-[9px] border-t border-b border-black">
                      <div className="relative overflow-hidden">
                        <m.span variants={item} className="block">
                          <span className="font-serif font-normal leading-none text-[12px] inline-block mr-[8px] translate-y-[-2px]">(&nbsp;&nbsp;D&nbsp;&nbsp;)</span>
                          Contact
                        </m.span>
                      </div>
                    </a>
                  </Link>
                </span>
              </m.div>

              <div className="fixed bottom-0 left-0 right-0 w-full px-5">
                <div className="w-full h-[1px] bg-black skew-y-[-15deg] md:skew-y-[-10deg] mb-[13vw] md:mb-[10vw]"></div>

                <div className="w-full py-5">
                  <a href="mailto:hello@shiftwalk.studio" className="group block mb-2 md:mb-4">
                    <Pill label="Email Us" />
                  </a>
                  <a href="https://www.instagram.com/_shiftwalk.studio/" className="group block">
                    <Pill label="Instagram" />
                  </a>
                </div>
              </div>
            </Div100vh>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
