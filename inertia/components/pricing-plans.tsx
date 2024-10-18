import { pricingPlans } from "../data";

export default function PricingPlans() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="flex-1 bg-slate-50"></div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="relative flex flex-col rounded-lg border border-slate-200 bg-white p-8 shadow-lg"
          >
            <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 rounded-full bg-cyan-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md">
                Most Popular
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {plan.description}
            </p>
            <div className="-mx-6 mt-4 rounded-lg bg-slate-50 p-6">
              <p className="flex items-center text-sm font-semibold text-slate-500">
                <span>{plan.currency}</span>
                <span className="ml-3 text-4xl text-slate-900">
                  ${plan.price}
                </span>
                <span className="ml-1.5">{plan.frequency}</span>
              </p>
            </div>
            <ul className="mt-6 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex text-sm leading-6 text-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="5 w-5 shrink-0 text-cyan-500"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="ml-3">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 ${plan.mostPopular ? "bg-cyan-500 text-white shadow-md hover:bg-cyan-600" : "bg-cyan-50 text-cyan-700 hover:bg-cyan-100"} `}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
