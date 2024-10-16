import Text from './Text'

const Contact = () => {
  return (
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
        <div className="mt-10 flex items-end w-full justify-end">
          <button className="bg-black text-white font-bold py-2.5 px-9 rounded-md shadow-lg ring-2 ring-gray-600 hover:bg-gray-800 transition duration-300 tracking-tight text-[17px]">
            <Text as="h1" className="text-xl font-semibold text-center">
              Submit
            </Text>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
