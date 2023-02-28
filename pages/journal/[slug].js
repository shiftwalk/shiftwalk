import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade, reveal } from '@/helpers/transitions'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import Image from '@/components/image'
import Gif from '@/components/gif'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Pill from '@/components/pill'
import { HeaderContext } from '@/context/header'
import Teaser from '@/components/teaser'
import { SplitText } from '@/components/splitText'
import Div100vh from 'react-div-100vh'

const query = `{
  "journal": *[_type == "journal" && slug.current == $slug][0]{
    title,
    content,
    journalCode,
    additionalLinks[] {
      linkText,
      linkUrl,
      internalLink-> {
        title,
        slug {
          current
        }
      }
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
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "journals": *[_type == "journal" && slug.current != $slug && orderRank > ^.orderRank][0..1] | order(orderRank) {
      title,
      content,
      journalCode,
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
  }
}`

const pageService = new SanityPageService(query)

export default function JournalSlug(initialData) {
  const { data: { journal } } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [headerContext, setHeaderContext] = useContext(HeaderContext);

  useEffect(() => {
    setIntroContext(true)
    setHeaderContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo title={journal.title} />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-5 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-5">
                <div className="w-full relative overflow-hidden">
                  {journal.additionalLinks && (
                    <div className="w-full mb-4">
                      {journal.additionalLinks.map((e, i) => {
                        return (
                          <div className="w-full" key={i}>
                            {e.internalLink ? (
                              <Link href={`/projects/${e.internalLink.slug.current}`}>
                                <a className="block w-full group mb-2">
                                  <Pill label={e.linkText} />
                                </a>
                              </Link>
                            ) : (
                              <a href={e.linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full group mb-2">
                                <Pill label={e.linkText} />
                              </a>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}

                  <div>
                    { journal.images.length == 1 ? (
                      <Image
                        image={journal.images[0]}
                        focalPoint={journal.images[0].asset.hotspot}
                        layout="responsive"
                        sizes="(min-width: 768px) 80vw, 100vw"
                        className="w-full"
                      />
                    ) : (
                      <Gif images={journal.images} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <div className="flex flex-wrap">
              <Div100vh className="w-full md:w-[70%] pt-32 md:pt-[20vh] xl:pt-[20vh] relative h-screen flex flex-wrap p-5 mb-[15vw]">
                <div className="w-full mb-auto">
                  <Link href="/journal">
                    <a aria-label="Navigate back to all journal entries">
                      <svg className="mx-5 w-8 absolute top-0 left-0 mb-3 pt-[60px] md:pt-[74px] xl:pt-[80px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg>
                    </a>
                  </Link>
                  
                  <div className="border-b border-black relative pb-1 md:pb-1 overflow-hidden">
                    <div className="">
                      <h1 className="font-display text-[8vw] md:text-[4.5vw] xl:text-[4vw] leading-[0.95] md:leading-[0.95] xl:leading-[0.95] max-w-[95%] md:max-w-[80%] mb-2 md:mb-0 pb-0 w-full flex flex-wrap">
                        <SplitText
                          display
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
                          {journal.title}
                        </SplitText>
                      </h1>
                    </div>
                    <div className="overflow-hidden md:absolute md:bottom-0 md:right-0 mb-1 md:mb-2">
                      <m.span variants={reveal} className="font-serif block text-base md:text-xl">( {journal.journalCode } )</m.span>
                    </div>
                  </div>
                
                </div>

                <div className="content w-full text-base md:text-xl 2xl:text-[23px] leading-[1.175] md:leading-[1.175] 2xl:leading-[1.175] mt-auto">
                  <div className="content w-[90%] md:w-[70%] max-w-[700px]">
                    <p className="flex flex-wrap">
                      <SplitText
                        text
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
                        {journal.content}
                      </SplitText>
                    </p>
                  </div>
                </div>
              </Div100vh>
            </div>

            <div className="w-full md:w-[70%] overflow-hidden">
              {journal.journals.length > 0 && (
                <>
                  <div className="px-5 pb-6">
                    <div className="border-b border-black">
                      <h1 className="font-display text-[6.5vw] md:text-[4vw] xl:text-[3.2vw] leading-none md:leading-none xl:leading-none mb-2 md:mb-3 max-w-[95%] md:max-w-[95%] w-full ">More Updates</h1>
                    </div>
                  </div>
                

                  <div className="flex flex-wrap px-5 -mx-3">
                    {journal.journals.map((e, i) => {
                      return (
                        <div className={`w-full md:w-1/2 flex px-3 mb-6 md:mb-0 group `} key={i}>
                          <Teaser
                            pillText="Read More"
                            projectCode={e.journalCode}
                            title={e.title}
                            slug={`/journal/${e.slug.current}`}
                            images={e.images}
                            left
                            matchHeight
                            leftAlign
                            hoverImages={null}
                          />
                        </div>
                      )
                    })}
                  </div>

                  <div className="col-span-10 md:col-span-7">
                    <div className="mb-[14vw] md:mb-[8.5vw] mt-[15vw] px-5">
                      <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                    </div>
                  </div>
                </>
              )}

              <Footer noRightPad />
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props,
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('journal')
  return {
    paths: paths,
    fallback: false,
  };
}