import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'
import { IntroContext } from '@/context/intro'
import { HeaderContext } from '@/context/header'
import { MouseParallax } from 'react-just-parallax'
import Clock from 'react-live-clock'
import Pill from '@/components/pill'
import Image from '@/components/image'
import BlockContent from '@sanity/block-content-to-react'

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
  const { data: { home } } = pageService.getPreviewHook(initialData)()
  const [current, setCurrent] = useState(null);
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 2400);

    setTimeout(() => {
      setHeaderContext(true)
    }, 1500);
    
  },[]);

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
      <NextSeo title="Brand, Direction & Development" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[30%] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 px-5 hidden md:flex flex-wrap">
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
                      <span className="block transition-translate ease-in-out duration-[350ms] translate-y-0 group-hover:translate-y-[-100%] w-full">
                        <span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} /> GMT</span>
                      </span>
                      <span className="block transition-translate ease-in-out duration-[350ms] translate-y-full group-hover:translate-y-0 absolute top-0 left-0 right-0">Nottingham<span className="hidden md:inline-block">&nbsp;— Worldwide</span></span>
                    </span>
                  </m.span>
                  </m.div>

                  <div className="w-full h-[42vw] max-h-[65vh] relative overflow-hidden bg-black">
                    <div className="grain--home absolute w-full bottom-0 left-0 right-0 top-0 z-[20]"></div>
                    <div className="mix-blend-exclusion z-20 inset-0 absolute">
                      <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.1} strength={0.004} zIndex={20}>
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-[20]">
                          <svg className="w-[32%] mb-8 hidden md:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 126 126"><circle cx="63" cy="63" r="62.5" stroke="#FFF"/><path fill="#FFF" d="M34.406 45.43c-7.178 0-11.883 3.945-11.883 9.696 0 7.082 5.323 8.65 11.74 10.267 5.181 1.283 7.653 2.044 7.653 5.466 0 3.184-2.472 5.133-6.702 5.133-4.706 0-7.368-2.329-7.368-7.177H22c0 7.748 4.99 11.883 13.166 11.883 7.605 0 12.644-4.088 12.644-10.362 0-7.13-5.324-8.793-11.693-10.362-5.419-1.33-7.748-2.281-7.748-5.37 0-2.758 2.282-4.516 5.942-4.516 4.373 0 6.797 2.186 6.797 6.464h5.75c0-7.272-4.23-11.122-12.452-11.122ZM92.087 46.143h-5.609l-2.804 13.023c-1.046 5.038-2.092 10.22-2.947 15.258h-.095a467.846 467.846 0 0 0-3.423-15.305l-3.137-12.976h-7.51l-3.137 12.976a468.106 468.106 0 0 0-3.422 15.305h-.095c-.855-5.039-1.901-10.22-2.994-15.258l-2.757-13.023h-5.609l7.462 33.842h7.653l3.375-14.07c1.188-4.943 2.281-9.886 3.232-14.877h.095c.95 4.991 2.044 9.934 3.232 14.878l3.375 14.069h7.652l7.463-33.842ZM97.236 65.268c-4.398 0-7.343 3.027-7.343 7.547s2.945 7.548 7.343 7.548c4.418 0 7.343-3.027 7.343-7.548 0-4.52-2.925-7.547-7.343-7.547Zm0 1.043c3.804 0 6.341 2.597 6.341 6.504 0 3.907-2.537 6.505-6.341 6.505-3.805 0-6.32-2.598-6.32-6.505 0-3.906 2.515-6.504 6.32-6.504Zm.04 1.657c-2.597 0-4.192 1.84-4.192 4.868 0 2.986 1.575 4.827 4.152 4.827 2.27 0 3.784-1.35 3.968-3.518h-1.76c-.142 1.227-.96 2.045-2.208 2.045-1.473 0-2.393-1.288-2.393-3.354 0-2.107.92-3.396 2.434-3.396 1.247 0 2.025.798 2.127 1.984h1.739c-.103-2.045-1.534-3.456-3.866-3.456Z"/></svg>
                        </div>
                      </MouseParallax>
                    </div>
                    
                    <MouseParallax enableOnTouchDevice={false} lerpEase={0.1} strength={-0.004}>
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0 scale-[1.025] opacity-[0.9]"
                        introDelay={!introContext}
                        deepGrain
                        quality="90"
                      />
                    </MouseParallax>
                    
                    {/* <MouseParallax enableOnTouchDevice={false} lerpEase={0.1} strength={-0.004} isAbsolutelyPositioned zIndex={10}>
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0 scale-[0.8] -rotate-3"
                        introDelay={!introContext}
                        deepGrain
                      />
                    </MouseParallax>
                    <MouseParallax enableOnTouchDevice={false} lerpEase={0.1} strength={0.004} isAbsolutelyPositioned zIndex={10}>
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0 scale-[0.6] rotate-3 "
                        introDelay={!introContext}
                        deepGrain
                      />
                    </MouseParallax> */}
                  </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="w-[100%] md:w-[70%] pt-[63px] md:pt-[78px] xl:pt-[80px] md:h-screen flex flex-wrap px-5 relative">
              <div className="w-full mb-8 md:mb-0">
                {/* Desktop H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.8vw] xl:text-[3.95vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.45vw] hidden xl:block">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.45vw]">A design-led studio building</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.45vw]">thoughtful brands + websites for</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.45vw]">our partners around the world. We</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.45vw]">feel at home creating work in the</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.45vw]"> architectural, sustainability, and</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.45vw]">creative arts spaces.</span></m.span>
                  </div>
                </m.h1>

                {/* Tablet H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.6vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.55vw] hidden md:block xl:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.55vw]">A design-led studio</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">building thoughtful brands +</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">websites for our partners</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">around the world. We feel at</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">home creating work in the</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">architectural, sustainability,</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.55vw]">and creative arts spaces.</span></m.span>
                  </div>
                </m.h1>

                {/* Mobile H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.7vw] md:text-[4.7vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] mt-[0.8vw] block md:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block indent-[8vw]"><span className="block translate-y-[-0.8vw]">A design-led studio</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">building thoughtful</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">brands + websites for</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">our partners around the</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">world. We feel at home</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">creating work in the</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">architectural,</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">sustainability, and</span></m.span>
                  </div>
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block"><span className="block translate-y-[-0.8vw]">creative arts spaces.</span></m.span>
                  </div>
                </m.h1>

              </div>

              <div className="w-full mt-auto pb-5">
                <div className="mt-[10vw] mb-[13vw] md:mb-[17.5vw] lg:mb-[16vw] xl:mb-[14.5vw] 2xl:mb-[13.75vw] pb-4 md:pb-0 md:absolute bottom-0 left-0 right-0 md:mx-5">
                  <div className="w-full h-[1px] bg-black skew-y-[-15deg]"></div>
                </div>
                
                <m.div variants={childStaggerContainer} className="md:absolute bottom-0 left-0 right-0 mb-5 md:mx-5 z-20">
                  <Link href="/projects">
                    <a className="group block">
                      <Pill label="Selected Projects" />
                    </a>
                  </Link>
                </m.div>

                <div className="pb-3 md:pb-16 xl:pb-[7vw] relative mt-6 md:mt-0 h-[125vw] overflow-hidden md:hidden">
                  {/* <svg className="hidden md:block w-2 md:w-3 absolute bottom-0 left-0 mb-3 xl:mb-6" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg> */}
                  <div className="absolute w-full bottom-0 left-0 right-0 top-0 z-[20] aspect-[10/13]"></div>
                    <div className="mix-blend-exclusion z-20 inset-0 absolute">
                      <MouseParallax enableOnTouchDevice={false} isAbsolutelyPositioned lerpEase={0.1} strength={0.004} zIndex={20}>
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-[20]">
                          <svg className="w-[32%] mb-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 126 126"><circle cx="63" cy="63" r="62.5" stroke="#FFF"/><path fill="#FFF" d="M34.406 45.43c-7.178 0-11.883 3.945-11.883 9.696 0 7.082 5.323 8.65 11.74 10.267 5.181 1.283 7.653 2.044 7.653 5.466 0 3.184-2.472 5.133-6.702 5.133-4.706 0-7.368-2.329-7.368-7.177H22c0 7.748 4.99 11.883 13.166 11.883 7.605 0 12.644-4.088 12.644-10.362 0-7.13-5.324-8.793-11.693-10.362-5.419-1.33-7.748-2.281-7.748-5.37 0-2.758 2.282-4.516 5.942-4.516 4.373 0 6.797 2.186 6.797 6.464h5.75c0-7.272-4.23-11.122-12.452-11.122ZM92.087 46.143h-5.609l-2.804 13.023c-1.046 5.038-2.092 10.22-2.947 15.258h-.095a467.846 467.846 0 0 0-3.423-15.305l-3.137-12.976h-7.51l-3.137 12.976a468.106 468.106 0 0 0-3.422 15.305h-.095c-.855-5.039-1.901-10.22-2.994-15.258l-2.757-13.023h-5.609l7.462 33.842h7.653l3.375-14.07c1.188-4.943 2.281-9.886 3.232-14.877h.095c.95 4.991 2.044 9.934 3.232 14.878l3.375 14.069h7.652l7.463-33.842ZM97.236 65.268c-4.398 0-7.343 3.027-7.343 7.547s2.945 7.548 7.343 7.548c4.418 0 7.343-3.027 7.343-7.548 0-4.52-2.925-7.547-7.343-7.547Zm0 1.043c3.804 0 6.341 2.597 6.341 6.504 0 3.907-2.537 6.505-6.341 6.505-3.805 0-6.32-2.598-6.32-6.505 0-3.906 2.515-6.504 6.32-6.504Zm.04 1.657c-2.597 0-4.192 1.84-4.192 4.868 0 2.986 1.575 4.827 4.152 4.827 2.27 0 3.784-1.35 3.968-3.518h-1.76c-.142 1.227-.96 2.045-2.208 2.045-1.473 0-2.393-1.288-2.393-3.354 0-2.107.92-3.396 2.434-3.396 1.247 0 2.025.798 2.127 1.984h1.739c-.103-2.045-1.534-3.456-3.866-3.456Z"/></svg>
                        </div>
                      </MouseParallax>
                    </div>
                    
                    <MouseParallax enableOnTouchDevice={false} lerpEase={0.1} strength={0.004}>
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0 scale-[1.04]"
                        introDelay={!introContext}
                        deepGrain
                      />
                    </MouseParallax>
                    
                    {/* <MouseParallax enableOnTouchDevice={false} lerpEase={0.1} strength={-0.004} isAbsolutelyPositioned zIndex={10}>
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0 scale-[0.7] rotate-6"
                        introDelay={!introContext}
                        deepGrain
                      />
                    </MouseParallax> */}
                  </div>
              </div>
            </div>

            <div className="w-[100%] md:w-[70%] -mt-5 md:mt-2">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-[70%] p-5 flex flex-wrap">
                  <div className="w-full">
                    <h2 className="font-display text-[7.2vw] md:text-[4.8vw] xl:text-[4vw] leading-none md:leading-none xl:leading-none mb-10 lg:mb-8 max-w-[90%] md:max-w-[95%]">Information</h2>
                  </div>

                  <div className="mt-auto w-full">
                    <span className="flex items-center mb-6 text-sm">
                      <span className="font-serif leading-none text-xs block mr-[6px] md:translate-y-[1px]">( A )</span>
                      <span className="block leading-none">Background</span>
                    </span>

                    <div className="content w-[85%] md:w-[85%] max-w-[1000px] text-base md:text-xl 2xl:text-[23px] leading-[1.2] md:leading-[1.2] 2xl:leading-[1.2] pb-2">
                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.backgroundText} />
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-[30%] lg:border-l lg:border-black p-5 pt-12 lg:pt-32 xl:pt-40">
                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px] md:translate-y-[1px]">( B )</span>
                    <span className="block leading-none">People</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <p>{home.peopleText}</p>
                  </div>

                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px] md:translate-y-[1px]">( C )</span>
                    <span className="block leading-none">Expertise</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <ul>
                      {home.expertise.map((e, i) => {
                        return (
                          <li key={i}>{e}</li>
                        )
                      })}
                    </ul>
                  </div>

                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px] md:translate-y-[1px]">( D )</span>
                    <span className="block leading-none">Select Partners</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <ul>
                      {home.partners.map((e, i) => {
                        return (
                          <li key={i}>{e}</li>
                        )
                      })}
                    </ul>
                  </div>
                  
                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px] md:translate-y-[1px]">( E )</span>
                    <span className="block leading-none">Links</span>
                  </span>

                  <div className="text-sm leading-snug mb-4 md:mb-0">
                    <ul>
                      <li className="w-full mb-2">
                        <Link href="/journal">
                          <a className="group block">
                            <Pill label="The Journal" />
                          </a>
                        </Link>
                      </li>
                      <li className="w-full mb-2">
                        <a href="mailto:hello@shiftwalk.studio" className="group block">
                          <Pill label="Email" />
                        </a>
                      </li>
                      <li className="w-full">
                        <a href="https://www.instagram.com/_shiftwalk.studio/" className="group block" target="_blank" rel="noopener noreferrer">
                          <Pill label="Instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            
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