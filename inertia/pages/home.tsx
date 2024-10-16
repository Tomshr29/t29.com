import { Head } from '@inertiajs/react'
import { useState } from 'react'
import Contact from '~/components/Contact'
import Footer from '~/components/footer'
import Menu from '~/components/Menu'
import Pricing from '~/components/Pricing'
import Text from '~/components/Text'

const stats = [
  { id: 1, name: 'Sites Web Lancés', value: '1 200+' },
  { id: 2, name: 'Clients Servis', value: '350+' },
  { id: 3, name: 'Projets Complétés', value: '750+' },
]

export default function Home(props: { version: number }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Head title="Homepage" />

      <div className="flex justify-between py-8 px-12 absolute w-full">
        <Text as="p" className="text-xl text-neutral-700 text-center">
          T29
        </Text>
        <button className="text-lg" onClick={handleMenuClick}>
          <Text as="p" className="text-xl text-neutral-700 text-center">
            Menu
          </Text>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="h-screen flex items-center justify-center border-b border-neutral-100">
        <div className="w-full max-w-4xl">
          <Text as="h1" className="text-8xl font-medium text-center text-black/90 mb-4">
            A design agency with a twist
          </Text>
          <Text as="h1" className="hidden text-3xl font-semibold text-center text-black/90 mb-4">
            Design subscriptions for everyone.
          </Text>
          <Text as="p" className="text-xl text-neutral-700 text-center">
            Design subscriptions for everyone. Pause or cancel anytime.
          </Text>
          <div className="flex w-full justify-center items-center mt-6">
            <button className="bg-black text-white font-bold py-2.5 px-9 rounded-md shadow-lg ring-2 ring-gray-600 hover:bg-gray-800 transition duration-300 tracking-tight text-[17px]">
              <Text as="h1" className="text-xl font-semibold text-center">
                Get Started
              </Text>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32 border-b border-neutral-100" id="pricing">
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
      <Contact />
      <Pricing />
      <Footer />
    </>
  )
}
