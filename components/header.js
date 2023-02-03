import FancyLink from '@/components/fancyLink'
import Grid from '@/components/grid'
import Link from 'next/link'
import { HeaderContext } from '@/context/header'
import { useRouter } from 'next/router'
import { useContext } from 'react'

export default function Header({ bgColor, textColor}) {
  const router = useRouter()
  const [headerContext, setHeaderContext] = useContext(HeaderContext);

  return (
    <header className={`px-5 fixed top-0 left-0 right-0 z-20 ${bgColor ? `bg-blue` : 'bg-white'} ${textColor && 'text-grey' }`}>
      <Grid className={`items-center border-b ${textColor ? `border-grey` : 'border-black'} py-3`}>
        <div className="col-span-3">
          <div className="overflow-hidden relative">
            <Link href="/">
              <a className={`block w-24 md:w-28 xl:w-32 a11y-focus relative group transition-transform ease-[cubic-bezier(0.65,0,0.35,1)] duration-[700ms] ${!headerContext ? 'translate-y-full' : 'translate-y-0'}`}>
              
                <svg className="w-full fill-current" viewBox="0 0 129 23" fill="none"><path d="M8.09 0C3.41 0 .341 2.573.341 6.323c0 4.619 3.472 5.642 7.656 6.696 3.379.837 4.99 1.333 4.99 3.565 0 2.076-1.611 3.347-4.37 3.347-3.068 0-4.804-1.519-4.804-4.68H0C0 20.303 3.255 23 8.586 23c4.96 0 8.245-2.666 8.245-6.757 0-4.65-3.471-5.735-7.625-6.758-3.533-.868-5.052-1.488-5.052-3.503 0-1.797 1.488-2.944 3.874-2.944 2.852 0 4.433 1.426 4.433 4.215h3.75C16.212 2.511 13.454 0 8.092 0ZM21.799.465h-3.534v22.07h3.534v-8.741c0-3.007 1.58-4.526 3.595-4.526 1.984 0 3.193 1.116 3.193 3.937v9.33h3.534v-9.64c0-4.309-2.17-6.479-5.735-6.479-1.767 0-3.41.713-4.525 2.232h-.062V.465ZM38.056 6.788h-3.534v15.747h3.534V6.788Zm0-6.323h-3.534v3.379h3.534V.465ZM48.174 2.945c.31 0 .651.062.868.124V.465c-.465-.093-1.209-.217-1.86-.217-3.1 0-4.773 1.612-4.773 4.867v1.673h-2.666v2.697h2.666v13.05h3.502V9.485h3.618V6.788H45.91v-1.27c0-1.86.744-2.573 2.263-2.573Z"/><path d="M56.926 19.838c-1.55 0-2.138-.713-2.138-2.48V9.485h3.674l-.606-2.697h-3.068V2.852h-3.534v3.936h-2.635v2.697h2.635v8.4c0 3.441 1.457 4.836 4.774 4.836.65 0 1.456-.124 1.983-.279v-2.759c-.248.093-.682.155-1.085.155ZM86.079.465H82.42l-1.829 8.493c-.682 3.286-1.364 6.665-1.922 9.95h-.062a304.886 304.886 0 0 0-2.232-9.98L74.33.464h-4.897l-2.046 8.462a305.147 305.147 0 0 0-2.232 9.981h-.062c-.558-3.285-1.24-6.664-1.953-9.95L61.344.465h-3.658l4.866 22.07h4.991l2.2-9.175a207.923 207.923 0 0 0 2.109-9.702h.062c.62 3.254 1.333 6.478 2.108 9.702l2.2 9.175h4.99L86.08.465ZM92.469 6.323c-4.247 0-6.417 2.356-6.572 5.332h3.472c.093-1.674 1.147-2.759 3.1-2.759 1.797 0 3.068.93 3.068 3.255v.62c-1.116.062-2.975.248-4.246.465-4.526.713-6.045 2.387-6.045 4.96 0 2.696 2.046 4.68 5.332 4.68 2.387 0 4.153-.868 5.3-2.542h.062c0 .744.062 1.52.217 2.201h3.193c-.248-.992-.403-2.294-.403-4.154v-5.89c0-4.122-2.325-6.168-6.478-6.168Zm3.068 9.517c0 1.674-.248 2.51-1.085 3.378-.712.713-1.766 1.054-2.851 1.054-1.798 0-2.79-.93-2.79-2.325 0-1.425.837-2.107 3.1-2.48 1.054-.185 2.572-.34 3.626-.402v.775ZM104.86.465h-3.533v22.07h3.533V.465ZM114.069 13.98l6.51-7.192h-4.123l-5.734 6.448h-.062V.465h-3.534v22.07h3.534V14.91h.062l6.137 7.625h4.464l-7.254-8.555ZM124.855 15.602c-2.076 0-3.466 1.443-3.466 3.6 0 2.155 1.39 3.599 3.466 3.599 2.086 0 3.466-1.444 3.466-3.6s-1.38-3.6-3.466-3.6Zm0 .497c1.796 0 2.993 1.239 2.993 3.102 0 1.863-1.197 3.102-2.993 3.102-1.796 0-2.984-1.239-2.984-3.102 0-1.863 1.188-3.102 2.984-3.102Zm.019.79c-1.226 0-1.979.878-1.979 2.322 0 1.424.743 2.302 1.96 2.302 1.072 0 1.786-.644 1.873-1.678h-.83c-.068.586-.454.976-1.043.976-.695 0-1.13-.615-1.13-1.6 0-1.005.435-1.62 1.149-1.62.589 0 .956.381 1.005.947h.82c-.048-.976-.724-1.649-1.825-1.649Z"/></svg>
              </a>
            </Link>
          </div>
        </div>

        <nav className="col-span-6 col-start-6 text-right text-lg md:text-xl xl:text-2xl leading-none">
          <div className="overflow-hidden relative w-full">
            <div className={`hidden md:flex space-x-[5px] justify-end items-center transition-transform ease-[cubic-bezier(0.65,0,0.35,1)] duration-[700ms] ${!headerContext ? 'translate-y-full' : 'translate-y-0' }`}>
              <Link href="/">
                <a className={`a11y-focus w-auto transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[150ms] ${router.asPath == '/' ? 'text-black' : 'opacity-30 hover:text-black focus:text-black hover:opacity-100 focus:opacity-100' }`}>
                  <span className="block">Studio,</span>
                </a>
              </Link>

              <Link href="/projects">
                <a className={`a11y-focus w-auto transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[150ms] ${router.asPath.includes('/projects') ? 'text-black' : 'opacity-30 hover:text-black focus:text-black hover:opacity-100 focus:opacity-100' }`}>
                  <span className="block">Projects,</span>
                </a>
              </Link>

              <Link href="/journal">
                <a className={`a11y-focus w-auto transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[150ms] ${router.asPath.includes('/journal') ? 'text-black' : 'opacity-30 hover:text-black focus:text-black hover:opacity-100 focus:opacity-100' }`}>
                  <span className="block">Journal,</span>
                </a>
              </Link>

              <Link href="/contact">
                <a className={`a11y-focus w-auto transition-opacity ease-[cubic-bezier(0.65,0,0.35,1)] duration-[150ms] ${router.asPath == '/contact' ? 'text-black' : 'opacity-30 hover:text-black focus:text-black hover:opacity-100 focus:opacity-100' }`}>
                  <span className="block">Contact</span>
                </a>
              </Link>
            </div>
            <Link href="/menu">
              <a className="block md:hidden w-8 ml-auto mt-[2px] py-1 a11y-focus">
                <span className={`block w-full h-[2px] mb-1 ${textColor ? `bg-current` : 'bg-black'}`}></span>
                <span className={`block w-full h-[2px] ${textColor ? `bg-current` : 'bg-black'}`}></span>
              </a>
            </Link>
          </div>
        </nav>
      </Grid>
    </header>
  )
}