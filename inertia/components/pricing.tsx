import {
  AlertCircle,
  ChartLine,
  CloudUpload,
  Gauge,
  Layers,
  MessageCircleMore,
  Paintbrush,
  RefreshCw,
  Truck,
} from 'lucide-react'
import Text from './Text'
import { Link } from '@inertiajs/react'

const Pricing = () => {
  return (
    <div className="h-screen px-8 w-2/3 mx-auto">
      <Text as="h2" className="text-2xl font-semibold sm:text-3xl mb-3">
        Pricing
      </Text>
      <div className="grid grid-cols-2 gap-x-6">
        <div className="p-3 border border-neutral-100 rounded-lg bg-neutral-100">
          <div className="w-full flex flex-col bg-white p-3 rounded-lg">
            <Text as="span" className="text-lg font-medium">
              Landing page
            </Text>
            <Text as="span" className="text-2xl font-medium">
              $898
            </Text>
            <Text as="span" className="mt-2 text-sm text-gray-600 w-3/4">
              An awesome one-pager focused on conversions ans SEO.
            </Text>
            <button className="bg-black mt-4 text-white font-medium py-2 px-9 rounded-md shadow-lg ring-2 ring-gray-600 hover:bg-gray-800 transition duration-300 tracking-tight text-[17px]">
              <Text as="h1" className="text-base font-semibold text-center">
                Book a call
              </Text>
            </button>
          </div>
          <div className="flex flex-col space-y-1 mt-3">
            <div className="flex items-center space-x-3">
              <Layers color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Home + 404 page
              </Text>
            </div>
            <div className="flex items-center space-x-3">
              <Paintbrush color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Unique, responsive design
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <ChartLine color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                On-page SEO
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <MessageCircleMore color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Communication via Slack or Discord
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <Gauge color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Speed optimization
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <RefreshCw color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Unlimited revisions
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <CloudUpload color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Updates every 48 hours
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <Truck color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Delivered in 1 week
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <AlertCircle color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Post-launch support
              </Text>
            </div>
          </div>
        </div>
        <div className="p-3 border border-neutral-100 rounded-lg bg-neutral-100">
          <div className="w-full flex flex-col bg-white p-3 rounded-lg">
            <Text as="span" className="text-lg font-medium">
              Multi-page websites
            </Text>
            <Text as="span" className="text-2xl font-medium">
              $1898
            </Text>
            <Text as="span" className="mt-2 text-sm text-gray-600 w-3/4">
              A full scale beast with multiple pages, CMS, integrations and more.
            </Text>
            <button className="bg-blue-500 mt-4 text-white font-medium py-2 px-9 rounded-md shadow-lg ring-2 ring-blue-400 hover:bg-blue-800 transition duration-300 tracking-tight text-[17px]">
              <Text as="h1" className="text-base font-semibold text-center">
                Book a call
              </Text>
            </button>
          </div>
          <div className="flex flex-col space-y-1 mt-3">
            <div className="flex items-center space-x-3">
              <Layers color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Up to 10 pages
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <Paintbrush color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Unique, responsive design
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <ChartLine color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                On-page SEO
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <MessageCircleMore color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Communication via Slack or Discord
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <Gauge color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Speed optimization
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <RefreshCw color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Unlimited revisions
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <CloudUpload color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Updates every 48 hours
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <Truck color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Delivered in 2-3 weeks (on average)
              </Text>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <AlertCircle color="gray" size={18} />
              <Text as="span" className="text-[15px] text-neutral-700">
                Post-launch support
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Text as="span" className="text-[15px] text-gray-600">
          You can also directly hire me on{' '}
          <Link
            href="https://fr.fiverr.com/tomshr29/do-create-a-powerfull-website"
            className="underline font-medium text-black"
          >
            Fiverr
          </Link>
        </Text>
      </div>
    </div>
  )
}

export default Pricing
