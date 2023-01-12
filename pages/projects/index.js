import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Grid from '@/components/grid'
import SanityPageService from '@/services/sanityPageService'
import Teaser from '@/components/teaser'

const query = `{
  "projects": *[_type == "projects"] | order(orderRank) {
    title,
    services[],
    projectCode,
    teaserImages[] {
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
              <div className="col-span-10 md:col-span-7 pt-[20px] md:pt-[78px] xl:pt-[80px] order-2 md:order-1 pb-3 md:pb-0">
                <div className="px-5 w-full">
                  <Teaser
                    projectCode={projects[0].projectCode}
                    title={projects[0].title}
                    slug={projects[0].slug.current}
                    images={projects[0].teaserImages}
                  />
                </div>
              </div>

              <div className="col-span-10 md:col-span-3 p-5 md:px-0 pt-[63px] md:pt-[83px] xl:pt-[85px] order-1 md:order-2">
                <span className="flex items-center mb-6 text-sm">
                  <span className="font-serif leading-none text-xs block mr-[6px]">( A )</span>
                  <span className="block leading-none">Projects</span>
                </span>

                <div className="text-sm leading-snug w-[70%] max-w-[300px]">
                  <p>Scroll to explore a number of projects that we have had the pleasure of working on over the past few years. It is not an exhaustive list, but should good a good flavour of what we’re all about, and the projects we enjoy taking on.</p>
                </div>
              </div>
            </Grid>
            
            <Grid>
              <div className="col-span-10 md:col-span-5 md:mt-[20vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[1].projectCode}
                    title={projects[1].title}
                    slug={projects[1].slug.current}
                    images={projects[1].teaserImages}
                  />
                </div>
              </div>

              <div className="col-span-10 md:col-span-4 md:col-start-7 md:mt-[8vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[2].projectCode}
                    title={projects[2].title}
                    slug={projects[2].slug.current}
                    images={projects[2].teaserImages}
                  />
                </div>
              </div>
            </Grid>
            
            <Grid>
              <div className="col-span-10 md:col-span-8 md:col-start-2 md:mt-[12vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[3].projectCode}
                    title={projects[3].title}
                    slug={projects[3].slug.current}
                    images={projects[3].teaserImages}
                  />
                </div>
              </div>
            </Grid>
            
            <Grid className="">
              <div className="col-span-10 md:col-span-4 md:mt-[35vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[4].projectCode}
                    title={projects[4].title}
                    slug={projects[4].slug.current}
                    images={projects[4].teaserImages}
                  />
                </div>
              </div>

              <div className="col-span-10 md:col-span-5 md:col-start-6 md:mt-[12vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[5].projectCode}
                    title={projects[5].title}
                    slug={projects[5].slug.current}
                    images={projects[5].teaserImages}
                  />
                </div>
              </div>
            </Grid>

            <Grid className="">
              <div className="col-span-10 md:col-span-7 md:col-start-4 md:mt-[15vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[6].projectCode}
                    title={projects[6].title}
                    slug={projects[6].slug.current}
                    images={projects[6].teaserImages}
                  />
                </div>
              </div>
            </Grid>

            <Grid className="">
              <div className="col-span-10 md:col-span-5 md:mt-[35vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[7].projectCode}
                    title={projects[7].title}
                    slug={projects[7].slug.current}
                    images={projects[7].teaserImages}
                  />
                </div>
              </div>

              <div className="col-span-10 md:col-span-4 md:col-start-7 md:mt-[12vw] mb-3 lg:mb-0">
                <div className="px-5">
                  <Teaser
                    projectCode={projects[8].projectCode}
                    title={projects[8].title}
                    slug={projects[8].slug.current}
                    images={projects[8].teaserImages}
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