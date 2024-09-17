import { Head } from '@inertiajs/react'
import Text from '~/components/Text'

const stats = [
  { id: 1, name: 'Sites Web Lancés', value: '1 200+' },
  { id: 2, name: 'Clients Servis', value: '350+' },
  { id: 3, name: 'Projets Complétés', value: '750+' },
]

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="h-screen flex items-center justify-center border-b border-neutral-100">
        <div className="w-full max-w-4xl">
          <Text as="h1" className="text-9xl font-semibold text-center text-black/90 mb-4">
            T29,
          </Text>
          <Text as="h1" className="text-3xl font-semibold text-center text-black/90 mb-4">
            Design subscriptions for everyone.
          </Text>
          <Text as="p" className="text-xl text-neutral-700 text-center">
            Design subscriptions for everyone. Pause or cancel anytime.
          </Text>
          <div className="flex w-full justify-center items-center mt-6">
            <button className="bg-[#fae100] font-bold text-black/90 uppercase py-2 px-11 rounded-md  transition duration-300 tracking-tight text-[17px]">
              <span className="inline-block transform scale-y-90 text-[#fae100]">Get Started</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32 border-b border-neutral-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <Text as="dt" className="text-base leading-7 text-gray-600">
                  {stat.name}
                </Text>
                <Text
                  as="dd"
                  className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                >
                  {stat.value}
                </Text>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Text as="h2" className="text-3xl font-semibold sm:text-4xl">
            Envoyer un message
          </Text>
          <Text as="p" className="mt-2 text-lg leading-8 text-gray-600">
            Design subscriptions for everyone. Pause or cancel anytime.
          </Text>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <Text
                as="label"
                htmlFor="first-name"
                className="block font-medium text-[17px] leading-6 text-gray-900"
              >
                Prénom
              </Text>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <Text
                as="label"
                htmlFor="first-name"
                className="block font-medium text-[17px] leading-6 text-gray-900"
              >
                Nom
              </Text>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Text
                as="label"
                htmlFor="first-name"
                className="block font-medium text-[17px] leading-6 text-gray-900"
              >
                Adresse email
              </Text>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <Text
                as="label"
                htmlFor="first-name"
                className="block font-medium text-[17px] leading-6 text-gray-900"
              >
                Message
              </Text>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button className="w-full bg-[#fae100] font-bold text-black/90 uppercase py-2 px-11 rounded-md  transition duration-300 tracking-tight text-[17px]">
              <span className="inline-block transform scale-y-90 text-[#fae100]">Get Started</span>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
