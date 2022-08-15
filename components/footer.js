export default function Footer() {
  return (
    <footer className="pl-3">
      <div className="flex flex-wrap items-center border-t border-black pr-3 py-3">
        <div className="mr-auto">
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl xl:text-2xl leading-none">Instagram</a>
        </div>

        <div className="md:mx-auto w-auto">
          <span className="block uppercase leading-none md:leading-none text-xs md:text-sm">( © 2022 — SHIFTWALK STUDIO <span className="hidden md:inline-block">LIMITED</span> )</span>
        </div>

        <div className="w-auto ml-auto">
          <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl xl:text-2xl leading-none">Email</a>
        </div>
      </div>
    </footer>
  )
}