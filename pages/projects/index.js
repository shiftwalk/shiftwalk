import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade, reveal } from '@/helpers/transitions'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Teaser from '@/components/teaser'
import { useContext, useEffect, useState } from 'react'
import { IntroContext } from '@/context/intro'
import Pill from '@/components/pill'
import Link from 'next/link'
import { HeaderContext } from '@/context/header'

const query = `{
  "projects": *[_type == "projects"] | order(orderRank) {
    title,
    services[],
    projectCode,
    overview,
    teaserImages[] {
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
    teaserImagesHover[] {
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

export default function Projects(initialData) {
  const { data: { projects } } = pageService.getPreviewHook(initialData)()
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
      <NextSeo title="Projects" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.article variants={fade}>
            {/* Main Section */}
            <div className="md:hidden mb-24 px-5 pt-[67px]">
              {projects.map((e, i) => {
                return (
                  <div className="pb-3" key={i}>
                    <Teaser
                      projectCode={e.projectCode}
                      title={e.title}
                      slug={`/projects/${e.slug.current}`}
                      images={e.teaserImages}
                      hoverImages={e.teaserImagesHover}
                      noCaption
                    />
                  </div>
                )
              })}
            </div>
            <div className="hidden md:block w-full">
              <Grid>
                <Link href={`/projects/${projects[0].slug.current}`}>
                  <div className="w-full group col-span-12 grid grid-cols-10 cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>
                    <div className="col-span-10 md:col-span-7 pt-[67px] md:pt-[78px] xl:pt-[80px] order-2 md:order-1 pb-3 md:pb-0">
                      <div className="px-5 w-full pb-3 md:pb-5">
                        <Teaser
                          projectCode={projects[0].projectCode}
                          title={projects[0].title}
                          slug={`/projects/${projects[0].slug.current}`}
                          images={projects[0].teaserImages}
                          hoverImages={projects[0].teaserImagesHover}
                          noCaption
                          className="hard-remove-bottom-pad"
                        />
                      </div>
                    </div>

                    <div className="col-span-10 md:col-span-3 p-5 order-1 md:order-2 text-center items-center justify-center hidden md:flex border-l border-black relative">
                      <div className="w-full">
                        <div className="relative overflow-hidden">
                          <m.span variants={reveal} className="block text-base md:text-xl xl:text-2xl leading-none md:leading-none xl:leading-none uppercase font-display mb-[2px]">{projects[0].title}</m.span>
                        </div>
                        
                        <div className="relative overflow-hidden">
                          <m.span variants={reveal} className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projects[0].projectCode}&nbsp;&nbsp;)</m.span>
                        </div>

                        
                        <div className="absolute bottom-0 left-0 right-0 m-5">
                          <Pill label="Explore Project" mouseOverride={true} shouldTransitionOverride={shouldTransition} parentHover={true} />
                        </div>
                      </div>
                    </div>

                    <div className="px-6 col-span-10 order-3 hidden md:block">
                      <div className="h-[1px] bg-black"></div>
                    </div>
                  </div>
                </Link>
              </Grid>

              <Grid>
                <div className="col-span-10 md:col-span-5 md:mt-[20vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[2].projectCode}
                      title={projects[2].title}
                      slug={`/projects/${projects[2].slug.current}`}
                      images={projects[2].teaserImages}
                      hoverImages={projects[2].teaserImagesHover}
                    />
                  </div>
                </div>

                <div className="col-span-10 md:col-span-4 md:col-start-7 md:mt-[8vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[1].projectCode}
                      title={projects[1].title}
                      slug={`/projects/${projects[1].slug.current}`}
                      images={projects[1].teaserImages}
                      hoverImages={projects[1].teaserImagesHover}
                    />
                  </div>
                </div>
              </Grid>
              
              <Grid>
                <div className="col-span-10 md:col-span-8 md:col-start-2 md:mt-[12vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[3].projectCode}
                      title={projects[3].title}
                      slug={`/projects/${projects[3].slug.current}`}
                      images={projects[3].teaserImages}
                      hoverImages={projects[3].teaserImagesHover}
                    />
                  </div>
                </div>
              </Grid>
              
              <Grid className="">
                <div className="col-span-10 md:col-span-4 md:mt-[35vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[5].projectCode}
                      title={projects[5].title}
                      slug={`/projects/${projects[5].slug.current}`}
                      images={projects[5].teaserImages}
                      hoverImages={projects[5].teaserImagesHover}
                    />
                  </div>
                </div>

                <div className="col-span-10 md:col-span-5 md:col-start-6 md:mt-[12vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[4].projectCode}
                      title={projects[4].title}
                      slug={`/projects/${projects[4].slug.current}`}
                      images={projects[4].teaserImages}
                      hoverImages={projects[4].teaserImagesHover}
                    />
                  </div>
                </div>
              </Grid>

              <Grid className="">
                <div className="col-span-10 md:col-span-7 md:col-start-4 md:mt-[15vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[6].projectCode}
                      title={projects[6].title}
                      slug={`/projects/${projects[6].slug.current}`}
                      images={projects[6].teaserImages}
                      hoverImages={projects[6].teaserImagesHover}
                    />
                  </div>
                </div>
              </Grid>

              <Grid className="">
                <div className="col-span-10 md:col-span-5 md:mt-[35vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[8].projectCode}
                      title={projects[8].title}
                      slug={`/projects/${projects[8].slug.current}`}
                      images={projects[8].teaserImages}
                      hoverImages={projects[8].teaserImagesHover}
                    />
                  </div>
                </div>

                <div className="col-span-10 md:col-span-4 md:col-start-7 md:mt-[12vw] mb-0 lg:mb-0">
                  <div className="px-5">
                    <Teaser
                      projectCode={projects[7].projectCode}
                      title={projects[7].title}
                      slug={`/projects/${projects[7].slug.current}`}
                      images={projects[7].teaserImages}
                      hoverImages={projects[7].teaserImagesHover}
                    />
                  </div>
                </div>
              </Grid>
              
              <Grid>
                <div className="col-span-10 md:col-span-10 mt-[25vw]">
                  <div className="col-span-10 md:col-span-7">
                    <div className="mb-[13vw] md:mb-[11.5vw] px-5">
                      <div className="w-full h-[1px] bg-black -skew-y-12"></div>
                    </div>
                  </div>
                  <Footer noRightPad />
                </div>
              </Grid>
            </div>
            <div className="md:hidden">
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