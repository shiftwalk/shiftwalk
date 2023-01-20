import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Link from 'next/link'
import Image from '@/components/image'
import Gif from '@/components/gif'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Pill from '@/components/pill'

const query = `{
  "journal": *[_type == "journal" && slug.current == $slug][0]{
    title,
    content,
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

  useEffect(() => {
    setIntroContext(true)
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
          <m.article>
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-5 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-5">
                <div className="w-full relative overflow-hidden">
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
              <div className="w-full md:w-[70%] pt-32 md:pt-[20vh] xl:pt-[20vh] relative h-screen flex flex-wrap p-5 mb-[15vw]">
                <div className="w-full mb-auto">
                  <Link href="/journal">
                    <a>
                      <svg className="mx-5 w-8 absolute top-0 left-0 mb-3 pt-[60px] md:pt-[74px] xl:pt-[80px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg>
                    </a>
                  </Link>
                  
                  <div className="border-b border-black">
                    <span className="font-serif mb-2 block text-lg">(&nbsp;&nbsp;16.7.21&nbsp;&nbsp;)</span>
                    <h1 className="font-display text-[8vw] md:text-[4.5vw] xl:text-[4vw] leading-none md:leading-none xl:leading-none mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] w-full ">{journal.title}</h1>
                  </div>
                </div>

                <div className="content w-full text-lg md:text-xl 2xl:text-2xl leading-tight md:leading-tight 2xl:leading-tight mt-auto">
                  <div className="content w-[90%] md:w-[70%] max-w-[700px]">
                    <p>{journal.content}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[70%] overflow-hidden">
              
              <div className="px-5 pb-6">
                <div className="border-b border-black">
                  <h1 className="font-display text-[6.5vw] md:text-[4vw] xl:text-[3.2vw] leading-none md:leading-none xl:leading-none mb-6 md:mb-8 max-w-[95%] md:max-w-[95%] w-full ">Related</h1>
                </div>
              </div>

              <div className="flex flex-wrap px-5 -mx-3">
                {journal.journals.map((e, i) => {
                  return (
                    <Link href={`/journal/${e.slug.current}`} key={i}>
                      <a className={`w-full md:w-1/2 block px-3 mb-6 md:mb-0 group`}>
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

                        <Pill label="Read More" />
                      </a>
                    </Link>
                  )
                })}
              </div>

              <div className="col-span-10 md:col-span-7">
                <div className="mb-[14vw] md:mb-[8.5vw] mt-[15vw] px-5">
                  <div className="w-full h-[1px] bg-black -skew-y-12"></div>
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