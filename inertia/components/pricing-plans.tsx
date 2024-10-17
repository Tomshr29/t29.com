import { pricingPlans } from "../data";

export default function PricingPlans() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 gap-8 px-4 py-24 sm:px-6 lg:px-8">
      {pricingPlans.map((plan) => (
        <div
          key={plan.title}
          className="rounded-lg border border-slate-200 bg-white p-8 shadow-lg"
        >
          <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
          <p className="mt-4 text-sm text-slate-700">{plan.description}</p>
        </div>
      ))}
    </div>
  );
}
