export default function Footer({ noRightPad }) {
  return (
    <footer className={`pl-3 ${noRightPad ? 'pr-3' : '' }`}>
      <div className={`flex flex-wrap items-center border-t border-black pt-3 pb-2 ${noRightPad ? '' : 'pr-3' }`}>
        <div className="mr-auto">
          <a href="https://www.instagram.com/_shiftwalk.studio/" rel="noreferrer noopener" target="_blank" className="text-lg md:text-xl xl:text-2xl leading-none a11y-focus">Instagram</a>
        </div>

        <div className="md:mx-auto w-auto">
          <span className="block uppercase leading-none md:leading-none text-xs md:text-sm">( © 2022 — SHIFTWALK STUDIO <span className="hidden md:inline-block">LIMITED</span> )</span>
        </div>

        <div className="w-auto ml-auto">
          <a href="mailto:hello@shiftwalk.studio" className="text-lg md:text-xl xl:text-2xl leading-none a11y-focus">Email</a>
        </div>
      </div>
    </footer>
  )
}