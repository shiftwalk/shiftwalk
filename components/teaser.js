import Link from "next/link";
import Image from "@/components/image";
import Gif from "@/components/gif";

export default function Teaser({ images, slug }) {
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
      </a>
    </Link>
  ) : (
    <Link href={`/projects/${slug}`}>
      <a className="block">
        <Gif images={images} />
      </a>
    </Link>
  )
}