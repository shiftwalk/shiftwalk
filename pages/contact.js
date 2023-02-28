import Layout from '@/components/layout'
import Header from '@/components/header'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade, reveal } from '@/helpers/transitions'
import { NextSeo } from 'next-seo'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect } from 'react'
import Footer from '@/components/footer'
import Pill from '@/components/pill'
import { HeaderContext } from '@/context/header'
import Div100vh from 'react-div-100vh'
import { SplitText } from '@/components/splitText'

export default function Contact() {
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);

  useEffect(() => {
    setIntroContext(true)
    setHeaderContext(true)
  },[]);

  const childStaggerContainer = {
    enter: {
      transition: {
        staggerChildren: 0.015
      }
    }
  }

  return (
    <Layout>
      <NextSeo title="Contact" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Fixed Sidebar */}
            <div className="fixed md:top-0 left-0 bottom-0 w-full md:w-[25%] lg:w-[20%] md:h-screen col-span-3 col-start-8 md:border-r border-black flex flex-wrap items-end pt-[45px] md:pt-[53px] xl:pt-[57px] z-10 px-5 pb-[160px] md:pb-0 lg:pb-2">
              <div className="text-sm leading-snug w-[85%] mb-6 md:mb-12 content tracking-tight">
                <svg className="w-[80%] max-w-[90px] md:max-w-[130px] mb-8 hidden md:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 126 126"><circle cx="63" cy="63" r="62.5" stroke="#242B2D"/><path fill="#242B2D" d="M34.406 45.43c-7.178 0-11.883 3.945-11.883 9.696 0 7.082 5.323 8.65 11.74 10.267 5.181 1.283 7.653 2.044 7.653 5.466 0 3.184-2.472 5.133-6.702 5.133-4.706 0-7.368-2.329-7.368-7.177H22c0 7.748 4.99 11.883 13.166 11.883 7.605 0 12.644-4.088 12.644-10.362 0-7.13-5.324-8.793-11.693-10.362-5.419-1.33-7.748-2.281-7.748-5.37 0-2.758 2.282-4.516 5.942-4.516 4.373 0 6.797 2.186 6.797 6.464h5.75c0-7.272-4.23-11.122-12.452-11.122ZM92.087 46.143h-5.609l-2.804 13.023c-1.046 5.038-2.092 10.22-2.947 15.258h-.095a467.846 467.846 0 0 0-3.423-15.305l-3.137-12.976h-7.51l-3.137 12.976a468.106 468.106 0 0 0-3.422 15.305h-.095c-.855-5.039-1.901-10.22-2.994-15.258l-2.757-13.023h-5.609l7.462 33.842h7.653l3.375-14.07c1.188-4.943 2.281-9.886 3.232-14.877h.095c.95 4.991 2.044 9.934 3.232 14.878l3.375 14.069h7.652l7.463-33.842ZM97.236 65.268c-4.398 0-7.343 3.027-7.343 7.547s2.945 7.548 7.343 7.548c4.418 0 7.343-3.027 7.343-7.548 0-4.52-2.925-7.547-7.343-7.547Zm0 1.043c3.804 0 6.341 2.597 6.341 6.504 0 3.907-2.537 6.505-6.341 6.505-3.805 0-6.32-2.598-6.32-6.505 0-3.906 2.515-6.504 6.32-6.504Zm.04 1.657c-2.597 0-4.192 1.84-4.192 4.868 0 2.986 1.575 4.827 4.152 4.827 2.27 0 3.784-1.35 3.968-3.518h-1.76c-.142 1.227-.96 2.045-2.208 2.045-1.473 0-2.393-1.288-2.393-3.354 0-2.107.92-3.396 2.434-3.396 1.247 0 2.025.798 2.127 1.984h1.739c-.103-2.045-1.534-3.456-3.866-3.456Z"/></svg>

                {/* <p className="flex flex-wrap">
                  <SplitText
                    initial={{ y: '100%' }}
                    animate="enter"
                    exit="exit"
                    transition={{ delay: 0, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                    variants={{
                      enter: i => ({
                        y: 0,
                      }),
                      exit: i => ({
                        y: '100%',
                      })
                    }}
                  >
                    If you'd like to work with us on your next project, please feel free to drop us a line at the address below — we will typically respond within 48 hours. Since we're a small studio with limited availability, our usual lead time to start is 4-6 weeks
                  </SplitText>
                </p> */}

                {/* <svg className="w-8 mt-8 rotate-180 hidden md:block" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg> */}
              </div>
            </div>

            {/* Main Section */}
            <Div100vh className="w-full md:w-[75%] lg:w-[80%] pt-[55px] md:pt-[65px] xl:pt-[70px] h-screen flex flex-wrap fixed top-0 right-0 bottom-0">
              <div className="w-full px-5 pb-[45px] md:pb-[56px] xl:pb-[63px]">

                {/* Desktop H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.8vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.45vw] hidden xl:block">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform indent-[8vw]"><span className="block translate-y-[-0.45vw]">We're always interested to hear</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">about new projects, so please feel free</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">to reach out on the channels below</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">if you'd like to collaborate with us.</span></m.span>
                  </div>
                </m.h1>

                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.5vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.55vw] hidden md:block xl:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform indent-[8vw]"><span className="block translate-y-[-0.55vw]">We're always interested to</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.55vw]">hear about new projects, so</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.55vw]">please feel free to reach out on</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.55vw]">the channels below if you'd like</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.55vw]">to collaborate with us.</span></m.span>
                  </div>
                </m.h1>

                <m.h1 variants={childStaggerContainer} className="font-display text-[7.45vw] md:text-[4.8vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.8vw] block md:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform indent-[8vw]"><span className="block translate-y-[-0.8vw]">We're always</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">interested to hear about</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">new projects, so please</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">feel free to reach out on</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">the channels below if</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">you'd like to collaborate</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">with us.</span></m.span>
                  </div>
                </m.h1>
              </div>

              <div className="mb-[60px] md:mb-[63px] xl:mb-[70px] mt-auto w-full px-5">
                <div className="w-full">
                  <div className="w-full py-5">
                    <a href="mailto:hello@shiftwalk.studio" className="group block mb-3 md:mb-4">
                      <Pill label="Email Us" />
                    </a>
                    <a href="https://www.instagram.com/_shiftwalk.studio/" className="group block">
                      <Pill label="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </Div100vh>

            <div className="w-full fixed bottom-0 left-0 right-0 z-20">
              <Footer noRightPad noTop />
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}
