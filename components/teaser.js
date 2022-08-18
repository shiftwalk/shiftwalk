import Link from "next/link";
import Image from "@/components/image";
import { useEffect, useRef, useState } from "react";

export default function Teaser({ images, slug }) {
  const ref = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let speed = 750

    // Set an interval that updates the currentProject every 3 seconds on mobile to rotate the projects
    const i_id = setInterval(() => {
      if (currentImage == (images.length - 1)) {
        // If we hit the cap (5)... Reset...
        setCurrentImage(0)
      } else {
        // Else... Tick along...
        setCurrentImage(currentImage => currentImage+1)
      }
    }, speed);
    return () => {
      clearInterval(i_id);
    }
  },[currentImage]);

  return images.length == 1 ? (
    <Link href={`/projects/${slug}`}>
      <a className="block w-full group overflow-hidden relative mb-4">
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
    <div className="relative overflow-hidden">
      {images.map((e, i) => {
        return (
          <Link href={`/projects/${slug}`}>
            <a className={`block w-full group mb-4 ${i == 0 ? 'relative' : 'absolute inset-0' } ${i == currentImage ? 'z-[10]' : 'z-[1] opacity-0' }`} ref={ref}>
              <Image
                image={e}
                focalPoint={e.asset.hotspot}
                layout="responsive"
                sizes="(min-width: 768px) 80vw, 100vw"
                className="w-full"
              />
            </a>
          </Link>
        )
      })}
    </div>
  )
}