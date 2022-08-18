import Link from "next/link";
import Image from "@/components/image";

export default function Teaser({ images, slug }) {
  return images.length == 1 ? (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full group overflow-hidden relative mb-4">
        <Image
          image={images[0]}
          focalPoint={images[0].asset.hotspot}
          layout="responsive"
          sizes="(min-width: 768px) 1vw, 100vw"
          className="w-full"
        />

        TESTTT
      </a>
    </Link>
  ) : (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full group overflow-hidden relative mb-4">
        <Image
          image={images[0]}
          focalPoint={images[0].asset.hotspot}
          layout="responsive"
          sizes="(min-width: 768px) 1vw, 100vw"
          className="w-full"
        />
      </a>
    </Link>
  )
}