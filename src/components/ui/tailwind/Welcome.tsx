import type { FC } from 'react'

type Props = {
  title: string
}

const Welcome: FC<Props> = ({ title }) => {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-4xl font-extrabold text-black dark:text-white sm:text-6xl">
          <span className="block">{title}</span>
          <span className="block text-3xl text-indigo-500 sm:text-4xl">Built with Tailwind-Kit</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Create dynamic, performant apps quickly with the power of Next.js + TailwindCSS combined with Emotion for
          CSS-in-JS styling.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
            >
              <a
                href="https://github.com/tundera/tw-next/blob/with-twin-macro/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get started
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
