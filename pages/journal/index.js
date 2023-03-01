import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { fade, reveal } from '@/helpers/transitions'
import Grid from '@/components/grid'
import { useContext, useEffect, useState } from 'react'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import Link from 'next/link'
import Gif from '@/components/gif'
import { IntroContext } from '@/context/intro'
import Pill from '@/components/pill'
import { HeaderContext } from '@/context/header'
import Teaser from '@/components/teaser'
import { SplitText } from '@/components/splitText'

const query = `{
  "journals": *[_type == "journal"] | order(orderRank) {
    title,
    content,
    journalCode,
    additionalLinks[] {
      linkText,
      linkUrl,
    },
    images[] {
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
    slug {
      current
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Journal(initialData) {
  const { data: { journals } } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }

  useEffect(() => {
    setIntroContext(true)
    setHeaderContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title="Journal"
        openGraph={{
          title: 'Journal'
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
            <div className="absolute top-0 right-0 bottom-0 w-[25%] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 hidden lg:flex flex-wrap">
              {/* <div className="w-full mt-auto py-5">
                { current !== null && (
                  <div className="w-full relative overflow-hidden">
                    { journals[current].images.length == 1 ? (
                      <Image
                        image={journals[current].images[0]}
                        focalPoint={journals[current].images[0].asset.hotspot}
                        layout="responsive"
                        sizes="(min-width: 768px) 80vw, 100vw"
                        className="w-full"
                      />
                    ) : (
                      <Gif images={journals[current].images} />
                    )}
                  </div>
                )}
              </div> */}

              {journals.slice(1).map((e, i) => {
                return (
                  <div className={`border-black w-full block group ${ (i + 2) == journals.length ? 'border-b-0' : 'border-b'}`} key={i}>
                    <Teaser
                      padded
                      bigBottomPad
                      projectCode={e.journalCode}
                      pillText="Read More"
                      title={e.title}
                      slug={`/journal/${e.slug.current}`}
                      images={e.images}
                      hoverImages={null}
                      leftAlign
                    />
                  </div>
                )
              })}
            </div>

            <Grid>
              <div className="col-span-12 w-full pt-12 lg:pt-0 lg:w-[75%] lg:fixed top-0 left-0 right-0 lg:h-screen flex flex-wrap lg:border-r lg:border-black relative">

                <div className="lg:my-auto w-full lg:flex lg:items-center lg:justify-center">
                  <div className="lg:w-[55vh] lg:mt-[-6vh]">
                    <Link href={`/journal/${journals[0].slug.current}`}>
                      <a className={`p-5 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] hidden lg:block group`} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                        <div className="w-full mt-auto py-5">
                          <div className="w-full relative overflow-hidden">
                            { journals[0].images.length == 1 ? (
                              <Image
                                image={journals[0].images[0]}
                                focalPoint={journals[0].images[0].asset.hotspot}
                                layout="responsive"
                                sizes="(min-width: 768px) 80vw, 100vw"
                                className="w-full"
                              />
                            ) : (
                              <Gif images={journals[0].images} />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-center">
                          <div className="mx-auto text-center">
                            <div className="overflow-hidden relative">
                              <h2 className="text-xl md:text-2xl 2xl:text-3xl uppercase leading-none md:leading-none 2xl:leading-none  mb-2 md:mb-3 xl:mb-3 text-center w-[90%] mx-auto flex flex-wrap justify-center">
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
                                  {journals[0].title}
                                </SplitText>
                              </h2>
                            </div>
                            <div className="overflow-hidden relative pb-1">
                              <m.span variants={reveal} className="font-serif mb-2 block text-xl leading-none text-center">(&nbsp;&nbsp;{journals[0].journalCode}&nbsp;&nbsp;)</m.span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 mb-[90px] mx-5 md:block">
                          <Pill label="Read More" mouseOverride={true} shouldTransitionOverride={shouldTransition} parentHover={true} />
                        </div>
                      </a>
                    </Link>
                    
                    <div className="lg:hidden mb-[30vw] mt-5">
                      {journals.map((e, i) => {
                        return (
                          <Link href={`/journal/${e.slug.current}`} key={i}>
                            <a className={`mx-5 md:pb-[0.6vw] xl:pb-[0.8vw] pb-8 mb-3 block ${i == journals.length - 1 ? '' : 'border-b' } border-black mb-3`}>
                              <div className="mb-3">
                              { e.images.length == 1 ? (
                                <Image
                                  image={e.images[0]}
                                  focalPoint={e.images[0].asset.hotspot}
                                  layout="responsive"
                                  sizes="(min-width: 768px) 80vw, 100vw"
                                  className="w-full"
                                />
                              ) : (
                                <Gif images={e.images} />
                              )}
                              </div>
                              
                              <h2 className="text-lg md:text-lg xl:text-xl uppercase leading-none md:leading-none xl:leading-none mb-2 md:mb-3 xl:mb-4 w-[80%] flex flex-wrap">
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
                                  {e.title}
                                </SplitText>
                              </h2>
                              <div className="flex pb-1">
                                <div className="w-full relative overflow-hidden">
                                  <m.span variants={reveal} className="font-serif mb-2 block md:text-lg leading-none">( {e.journalCode} )</m.span>
                                </div>
                              </div>
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:mt-auto lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
                  <div className="mt-[10vw] mb-[22vw] lg:mb-[16vw] xl:mb-[14.5vw] 2xl:mb-[13.75vw]  md:pb-0 md:absolute bottom-0 left-0 right-0 mx-5 lg:hidden">
                    <div className="w-full h-[1px] bg-black skew-y-[-15deg]"></div>
                  </div>

                  <Footer noRightPad />
                </div>
              </div>
            </Grid>
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