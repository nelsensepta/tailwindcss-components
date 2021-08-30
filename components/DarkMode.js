import { useEffect } from "react";

export default function DarkMode() {
  const selectTheme = (value) => {
    localStorage.setItem("theme", value);
    document.querySelector("html").classList.add(localStorage.getItem("theme"));

    if (value === "dark") {
      document.querySelector("html").classList.remove("light");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.removeItem("theme");
  }, []);

  return (
    <div className="flex antialiased items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-700">
      <div className="w-5/12 space-y-2">
        {/* <ColorsPallete /> */}
        {/* <Card /> */}
        {/* <Ring /> */}

        <div className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg flex justify-between items-center ">
          <div className="font-semibold text-lg text-gray-800 dark:text-white">
            Switcher
          </div>
          <div className="space-x-1 mt-1 items-center">
            <button
              onClick={() => selectTheme("light")}
              className="focus:outline-none w-5 h-5 bg-gray-200 rounded-full"
            ></button>
            <button
              onClick={() => selectTheme("dark")}
              className="focus:outline-none w-5 h-5 bg-black rounded-full"
            ></button>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg dark:bg-gray-800 overflow-hidden">
          <div className="px-10 py-8 ">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Judul
            </h1>
            <div className="leading-relaxed text-gray-500 text-lg dark:text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to
            </div>
          </div>
          <div className="px-10 py-6 border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-900 dark:text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not s
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  );
}
