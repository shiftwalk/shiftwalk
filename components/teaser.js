import Link from "next/link";
import Image from "@/components/image";
import Gif from "@/components/gif";
import Pill from "./pill";
import { m } from "framer-motion"
import { reveal } from "@/helpers/transitions";
// import PixelatedImage from "./pixelated-image";

export default function Teaser({ images, slug, title, projectCode, noCaption }) {
  return images.length == 1 ? (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full group overflow-hidden relative group">
        <Image
          image={images[0]}
          focalPoint={images[0].asset.hotspot}
          layout="responsive"
          sizes="(min-width: 768px) 80vw, 100vw"
          className="w-full"
        />
        
        {/* <PixelatedImage
          image={`${images[0].asset.url}?q=1&w=${images[0].asset.metadata.dimensions.width/2}&fit=clip&auto=format`}
          sanityImage={images[0]}
          width={images[0].asset.metadata.dimensions.width/4}
          height={images[0].asset.metadata.dimensions.height/4}
        /> */}

        <div className={`${noCaption ? 'block md:hidden' : '' } text-center`}>
          <div className="my-4 md:my-5">
            <div className="overflow-hidden relative">
              <m.span variants={reveal} className="block text-base md:text-lg xl:text-xl leading-none md:leading-none xl:leading-none uppercase font-display">{title}</m.span>
            </div>
            <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
          </div>

          <div className="mb-2 md:mb-0">
            <Pill label="Explore Project" />
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`/projects/${slug}`}>
      <a className="block">
        <Gif images={images} />
        
        <div className="relative overflow-hidden">
          <m.span variants={reveal} className="mt-[6px] block text-base md:text-lg xl:text-2xl leading-none md:leading-none xl:leading-none">{title}</m.span>
        </div>
        <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
      </a>
    </Link>
  )
}