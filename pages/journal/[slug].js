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
import { useState } from 'react'

const query = `{
  "journal": *[_type == "journal" && slug.current == $slug][0]{
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
  }
}`

const pageService = new SanityPageService(query)

export default function JournalSlug(initialData) {
  const { data: { journal } } = pageService.getPreviewHook(initialData)()
  const [current, setCurrent] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

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
                  { current !== null ? (
                    <div className="w-full relative overflow-hidden">
                      { journal.journals[current].images.length == 1 ? (
                        <Image
                          image={journal.journals[current].images[0]}
                          focalPoint={journal.journals[current].images[0].asset.hotspot}
                          layout="responsive"
                          sizes="(min-width: 768px) 80vw, 100vw"
                          className="w-full"
                        />
                      ) : (
                        <Gif images={journal.journals[current].images} />
                      )}
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-32 md:pt-[20vh] xl:pt-[20vh] relative">
                <Link href="/journal">
                  <a>
                    <svg className="mx-5 w-8 absolute top-0 left-0 mb-3 pt-[60px] md:pt-[74px] xl:pt-[80px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4.64C1.893 3.733 3.653 2.293 5.28.32h1.4c-.4.853-.8 1.6-1.2 2.24a10.37 10.37 0 0 1-1.12 1.6h23.32v1.68H4.36c.373.453.747 1 1.12 1.64.4.64.8 1.373 1.2 2.2h-1.4C3.653 7.733 1.893 6.293 0 5.36v-.72Z" fill="#242B2D"/></svg>
                  </a>
                </Link>

                <div className="px-5">
                  <div className="w-full mb-0 md:mb-0 border-b border-black">
                    {/* <span className="font-serif mb-2 block text-lg">( {journal.date } )</span> */}
                    <h1 className="font-display text-[8vw] md:text-[4.5vw] xl:text-[4vw] leading-none md:leading-none xl:leading-none mb-6 md:mb-8 max-w-[95%] md:max-w-[95%]">{journal.title}</h1>
                  </div>
                </div>
              </div>

              <div className="col-span-10 md:col-span-7">
                <div className="px-5 content w-[90%] md:w-[80%] max-w-[900px] mt-5 mb-[30vw] md:mt-[12vw] md:mb-[20vw] text-lg md:text-xl 2xl:text-2xl leading-tight md:leading-tight 2xl:leading-tight">
                  <p>{journal.content}</p>
                </div>

                {journal.journals.map((e, i) => {
                  return (
                    <Link href={`/journal/${e.slug.current}`} key={i}>
                      <a onMouseEnter={()=> updateCurrent(i)} onMouseLeave={()=> removeCurrent()} className={`p-5 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == i || !isHovering ? 'opacity-100' : 'opacity-30' }`}>
                        <div className="flex pb-1">
                          <span className="font-serif mb-2 block text-lg leading-none">( SW.0{i + 1} )</span>
                          {/* <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( {e.date} )</span> */}
                        </div>
                        <div className="border-t border-black pt-4">
                          <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">{e.title}</h2>
                        </div>
                      </a>
                    </Link>
                  )
                })}

                <div className="col-span-10 md:col-span-7">
                  <div className="mb-[14vw] md:mb-[8.5vw] mt-[15vw] px-5">
                    <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                  </div>
                </div>

                <Footer noRightPad />
              </div>
            </Grid>
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