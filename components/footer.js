import { useState } from "react";

export default function Footer({ noRightPad, bgColor, noTop }) {
  const [shouldTransition, setShouldTransition] = useState(false);

  function handleHover() {
    setShouldTransition(true);
  }

  function handleHoverOut() {
    setShouldTransition(false);
  }
  return (
    <footer className={`pl-5 ${noRightPad ? 'pr-5' : '' } ${bgColor ? `bg-grey` : 'bg-white'}`}>
      <div className={`flex flex-wrap items-center border-t border-black pt-3 pb-2 ${noRightPad ? '' : 'pr-3' }`}>
        <div className="mr-auto">
          <div className="flex items-center">
            <span className="w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] bg-black flex items-center justify-center rounded-full mt-[-1px] mr-2">
              <svg className="w-[70%]" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.28802 0.222656C2.72472 0.222656 1.04415 1.63162 1.04415 3.68565C1.04415 6.21499 2.9454 6.77518 5.23709 7.35235C7.08742 7.81068 7.97014 8.08229 7.97014 9.30452C7.97014 10.4419 7.08741 11.1379 5.5766 11.1379C3.89603 11.1379 2.9454 10.3061 2.9454 8.57458H0.857422C0.857422 11.3416 2.63985 12.8184 5.55962 12.8184C8.2757 12.8184 10.0751 11.3586 10.0751 9.11779C10.0751 6.57148 8.17384 5.97734 5.89913 5.41715C3.96393 4.94183 3.13213 4.60232 3.13213 3.49892C3.13213 2.51434 3.94696 1.88625 5.25407 1.88625C6.81581 1.88625 7.68156 2.66712 7.68156 4.19491H9.73559C9.73559 1.59767 8.22477 0.222656 5.28802 0.222656Z" fill={bgColor ? '#ABAEA8' : 'white' } />
                <path d="M25.8884 0.477289H23.8853L22.8837 5.12856C22.5103 6.92796 22.1368 8.77829 21.8313 10.5777H21.7973C21.4239 8.77829 21.0164 6.92796 20.5751 5.11159L19.4547 0.477289H16.7726L15.6522 5.11159C15.2108 6.92796 14.8034 8.77829 14.43 10.5777H14.396C14.0905 8.77829 13.717 6.92796 13.3266 5.12856L12.342 0.477289H10.3389L13.004 12.5638H15.7371L16.9423 7.53908C17.3667 5.77363 17.7572 4.00818 18.0967 2.22576H18.1306C18.4701 4.00818 18.8606 5.77363 19.2849 7.53908L20.4902 12.5638H23.2233L25.8884 0.477289Z" fill={bgColor ? '#ABAEA8' : 'white' } />
                <path d="M27.728 7.30859C26.1574 7.30859 25.1055 8.38977 25.1055 10.0042C25.1055 11.6187 26.1574 12.6998 27.728 12.6998C29.306 12.6998 30.3506 11.6187 30.3506 10.0042C30.3506 8.38977 29.306 7.30859 27.728 7.30859ZM27.728 7.68116C29.0868 7.68116 29.9927 8.60892 29.9927 10.0042C29.9927 11.3995 29.0868 12.3273 27.728 12.3273C26.3693 12.3273 25.4707 11.3995 25.4707 10.0042C25.4707 8.60892 26.3693 7.68116 27.728 7.68116ZM27.7427 8.27288C26.8149 8.27288 26.2451 8.93035 26.2451 10.0115C26.2451 11.0781 26.8076 11.7356 27.728 11.7356C28.5389 11.7356 29.0795 11.2534 29.1453 10.4791H28.517C28.4659 10.9174 28.1737 11.2096 27.728 11.2096C27.2021 11.2096 26.8733 10.7494 26.8733 10.0115C26.8733 9.25909 27.2021 8.79886 27.7427 8.79886C28.1883 8.79886 28.4659 9.08376 28.5024 9.50747H29.1233C29.0868 8.77694 28.5755 8.27288 27.7427 8.27288Z" fill={bgColor ? '#ABAEA8' : 'white' } />
              </svg>
            </span>

            <span className="text-sm leading-none">ShiftWalk Studio Ltd<span className="hidden md:inline">, Copyright 2023</span></span>
          </div>
        </div>

        {!noTop && (
          <div className="w-auto ml-auto flex space-x-2 md:space-x-3 lg:space-x-5">
            <a href="mailto:hello@shiftwalk.studio" target="_blank" rel="noopener noreferrer" className={`text-sm leading-none a11y-focus ${ shouldTransition && 'nav-item-hover' }`} onMouseEnter={handleHover } onMouseLeave={handleHoverOut }>Email</a>

            <a href="https://www.instagram.com/shiftwalk.studio/" target="_blank" rel="noopener noreferrer" className={`text-sm leading-none a11y-focus ${ shouldTransition && 'nav-item-hover' }`} onMouseEnter={handleHover } onMouseLeave={handleHoverOut }>Instagram</a>

            <a href="#" className={`text-sm leading-none a11y-focus ${ shouldTransition && 'nav-item-hover' }`} onMouseEnter={handleHover } onMouseLeave={handleHoverOut }>Top</a>
          </div>
        )}
      </div>
    </footer>
  )
}