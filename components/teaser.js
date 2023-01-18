import Link from "next/link";
import Image from "@/components/image";
import Gif from "@/components/gif";
// import PixelatedImage from "./pixelated-image";

export default function Teaser({ images, slug, title, projectCode, noCaption }) {
  return images.length == 1 ? (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full group overflow-hidden relative">
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

        <div className={noCaption ? 'block md:hidden' : '' }>
          <span className="mt-[6px] block text-base md:text-lg xl:text-2xl leading-none md:leading-none xl:leading-none">{title}</span>
          <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`/projects/${slug}`}>
      <a className="block">
        <Gif images={images} />
               
        <span className="mt-[6px] block text-base md:text-lg xl:text-2xl leading-none md:leading-none xl:leading-none">{title}</span>
        <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
      </a>
    </Link>
  )
}