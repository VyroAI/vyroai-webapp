import React from "react";
import plans from "@/components/landing/pricing/store/pricing";

export default function PricingCard() {
  return (
    <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      {plans.map((plan, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900">{plan.title}</h2>
          {plan.price ? (
            <div className="mt-4">
              <span className="text-4xl font-extrabold text-gray-900">
                ${plan.price}
              </span>
              <span className="text-base font-medium text-gray-500">/mo</span>
            </div>
          ) : (
            <></>
          )}
          <ul className="mt-6 space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="text-base text-gray-500">
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
