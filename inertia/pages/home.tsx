import { Head } from "@inertiajs/react";
import { useState } from "react";
import Contact from "~/components/Contact";
import Footer from "~/components/footer";
import Menu from "~/components/Menu";
import PricingPlans from "~/components/pricing-plans";
import Text from "~/components/Text";

const stats = [
  { id: 1, name: "Sites Web Lancés", value: "1 200+" },
  { id: 2, name: "Clients Servis", value: "350+" },
  { id: 3, name: "Projets Complétés", value: "750+" },
];

export default function Home(props: { version: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Head title="Homepage" />

      <div className="absolute flex w-full justify-between px-12 py-8">
        <Text as="p" className="text-center text-xl text-neutral-700">
          T29
        </Text>
        <button className="text-lg" onClick={handleMenuClick}>
          <Text as="p" className="text-center text-xl text-neutral-700">
            Menu
          </Text>
        </button>
      </div>

      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex h-screen items-center justify-start bg-black px-20">
        <div className="w-full max-w-4xl">
          <Text
            as="h1"
            className="leading-2 mb-4 text-start text-9xl font-medium tracking-tighter text-white"
          >
            Boost your website's SEO.
          </Text>
          <Text
            as="h1"
            className="mb-4 hidden text-start text-3xl font-semibold text-white"
          >
            Design subscriptions for everyone.
          </Text>
          <Text as="p" className="text-start text-xl text-neutral-300">
            Design subscriptions for everyone. Pause or cancel anytime.
          </Text>
          <div className="mt-6 flex w-full items-center justify-start">
            <button className="rounded-md bg-blue-600 px-9 py-2.5 text-[17px] font-bold tracking-tight text-white shadow-lg ring-2 ring-blue-500 transition duration-300 hover:bg-gray-800">
              <Text as="h1" className="text-center text-xl font-semibold">
                Get Started
              </Text>
            </button>
          </div>
        </div>
      </div>

      <div
        className="border-b border-neutral-100 bg-white py-24 sm:py-32"
        id="pricing"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
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
      <main>
        <div className="mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight sm:tracking-tight">
            Pricing plans for teams of all sizes
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-500">
            Choose an affordable plan that's packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>
        <PricingPlans />
      </main>
      <Footer />
    </>
  );
}
