import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Image from '@/components/image'
import Link from 'next/link'

const query = `{
  "projects": *[_type == "projects"] | order(orderRank) {
    title,
    services[],
    projectCode,
    teaserImage {
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

export default function Projects(initialData) {
  const { data: { projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Projects" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article>
            {/* Main Section */}
            <Grid>
              <div className="col-span-10 md:col-span-10 pt-[60px] md:pt-[70px] xl:pt-[75px] min-h-screen">
                <div className="px-3 h-full w-full">
                  <Link href={`/projects/${projects[0].slug.current}`}>
                    <a className="w-full group flex flex-col h-full">
                      <div className="overflow-hidden relative mb-4 w-full flex-1">
                        <Image
                          image={projects[0].teaserImage}
                          focalPoint={projects[0].teaserImage.asset.hotspot}
                          layout="fill"
                          priority
                          sizes="(min-width: 768px) 90vw, 90vw"
                          className="w-full h-full absolute inset-0 object-cover object-center"
                          noCaption
                        />
                      </div>
                      
                      <Grid className="border-b border-black pb-1 hidden md:grid w-full mt-auto mb-3">
                        <div className="col-span-2"><span className="font-serif block text-base leading-none">( {projects[0].projectCode} )</span></div>

                        <div className="md:col-span-6 lg:col-span-3"><span className="block text-base uppercase leading-none">{projects[0].title}</span></div>

                        <div className="col-span-4 text-right md:hidden lg:block">
                          <span className="block text-base uppercase leading-none">
                            {projects[0].services.map((e, i) => { 
                              return (
                                <span className="inline-block">{e}{i + 1 !== projects[0].services.length && (`, \u00A0`)}</span>
                              )
                            })}
                          </span>
                        </div>

                        <div className="col-span-2 lg:col-span-1 text-right">
                          <span className="w-5 xl:w-6 inline-block ml-auto">
                            <svg className="w-full mt-[-14px] ml-[-3px]" viewBox="0 0 28 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 5.36c-1.893.907-3.653 2.347-5.28 4.32h-1.4c.4-.853.8-1.6 1.2-2.24.373-.64.747-1.173 1.12-1.6H.32V4.16h23.32c-.373-.453-.747-1-1.12-1.64-.4-.64-.8-1.373-1.2-2.2h1.4c1.627 1.947 3.387 3.387 5.28 4.32v.72Z" fill="#242B2D"/></svg>
                          </span>
                        </div>
                      </Grid>
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            
            <Grid>
              <div className="col-span-10 md:col-span-5 md:mt-[8vw]">
                <div className="px-3">
                  <Link href={`/projects/${projects[1].slug.current}`}>
                    <a className="block w-full group overflow-hidden relative mb-4">
                      <Image
                        image={projects[1].teaserImage}
                        focalPoint={projects[1].teaserImage.asset.hotspot}
                        layout="responsive"
                        priority
                        sizes="(min-width: 768px) 50vw, 50vw"
                        className="w-full"
                        noCaption
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-span-10 md:col-span-4 md:col-start-7 md:mt-[8vw]">
                <div className="px-3">
                  <Link href={`/projects/${projects[2].slug.current}`}>
                    <a className="block w-full group overflow-hidden relative mb-4">
                      <Image
                        image={projects[2].teaserImage}
                        focalPoint={projects[2].teaserImage.asset.hotspot}
                        layout="responsive"
                        priority
                        sizes="(min-width: 768px) 50vw, 50vw"
                        className="w-full"
                        noCaption
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            
            <Grid>
              <div className="col-span-10 md:col-span-8 md:col-start-2 md:mt-[8vw]">
                <div className="px-3">
                  <Link href={`/projects/${projects[3].slug.current}`}>
                    <a className="block w-full group overflow-hidden relative mb-4">
                      <Image
                        image={projects[3].teaserImage}
                        focalPoint={projects[3].teaserImage.asset.hotspot}
                        layout="responsive"
                        priority
                        sizes="(min-width: 768px) 80vw, 80vw"
                        className="w-full"
                        noCaption
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            
            <Grid className="items-end">
              <div className="col-span-10 md:col-span-4 md:mb-[-20vw]">
                <div className="px-3">
                  <Link href={`/projects/${projects[4].slug.current}`}>
                    <a className="block w-full group overflow-hidden relative mb-4">
                      <Image
                        image={projects[4].teaserImage}
                        focalPoint={projects[4].teaserImage.asset.hotspot}
                        layout="responsive"
                        priority
                        sizes="(min-width: 768px) 50vw, 50vw"
                        className="w-full"
                        noCaption
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-span-10 md:col-span-5 md:col-start-6 md:mt-[8vw]">
                <div className="px-3">
                  <Link href={`/projects/${projects[5].slug.current}`}>
                    <a className="block w-full group overflow-hidden relative mb-4">
                      <Image
                        image={projects[5].teaserImage}
                        focalPoint={projects[5].teaserImage.asset.hotspot}
                        layout="responsive"
                        priority
                        sizes="(min-width: 768px) 50vw, 50vw"
                        className="w-full"
                        noCaption
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            
            <Grid>
              <div className="col-span-10 md:col-span-10 mt-[25vw]">
                <div className="col-span-10 md:col-span-7">
                  <div className="mb-[13vw] md:mb-[11.5vw] px-3">
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
  const cms = await pageService.fetchQuery(context)

  return {
    props: { ...cms }
  }
}