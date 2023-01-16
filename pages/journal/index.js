import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import { useContext, useEffect, useState } from 'react'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import Link from 'next/link'
import Gif from '@/components/gif'
import { IntroContext } from '@/context/intro'

const query = `{
  "journals": *[_type == "journal"] | order(orderRank) {
    title,
    content,
    images[] {
      asset-> {
        ...
      },
      overrideVideo {
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
  const [current, setCurrent] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  function updateCurrent(e) {
    setCurrent(e)
    setIsHovering(true)
  }

  function removeCurrent() {
    setCurrent(null)
    setIsHovering(false)
  }

  return (
    <Layout>
      <NextSeo title="Journal" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article>
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
                  <Link href={`/journal/${e.slug.current}`} key={i}>
                    <a onMouseEnter={()=> updateCurrent(i)} onMouseLeave={()=> removeCurrent()} className={`p-5 border-b border-black w-full block ${current == i || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                      <div className="mb-3 w-full">
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
                      <h2 className="text-lg md:text-lg xl:text-xl uppercase leading-none md:leading-none xl:leading-none block mb-2 md:mb-2 xl:mb-2">{e.title}</h2>
                      <div className="flex pb-1 mb-5">
                        <span className="font-serif mb-2 block text-lg leading-none">( SW.0{i + 1} )</span>
                      </div>

                      <span className="inline-block text-base md:text-base xl:text-base leading-[1.5] md:leading-[1.5] xl:leading-[1.5] a11y-focus relative mx-auto">
                        Read
                        <span className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-black"></span>
                      </span>
                    </a>
                  </Link>
                )
              })}
            </div>

            <Grid>
              <div className="col-span-12 w-full pt-12 lg:pt-0 lg:w-[75%] lg:fixed top-0 left-0 right-0 lg:h-screen flex flex-wrap lg:border-r lg:border-black">

                <div className="lg:my-auto w-full lg:flex lg:items-center lg:justify-center">
                  <div className="lg:w-[55vh] lg:mt-[-6vh]">
                    <Link href={`/journal/${journals[0].slug.current}`}>
                      <a className={`p-5 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] hidden lg:block`}>
                        <div className="w-full mt-auto py-5">
                          <div className="pb-1">
                            <span className="font-serif mb-2 block text-lg leading-none text-center">( SW.01 )</span>
                          </div>
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
                        <div className="flex justify-center">
                          <h2 className="text-xl md:text-2xl 2xl:text-3xl uppercase leading-none md:leading-none 2xl:leading-none block mb-2 md:mb-3 xl:mb-4 text-center w-[90%]">{journals[0].title}</h2>
                        </div>
                        
                        <div className="flex justify-center">
                          <span className="inline-block text-lg md:text-lg xl:text-lg leading-[1.5] md:leading-[1.5] xl:leading-[1.5] a11y-focus relative mx-auto pt-[3vh]">
                            Read Article
                            <span className="absolute bottom-0 left-0 right-0 w-full h-[1px] bg-black"></span>
                          </span>
                        </div>
                      </a>
                    </Link>
                    
                    <div className="lg:hidden mb-24">
                      {journals.map((e, i) => {
                        return (
                          <Link href={`/journal/${e.slug.current}`} key={i}>
                            <a onMouseEnter={()=> updateCurrent(i)} onMouseLeave={()=> removeCurrent()} className={`p-5 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == i || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
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
                              <h2 className="text-lg md:text-lg xl:text-xl uppercase leading-none md:leading-none xl:leading-none block mb-2 md:mb-3 xl:mb-4 w-[80%]">{e.title}</h2>
                              <div className="flex pb-1">
                                <span className="font-serif mb-2 block text-lg leading-none">( SW.0{i + 1} )</span>
                              </div>
                            </a>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="w-full lg:mt-auto lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
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