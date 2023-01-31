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
import Clock from 'react-live-clock'
import Pill from '@/components/pill'
import Image from '@/components/image'

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

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 2500);
  },[]);

  return (
    <Layout>
      <NextSeo title="Design + Build Studio" />

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
                { current == 'sam' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Creative Development</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="/images/sam.jpg" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == 'isaac' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Interaction, Brand, Art Direction</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="/images/isaac.jpg" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == 'projects' && (
                  <>
                    <span className="mb-2 block text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none">Selected Projects</span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <img className="w-full h-full object-cover object-center absolute inset-0" src="https://placedog.net/600/960" alt="CHANGE ME" />
                    </div>
                  </>
                )}
                { current == null && (
                  <>
                    <span className="block mb-2 lg:flex items-center text-lg md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none group">
                      <svg className="w-[28px] mb-1 lg:mb-[-1px] lg:mr-2 block" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.72 14.428c2.273-1.495 3.5-3.436 3.5-5.428s-1.227-3.933-3.5-5.428c-2.263-1.49-5.456-2.447-9.04-2.447-3.584 0-6.777.958-9.04 2.447C2.366 5.067 1.14 7.008 1.14 9s1.227 3.933 3.5 5.428c2.263 1.49 5.456 2.447 9.04 2.447 3.584 0 6.777-.958 9.04-2.447ZM13.68 18c7.555 0 13.68-4.03 13.68-9s-6.125-9-13.68-9S0 4.03 0 9s6.125 9 13.68 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M13.68 16.875c3.161 0 6.093-3.296 6.093-7.875 0-4.579-2.932-7.875-6.092-7.875-3.161 0-6.093 3.296-6.093 7.875 0 4.579 2.932 7.875 6.093 7.875Zm0 1.125c3.977 0 7.2-4.03 7.2-9s-3.223-9-7.2-9c-3.976 0-7.2 4.03-7.2 9s3.224 9 7.2 9Z" fill="#202020"/><path fillRule="evenodd" clipRule="evenodd" d="M26.64 9.362H.72v-1.44h25.92v1.44Z" fill="#242B2D"/><path fillRule="evenodd" clipRule="evenodd" d="M12.96 17.999V.719h1.44v17.28h-1.44Z" fill="#242B2D"/></svg>

                      <span className="block w-full relative">
                        <span className="group-hover:opacity-0 w-full">
                          <span className="tabular-nums"><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/London'} /> GMT</span>
                        </span>
                        <span className="block opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0">Nottingham — Worldwide</span>
                      </span>
                    </span>
                    <div className="w-full h-[38vw] max-h-[70vh] relative overflow-hidden">
                      <Image
                        image={home.heroImage[0]}
                        focalPoint={home.heroImage[0].asset.hotspot}
                        layout="fill"
                        className="w-full h-full object-cover object-center absolute inset-0"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Main Section */}
            <div className="w-[100%] md:w-[70%] pt-[63px] md:pt-[78px] xl:pt-[80px] md:h-screen flex flex-wrap px-5 relative">
              <div className="w-full mb-8 md:mb-0">
                <h1 className="font-display text-[7.2vw] md:text-[4.8vw] xl:text-[4vw] leading-none indent-[8vw] mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] ">A design-led studio building thoughtful brands + websites for our partners around the world. We feel at home creating work in the architectural, sustainability, and creative arts spaces.</h1>
              </div>

              <div className="w-full mt-auto pb-5">
                <div className="mt-[10vw] mb-[13vw] md:mb-[13vw] pb-4 md:pb-0 md:absolute bottom-0 left-0 right-0 md:mx-5">
                  <div className="w-full h-[1px] bg-black skew-y-[-15deg] md:skew-y-[-10deg]"></div>
                </div>
                
                <div className="md:absolute bottom-0 left-0 right-0 mb-5 md:mx-5 z-20">
                  <Link href="/projects">
                    <a className="group block">
                      <Pill label="Selected Projects" />
                    </a>
                  </Link>
                </div>

                <Grid className="pb-3 md:pb-16 xl:pb-[7vw] relative">
                  {/* <svg className="hidden md:block w-2 md:w-3 absolute bottom-0 left-0 mb-3 xl:mb-6" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg> */}
                  <img className="col-span-12 md:hidden" src="images/studio.jpg" alt="CHANGE ME" />
                </Grid>
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
                      <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                      <span className="block leading-none">Background</span>
                    </span>

                    <div className="content w-[85%] md:w-[85%] max-w-[1000px] text-sm md:text-xl 2xl:text-2xl leading-tight md:leading-tight 2xl:leading-tight">
                      <p>We're a multidisciplinary creative studio who believe that great design is rooted in concept, and honed by understanding. To that end, we see ourselves as curious collaborators for foward-thinking and brave brands, always looking to find novel ways to meet each brief and challenge the expected.</p>
                      
                      <p>Whilst our design work is often known for its attention to detail, and interesting moments of surprise, we also pride ourselves on the build quality of our output. Our websites always aim to be fast, performant, and accessible. Our brand collateral should be meaningful, and crafted for real world use. To us these traits are non-negotiable and ingrained in our approach.</p>
                    </div>

                    <a href="https://www.instagram.com/_shiftwalk.studio/" className="group block w-full mt-5">
                      <Pill label="Latest News" />
                    </a>
                  </div>
                </div>
                
                <div className="w-full lg:w-[30%] lg:border-l lg:border-black p-5 pt-12 lg:pt-32 xl:pt-40">
                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( B )</span>
                    <span className="block leading-none">People</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <p>ShiftWalk is led by founders Sam Goddard + Isaac Powell, who have over a decade of experience in design + web technology. Whilst awards don’t affect our judgement during a project, we are proud to have been recognised for our work in numerous sites + publications, including Awwwards, SiteInspire, Klikkentheke, The Brand Identity, and Typewolf.</p>
                  </div>

                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( C )</span>
                    <span className="block leading-none">Expertise</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <ul>
                      <li>Creative Direction</li>
                      <li>Brand Identity</li>
                      <li>Interaction Design</li>
                      <li>Backend Architecture</li>
                      <li>Web Development</li>
                      <li>E-commerce</li>
                      <li>Accessibility</li>
                    </ul>
                  </div>

                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( D )</span>
                    <span className="block leading-none">Partners</span>
                  </span>

                  <div className="text-sm leading-snug w-[85%] mb-8 lg:mb-12">
                    <ul>
                      <li>Ragged Edge</li>
                      <li>Paul Smith</li>
                      <li>Pitch</li>
                      <li>Alpacka</li>
                      <li>Jason Bailey Studio</li>
                      <li>CUSP</li>
                      <li>Ingamana</li>
                    </ul>
                  </div>
                  
                  <span className="flex items-center mb-6 text-sm">
                    <span className="font-serif leading-none text-xs block mr-[6px]">( E )</span>
                    <span className="block leading-none">Contact</span>
                  </span>

                  <div className="text-sm leading-snug mb-12 md:mb-0">
                    <ul>
                      <li className="w-full mb-2">
                        <a href="mailto:hello@shiftwalk.studio" className="group block">
                          <Pill label="Email" />
                        </a>
                      </li>
                      <li className="w-full">
                        <a href="https://www.instagram.com/_shiftwalk.studio/" className="group block">
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