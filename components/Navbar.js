import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [btn, setBtn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="antialiased  dark-mode:bg-gray-900 w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow ">
        <div className="flex flex-col max-w-screen-xl mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 md:gap-3">
          <div className="flex flex-row items-center p-4 justify-between">
            <a
              href="#"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline flex items-center justify-between"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Septa</span>
            </a>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline  items-center"
              onClick={() => setVisible(!visible)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {visible ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
            </button>
          </div>

          <nav className="flex items-center justify-start md:justify-center transition-all h-screen">
            <ul
              className={`flex flex-col flex-grow pb-4 md:pb-0  md:justify-end  items-center  md:flex-row min-h-screen absolute z-10 md:z-0 w-1/2  ${
                visible ? "-left-full" : "left-0"
              }`}
            >
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-400">
                <a href="#">Blog</a>
              </li>
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-400">
                <a href="#">Portfolio</a>
              </li>
              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-400">
                <a href="#">About</a>
              </li>

              <li className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-400">
                <a href="#">Contact</a>
              </li>
              <li>
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button className="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-gray-400">
                        <span>More</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                            open ? "rotate-0" : "rotate-180"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </Menu.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-50 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-300 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-50 opacity-0"
                      >
                        <Menu.Items className="absolute z-40  right-0 md:w-40 w-56 mt-2 flex md:flex-col shadow-lg py-3 px-2 focus:outline-none ">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active ? "bg-gray-200 " : "text-gray-900"
                                } group w-full px-2 py-2 text-sm flex flex-row items-start rounded-lg p-2 focus:outline-none focus:shadow-outline`}
                                href="/#"
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active ? "bg-gray-200 " : "text-gray-900"
                                } group w-full px-2 py-2 text-sm flex flex-row items-start rounded-lg p-2 focus:outline-none focus:shadow-outline`}
                                href="/#"
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={`${
                                  active ? "bg-gray-200 " : "text-gray-900"
                                } group w-full px-2 py-2 text-sm flex flex-row items-start rounded-lg p-2 focus:outline-none focus:shadow-outline`}
                                href="/#"
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
