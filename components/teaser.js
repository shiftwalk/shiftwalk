import Link from "next/link";
import Image from "@/components/image";
import Gif from "@/components/gif";

export default function Teaser({ images, slug, title, projectCode }) {
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
        <span className="mt-[6px] block text-base md:text-lg xl:text-2xl leading-none md:leading-none xl:leading-none">{title}</span>
        <span className="font-serif text-sm md:text-base xl:text-lg leading-none hidden md:block">(&nbsp;&nbsp;{projectCode}&nbsp;&nbsp;)</span>
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