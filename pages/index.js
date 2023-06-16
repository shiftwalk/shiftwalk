import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'
import { IntroContext } from '@/context/intro'
import { HeaderContext } from '@/context/header'
import { MouseParallax } from 'react-just-parallax'
import Clock from 'react-live-clock'
import Pill from '@/components/pill'
import Image from '@/components/image'
import BlockContent from '@sanity/block-content-to-react'
import { useRouter } from 'next/router'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    heroImage[] {
      asset-> {
        ...
      },
      videoOverride {
        asset-> {
          ...
        }
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    backgroundText,
    peopleText,
    expertise[],
    partners[],
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const shouldReduceMotion = useReducedMotion()
  const { data: { home } } = pageService.getPreviewHook(initialData)()
  const router = useRouter();
  const [current, setCurrent] = useState(null);
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);
  const [shouldTransition, setShouldTransition] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(null);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, shouldReduceMotion ? 0 : 2400);

    setTimeout(() => {
      setHeaderContext(true)
    }, shouldReduceMotion ? 0 : 1500);
    
    // if (router.isReady) {
    //   router.push(
    //     { undefined }, undefined, { shallow: true }
    //   );
    // }
  });

  const childStaggerContainer = {
    enter: {
      transition: {
        delayChildren: !introContext ? 1.55 : 0,
        staggerChildren: 0.015
      }
    }
  }

  return (
    <Layout>
      <NextSeo
        title="Brand, Direction & Development"
        openGraph={{
          title: 'ShiftWalk© Studio — Brand, Direction & Development'
        }}
      />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Fixed Sidebar */}
            {/* <div className="fixed top-0 right-0 bottom-0 w-[30%] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 px-5 hidden md:flex flex-wrap">
              <div
                initial={{ height: '0' }}
                animate={{ height: '100%' }}
                exit={{ height: '0' }}
                transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
                className="absolute top-0 left-0 bottom-0 w-[1px] bg-black"
              ></div>
              <div className="w-full mt-auto py-5">
                <m.div variants={childStaggerContainer} className="relative overflow-hidden mb-2">
                  <m.span variants={reveal} className="block lg:flex items-center text-lg md:text-xl xl:text-2xl leading-[1.2] md:leading-[1.2] xl:leading-[1.2] group">
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
            </div> */}

            {/* Main Section */}
            <div className="w-[100%] md:w-[70%] pt-[55px] md:pt-[78px] xl:pt-[80px] md:h-screen flex flex-wrap px-5 relative">
              <div className="w-full mb-8 md:mb-0">
                {/* Desktop H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.8vw] xl:text-[3.95vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0vw] hidden xl:block">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.45vw]">The collaborative work of</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">both <a href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full group-hover:w-0 h-[2px] translate-y-[-2px] bg-black"></div>Isaac Powell</a>, a designer, and</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]"><a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full group-hover:w-0 h-[2px] translate-y-[-2px] bg-black"></div>Sam Goddard</a>, a developer. Based</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">in the UK, but working worldwide.</span></m.span>
                  </div>
                </m.h1>

                {/* Tablet H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.6vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0vw] hidden md:block xl:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.45vw]">The collaborative work</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">of <a href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full group-hover:w-0 h-[2px] translate-y-[-2px] bg-black"></div>Isaac Powell</a>, a designer,</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">and <a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full group-hover:w-0 h-[2px] translate-y-[-2px] bg-black"></div>Sam Goddard</a>, a</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">developer. Based in the UK,</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">but working workdwide.</span></m.span>
                  </div>
                </m.h1>

                {/* Mobile H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.7vw] md:text-[4.7vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0] block md:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.45vw]">The collaborative</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">work of <a href="https://ijpowell.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full h-[2px] translate-y-[-2px] bg-black"></div>Isaac Powell</a>, a</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">designer, and <a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full h-[2px] translate-y-[-2px] bg-black"></div>Sam</a></span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]"><a href="https://samgoddard.co.uk" target="_blank" rel="noopener noreferrer" className="inline group relative"><div className="transition-all ease-in-out duration-[400ms] absolute bottom-0 left-0 right-0 w-full h-[2px] translate-y-[-2px] bg-black"></div>Goddard</a>, a developer.</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">Based in the UK, but</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">working worldwide.</span></m.span>
                  </div>
                </m.h1>
              </div>

              <div className="w-full mt-auto pb-5">
                <div className="mt-[10vw] mb-[13vw] md:mb-[17.5vw] lg:mb-[16vw] xl:mb-[14.5vw] 2xl:mb-[13.75vw] pb-4 md:pb-0 md:absolute bottom-0 left-0 right-0 md:mx-5">
                  <div className="w-full h-[1px] bg-black skew-y-[-15deg]"></div>
                </div>
                
                {/* <m.div variants={childStaggerContainer} className="md:absolute bottom-0 left-0 right-0 mb-5 md:mx-5 z-20">
                  <Link href="/projects">
                    <a className="group block">
                      <Pill label="Selected Projects" />
                    </a>
                  </Link>
                </m.div> */}

                <div className="md:pb-16 xl:pb-[7vw] relative mt-6 md:mt-0 h-[140vw] overflow-hidden md:hidden bg-black">
                  {/* <svg className="hidden md:block w-2 md:w-3 absolute bottom-0 left-0 mb-3 xl:mb-6" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg> */}
                  <div className="absolute w-full bottom-0 left-0 right-0 top-0 z-[20] aspect-[10/13]"></div>
                    
                    
                    <Link href="/projects">
                      <a className="w-full h-full relative overflow-hidden bg-black block group">
                      <div className="z-20 inset-0 absolute opacity-100">
                        <div className="absolute w-full h-auto z-[20] p-5 text-center justify-end items-end bottom-0 left-0">

                          <div className="block w-full relative z-">
                            <div
                              className={`px-6 py-2 uppercase text-xs leading-none border rounded-full relative overflow-hidden block w-full text-center tracking-[-0.01em] group-focus-visible:text-white border-white text-white`}
                            >Explore Projects</div>
                            </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2] opacity-90 h-32"></div>
                        
                        <video loop={true} autoPlay="autoplay" playsInline={true} muted className={`object-cover object-center w-full h-full absolute inset-0`}>
                          <source src={ '/images/home-reel2.mp4' } type="video/mp4" />

                          Sorry. Your browser does not support the video tag.
                        </video>
                      </a>
                    </Link>
                  </div>
              </div>
            </div>
              
            <div className="w-full mt-auto md:fixed bottom-0 left-0 right-0 md:w-[70%] bg-white z-20">
              <Footer noRightPad />
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}