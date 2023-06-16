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
import { MouseParallax } from 'react-just-parallax'
import Image from '@/components/image'
import SanityPageService from '@/services/sanityPageService'

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

export default function Contact(initialData) {
  const { data: { home } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo
        title="Contact"
        description="We're always interested to hear about new projects, so please feel free to reach out on the channels below if you'd like to collaborate with us."
        openGraph={{
          title: 'ShiftWalk© Studio — Contact'
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
            <div className="fixed md:top-0 left-0 bottom-0 w-full md:w-[33%] lg:w-[30%] md:h-screen col-span-3 col-start-8 md:border-r border-black flex-wrap items-end pt-[45px] md:pt-[53px] xl:pt-[57px] z-10 px-5 lg:pb-2 hidden md:flex">
            <div className="w-full h-[42vw] max-h-[65vh] relative overflow-hidden bg-black mb-[75px]">
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
                  className="w-full h-full object-cover object-center absolute inset-0 scale-[1.025] opacity-[0.75]"
                  introDelay={!introContext}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  deepGrain
                  quality="90"
                />
              </MouseParallax>
              </div>
            </div>

            {/* Main Section */}
            <Div100vh className="w-full md:w-[67%] lg:w-[70%] pt-[55px] md:pt-[65px] xl:pt-[70px] h-screen flex flex-wrap fixed top-0 right-0 bottom-0 items-start md:items-center">
              <div className="w-full px-5 md:mt-[-250px]">
                {/* Desktop H1 */}
                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.8vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-2 md:mb-3 max-w-[95%] md:max-w-[95%] mt-[0.45vw] hidden xl:block">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.45vw]">Get in touch.</span></m.span>
                  </div>
                </m.h1>

                <m.h1 variants={childStaggerContainer} className="font-display text-[7.8vw] md:text-[4.5vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-2 md:mb-3 max-w-[95%] md:max-w-[95%] mt-[0.55vw] hidden md:block xl:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.55vw]">Get in touch.</span></m.span>
                  </div>
                </m.h1>

                <m.h1 variants={childStaggerContainer} className="font-display text-[7.45vw] md:text-[4.8vw] xl:text-[4vw] leading-[1] md:leading-[1] xl:leading-[1] mb-2 md:mb-3 max-w-[95%] md:max-w-[95%] mt-[0.8vw] block md:hidden">
                  <div className="relative overflow-hidden">
                    <m.span variants={reveal} className="block will-change-transform"><span className="block translate-y-[-0.8vw]">Get in touch.</span></m.span>
                  </div>
                </m.h1>
                
                <div className="content w-[85%] md:w-[65%] max-w-[830px] text-sm md:text-xl 2xl:text-[23px] leading-[1.2] md:leading-[1.2] 2xl:leading-[1.2] pb-3 hidden md:block">
                  <p>Whether you&rsquo;d like to talk to one of us, or both of us, please reach out below and your message will find its way to the right destination.</p>
                </div>

                <div className="w-full max-w-[400px] py-5 hidden md:block">
                  <a href="mailto:isaac@40000ft.co.uk" className="group block mb-2 md:mb-3">
                    <Pill label="Email Isaac" />
                  </a>
                  <a href="mailto:hello@samgoddard.co.uk" className="group block mb-2 md:mb-3">
                    <Pill label="Email Sam" />
                  </a>
                  <a href="mailto:hello@shiftwalk.studio" className="group block mb-2 md:mb-3">
                    <Pill label="Email Us Both" />
                  </a>
                  <a href="https://www.instagram.com/shiftwalk.studio/" className="group block" target="_blank" rel="noreferrer noopener">
                    <Pill label="Instagram" />
                  </a>
                </div>
              </div>

              <div className="w-[100%] md:w-[65%] max-w-[550px] text-[13px] md:text-sm leading-[1.33] md:leading-[1.33] p-5 pb-[75px] md:pb-[72px] lg:pb-[81px] absolute bottom-0 left-0">
                <div className="content w-[85%] md:w-[65%] max-w-[830px] text-base md:text-xl 2xl:text-[23px] leading-[1.2] md:leading-[1.2] 2xl:leading-[1.2] pb-3 md:hidden">
                  <p>Whether you&rsquo;d like to talk to one of us, or both of us, please reach out below and your message will find its way to the right destination.</p>
                </div>

                <div className="w-full max-w-[400px] pt-3 pb-0 md:py-5 md:hidden">
                  <a href="mailto:isaac@40000ft.co.uk" className="group block mb-2 md:mb-3">
                    <Pill label="Email Isaac" />
                  </a>
                  <a href="mailto:hello@samgoddard.co.uk" className="group block mb-2 md:mb-3">
                    <Pill label="Email Sam" />
                  </a>
                  <a href="mailto:hello@shiftwalk.studio" className="group block mb-2 md:mb-3">
                    <Pill label="Email Us Both" />
                  </a>
                  <a href="https://www.instagram.com/shiftwalk.studio/" className="group block" target="_blank" rel="noreferrer noopener">
                    <Pill label="Instagram" />
                  </a>
                </div>

                <h2 className="pb-0 mb-3 md:mb-4 hidden md:block">how do you work together?</h2>
                <p className="hidden md:block">We&rsquo;re two freelancers, but when a project comes along that requires both creative direction and development, we love working together on it as a unified team. It&rsquo;s like a studio, but only when we need it to be. Working with us is seamless, since we have collaborated in this way for many years to create websites and brands for clients all over the world.</p>
              </div>

              {/* <div className="mb-[60px] md:mb-[63px] xl:mb-[70px] mt-auto w-full px-5">
                <div className="w-full">
                  <div className="w-full py-5">
                    <a href="mailto:hello@shiftwalk.studio" className="group block mb-3 md:mb-4">
                      <Pill label="Email Us" />
                    </a>
                    <a href="https://www.instagram.com/shiftwalk.studio/" className="group block" target="_blank" rel="noreferrer noopener">
                      <Pill label="Instagram" />
                    </a>
                  </div>
                </div>
              </div> */}
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}