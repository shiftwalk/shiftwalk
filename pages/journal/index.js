import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import { useState } from 'react'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import Link from 'next/link'

const query = `{
  "journals": *[_type == "journal"] | order(orderRank) {
    title,
    date,
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
            {/* Fixed Sidebar */}
            <div className="fixed top-0 right-0 bottom-0 w-[29.75vw] h-screen pt-[45px] md:pt-[53px] xl:pt-[57px] col-span-3 col-start-8 border-l border-black px-3 hidden md:flex flex-wrap">
              <div className="w-full mt-auto py-3">
                { current !== null && (
                  <div className="w-full relative overflow-hidden">

                    <Image
                      image={journals[current].images[0]}
                      focalPoint={journals[current].images[0].asset.hotspot}
                      layout="responsive"
                      priority
                      sizes="(min-width: 768px) 40vw, 40vw"
                      className="w-full"
                      noCaption
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-7 pt-32 md:pt-[20vh] xl:pt-[30vh] relative">
                <svg className="mx-3 w-2 absolute top-0 left-0 mb-3 pt-[10vh] hidden md:block" viewBox="0 0 10 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64 28c-.907-1.893-2.347-3.653-4.32-5.28v-1.4c.853.4 1.6.8 2.24 1.2.64.373 1.173.747 1.6 1.12V.32h1.68v23.32c.453-.373 1-.747 1.64-1.12.64-.4 1.373-.8 2.2-1.2v1.4C7.733 24.347 6.293 26.107 5.36 28h-.72Z" fill="#242B2D"/></svg>
                
                {journals.map((e, i) => {
                  return (
                    <Link href={`/journal/${e.slug.current}`}>
                      <a onMouseEnter={()=> updateCurrent(i)} onMouseLeave={()=> removeCurrent()} className={`p-3 pb-[0.3vw] md:pb-[0.6vw] xl:pb-[0.8vw] block ${current == i || !isHovering ? 'opacity-100' : 'opacity-30' }`} key={i}>
                        <div className="flex pb-1">
                          <span className="font-serif mb-2 block text-base leading-none">( SW.0{i + 1} )</span>
                          <span className="font-serif mb-2 block text-base leading-none ml-auto text-right">( {e.date} )</span>
                        </div>
                        <div className="border-t border-black pt-4">
                          <h2 className="font-display text-[6.4vw] md:text-[3.35vw] xl:text-[3vw] leading-none mb-6 md:mb-8 max-w-[70%] md:max-w-[65%]">{e.title}</h2>
                        </div>
                      </a>
                    </Link>
                  )
                })}
              
                <div className="col-span-10 md:col-span-7">
                  <div className="mb-[13vw] md:mb-[8.5vw] mt-[15vw] px-3">
                    <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                  </div>
                </div>
                <Footer />
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