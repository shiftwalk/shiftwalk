import '@/styles/main.css'
import { AnimatePresence, domAnimation, LazyMotion, m, MotionConfig, useReducedMotion } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { reveal } from '@/helpers/transitions'
import SEO from '@/helpers/seo.config';
import { IntroContext } from '@/context/intro'
import { HeaderContext } from '@/context/header'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'
import { MouseParallax } from 'react-just-parallax'
import Clock from 'react-live-clock'
import Pill from '@/components/pill'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()
  const [headerContext, setHeaderContext] = useState(false);
  const [introContext, setIntroContext] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }

  const introEnd = {
    visible: { opacity: shouldReduceMotion ? 0 : 1 },
    hidden: { opacity: 0 }
  }
  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden' }
  }
  const introLogoReveal = {
    visible: { y: shouldReduceMotion ? '0%' : '100%' },
    hidden: { y: '0%' }
  }

  const draw = {
    hidden: { pathLength: shouldReduceMotion ? 1 : 0 },
    visible: { pathLength: 1 }
  };

  const childStaggerContainer = {
    enter: {
      transition: {
        delayChildren: !introContext ? 1.55 : 0,
        staggerChildren: 0.015
      }
    }
  }

  return (
    <>
      <DefaultSeo {...SEO} />

      <HeaderContext.Provider value={[headerContext, setHeaderContext]}>
        <IntroContext.Provider value={[introContext, setIntroContext]}>
          <LazyMotion features={domAnimation}>
            { !introContext && router.asPath == '/' && (
              <Div100vh className={`fixed inset-0 z-[1000] flex flex-wrap items-end ${ introContext ? 'cursor-wait' : 'cursor-default' }`}>
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 2, duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
                  className="w-full h-full cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                    transition={{ delay: 1.5, duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
                    className="bg-[#ABAEA8] absolute inset-0 z-[1000] w-full h-full cursor-wait"
                  >
                  <div className="grain absolute inset-0"></div>
                    <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.1} strength={0.01} zIndex={20}>
                      <div className="flex flex-wrap items-center justify-center w-full h-full">
                        <span className="w-[90px] lg:w-[120px] h-[90px] lg:h-[120px] bg-transparent flex items-center justify-center rounded-full mt-[-1px] mr-2 relative">
                          <m.svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                            initial="hidden"
                            animate="visible"
                          >
                            <m.circle
                              cx="50"
                              cy="50"
                              r="48"
                              className="stroke-black"
                              variants={draw}
                              transition={{ delay: 0.33, duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
                            />
                          </m.svg>

                          <div className="relative overflow-hidden w-[70%]">
                            <m.svg
                              initial="visible"
                              animate="hidden"
                              variants={introLogoReveal}
                              transition={{ delay: 0, duration: 0.77, ease: [0.83, 0, 0.17, 1] }}
                              className="w-full fill-current translate-y-full"
                              viewBox="0 0 31 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5.28802 0.222656C2.72472 0.222656 1.04415 1.63162 1.04415 3.68565C1.04415 6.21499 2.9454 6.77518 5.23709 7.35235C7.08742 7.81068 7.97014 8.08229 7.97014 9.30452C7.97014 10.4419 7.08741 11.1379 5.5766 11.1379C3.89603 11.1379 2.9454 10.3061 2.9454 8.57458H0.857422C0.857422 11.3416 2.63985 12.8184 5.55962 12.8184C8.2757 12.8184 10.0751 11.3586 10.0751 9.11779C10.0751 6.57148 8.17384 5.97734 5.89913 5.41715C3.96393 4.94183 3.13213 4.60232 3.13213 3.49892C3.13213 2.51434 3.94696 1.88625 5.25407 1.88625C6.81581 1.88625 7.68156 2.66712 7.68156 4.19491H9.73559C9.73559 1.59767 8.22477 0.222656 5.28802 0.222656Z" />
                              <path d="M25.8884 0.477289H23.8853L22.8837 5.12856C22.5103 6.92796 22.1368 8.77829 21.8313 10.5777H21.7973C21.4239 8.77829 21.0164 6.92796 20.5751 5.11159L19.4547 0.477289H16.7726L15.6522 5.11159C15.2108 6.92796 14.8034 8.77829 14.43 10.5777H14.396C14.0905 8.77829 13.717 6.92796 13.3266 5.12856L12.342 0.477289H10.3389L13.004 12.5638H15.7371L16.9423 7.53908C17.3667 5.77363 17.7572 4.00818 18.0967 2.22576H18.1306C18.4701 4.00818 18.8606 5.77363 19.2849 7.53908L20.4902 12.5638H23.2233L25.8884 0.477289Z" />
                              <path d="M27.728 7.30859C26.1574 7.30859 25.1055 8.38977 25.1055 10.0042C25.1055 11.6187 26.1574 12.6998 27.728 12.6998C29.306 12.6998 30.3506 11.6187 30.3506 10.0042C30.3506 8.38977 29.306 7.30859 27.728 7.30859ZM27.728 7.68116C29.0868 7.68116 29.9927 8.60892 29.9927 10.0042C29.9927 11.3995 29.0868 12.3273 27.728 12.3273C26.3693 12.3273 25.4707 11.3995 25.4707 10.0042C25.4707 8.60892 26.3693 7.68116 27.728 7.68116ZM27.7427 8.27288C26.8149 8.27288 26.2451 8.93035 26.2451 10.0115C26.2451 11.0781 26.8076 11.7356 27.728 11.7356C28.5389 11.7356 29.0795 11.2534 29.1453 10.4791H28.517C28.4659 10.9174 28.1737 11.2096 27.728 11.2096C27.2021 11.2096 26.8733 10.7494 26.8733 10.0115C26.8733 9.25909 27.2021 8.79886 27.7427 8.79886C28.1883 8.79886 28.4659 9.08376 28.5024 9.50747H29.1233C29.0868 8.77694 28.5755 8.27288 27.7427 8.27288Z" />
                            </m.svg>
                          </div>
                        </span>
                      </div>
                    </MouseParallax>
                  </m.div>
                </m.div>
              </Div100vh>
            )}
            
            <AnimatePresence>
            {(router.asPath == '/' || router.asPath == '/info') && (
              <m.div
                className="fixed top-0 right-0 bottom-0 w-[30%] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 px-5 hidden md:flex flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: !introContext ? 0 : 0.5, duration: 0.5, ease: [0.65, 0, 0.35, 1] } }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] } }}
              >
                <div
                  initial={{ height: '0' }}
                  animate={{ height: '100%' }}
                  exit={{ height: '0' }}
                  className="absolute top-0 left-0 bottom-0 w-[1px] bg-black"
                ></div>
                <div className="w-full mt-auto py-5">
                  <m.div variants={childStaggerContainer} className="relative overflow-hidden mb-2">
                    <m.span
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { delay: !introContext ? 0 : 0.5, duration: 0.5, ease: [0.65, 0, 0.35, 1] }}}
                      exit={{ y: '100%', transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }}}
                      className="block lg:flex items-center text-lg md:text-xl xl:text-2xl leading-[1.2] md:leading-[1.2] xl:leading-[1.2] group">
                      <svg className="w-[28px] mb-1 lg:mb-[2px] lg:mr-2 block" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.72 14.428c2.273-1.495 3.5-3.436 3.5-5.428s-1.227-3.933-3.5-5.428c-2.263-1.49-5.456-2.447-9.04-2.447-3.584 0-6.777.958-9.04 2.447C2.366 5.067 1.14 7.008 1.14 9s1.227 3.933 3.5 5.428c2.263 1.49 5.456 2.447 9.04 2.447 3.584 0 6.777-.958 9.04-2.447ZM13.68 18c7.555 0 13.68-4.03 13.68-9s-6.125-9-13.68-9S0 4.03 0 9s6.125 9 13.68 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M13.68 16.875c3.161 0 6.093-3.296 6.093-7.875 0-4.579-2.932-7.875-6.092-7.875-3.161 0-6.093 3.296-6.093 7.875 0 4.579 2.932 7.875 6.093 7.875Zm0 1.125c3.977 0 7.2-4.03 7.2-9s-3.223-9-7.2-9c-3.976 0-7.2 4.03-7.2 9s3.224 9 7.2 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M26.64 9.362H.72v-1.44h25.92v1.44Z" fill="#242B2D"/><path fillRule="evenodd" clipRule="evenodd" d="M12.96 17.999V.719h1.44v17.28h-1.44Z" fill="#242B2D"/></svg>

                      
                      <span className="block w-full relative overflow-hidden mb-[3px]">
                        <span className="block motion-safe:transition-translate motion-safe:ease-in-out motion-safe:duration-[350ms] translate-y-0 group-hover:translate-y-[-100%] w-full">
                          <span className="block tracking-normal"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} /> GMT</span>
                        </span>
                        <span className="block motion-safe:transition-translate motion-safe:ease-in-out motion-safe:duration-[350ms] translate-y-full group-hover:translate-y-0 absolute top-0 left-0 right-0">Nottingham<span className="hidden md:inline-block">&nbsp;— Worldwide</span></span>
                      </span>
                    </m.span>
                    </m.div>

                    <Link href="/projects">
                      <a className="w-full h-[41vw] max-h-[65vh] relative overflow-hidden bg-black block group" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                        <div className="grain--home absolute w-full bottom-0 left-0 right-0 top-0 z-[20]"></div>
                        <div className="z-20 inset-0 absolute opacity-0 group-hover:opacity-100">
                          <div className="absolute w-full h-auto z-[20] p-5 text-center justify-end items-end bottom-0 left-0">

                            <div className="block w-full">
                              <Pill label="Explore Projects" mouseOverride={true} shouldTransitionOverride={shouldTransition} parentHover={true} white />
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2] opacity-0 group-hover:opacity-90 h-32"></div>

                        <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0`}>
                          <source src={ '/images/home-reel2.mp4' } type="video/mp4" />

                          Sorry. Your browser does not support the video tag.
                        </video>
                      </a>
                    </Link>
                </div>
              </m.div>
            )}
            </AnimatePresence>
          </LazyMotion>
          <MotionConfig reducedMotion="user">
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </MotionConfig>
        </IntroContext.Provider>
      </HeaderContext.Provider>
    </>
  )
}